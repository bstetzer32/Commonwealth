import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import {useSelector, useDispatch} from 'react-redux'
import { makeStyles } from "@material-ui/core/styles";
import DonationForm from "./forms/DonationForm";
import { Grid, Button } from "@material-ui/core";
import {deleteProject} from '../store/project'
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles((theme) => ({
    title: {
        width: '100%',
        height: '60px',
        margin: '0px',
        textAlign: 'center',
        padding: theme.spacing(1),
    },
    tagline: {
        width: '100%',
        height: '40px',
        margin: '0px',
        textAlign: 'center',
        padding: theme.spacing(1)
    },
    grid: {
        width: '100%',
        margin: '0px',
        padding: '0px'
    },
    location: {
        width: '100%',
        height: '20px',
        textAlign: 'center'
    },
    info: {
        width: '100%',
        height: '20px',
        textAlign: 'center'
    },
}))

const ProjectPage = () => {
    const [project, setProject] = useState({});
    const [goalAmount, setGoalAmount] = useState(null);
    const [donatedAmount, setDonatedAmount] = useState(null);
    const [contributors, setContributors] = useState(0);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch()
    const history = useHistory()
    const user = useSelector((state) => state.session.user)
    const { projectId } = useParams();
    const classes = useStyles();

  const formatNumber = (goal) => {
    const goalAmount = goal.toString();
    let count = 1;
    let result = [];
    for (let i = goalAmount.length - 1; i >= 0; i--) {
      console.log(goalAmount[i]);
      result.unshift(goalAmount[i]);
      if (count === 3) {
        result.unshift(",");
        count = 0;
      }
      count++;
    }
    return result.join("");
  };

    useEffect(() => {
        if (!projectId) {
            return
        }
        (async () => {
            const response = await fetch(`/api/project/${projectId}`);
            const proj = await response.json();
            setProject(proj);
            setGoalAmount(formatNumber(proj.goal));
            setDonatedAmount(formatNumber(proj.amount_raised))
            const res = await fetch(`/api/project/${projectId}/donations`);
            const donators = await res.json();
            setContributors(donators)
        })();
    }, [projectId, ]);

    if (!project) {
        return null
    }


    const handleClickOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };
    const deleteAProject = async () => {
        await dispatch(deleteProject(projectId))
        history.push('/')
    }
    return (
        <>
            <Grid container spacing={2} className={classes.grid} id='projectTitleGrid'>
                <Grid item xs={12} className={classes.title} id='projectTitle'>{project.title}
                </Grid>
                <Grid item xs={12} className={classes.tagline} id='projectTagline'>This ish is super hot fire
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.grid} id='projectInfoGrid'>
                <Grid item xs={false} md={3}></Grid>
                <Grid container item spacing={1} xs={12} md={6} id='projectDescriptionGrid'>
                    <h3 className={classes.location} id='projectLocation'>Location: {project.city}, {project.state}</h3>
                    <p className={classes.info} id='projectDescription'>{project.description}</p>
                </Grid>
                <Grid container item spacing={2} className={classes.grid} xs={12} md={3}>
                    <Grid container item spacing={2} className={classes.grid} xs={12} id='projectNumbersContainer'>
                        <Grid container item spacing={2} className={classes.grid} xs={4} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersGreen'>${donatedAmount}</Grid>
                             <DonationForm project_id={projectId} /><br/>
                             {project?.user_id == user?.id && <Link to={`/projects/${project.id}/update`}><Button>Update</Button></Link>}
                             {project?.user_id == user?.id && <> <Button variant="outlined" color="primary" onClick={handleClickOpen}> Delete Project</Button>
                             <Dialog
                                    open={open}
                                    onClose={handleClose}
                                    aria-labelledby="alert-dialog-title"
                                    aria-describedby="alert-dialog-description"
                                >
                                    <DialogTitle id="alert-dialog-title">{"Delete your project?"}</DialogTitle>
                                    <DialogContent>
                                    <DialogContentText id="alert-dialog-description">
                                        Are you sure you want to delete your project? All donated funds will be returned to the donaters. This process is irreversible.
                                    </DialogContentText>
                                    </DialogContent>
                                    <DialogActions>
                                    <Button onClick={handleClose} color="primary">
                                        Cancel
                                    </Button>
                                    <Button onClick={deleteAProject} color="primary" autoFocus>
                                        Delete
                                    </Button>
                                    </DialogActions>
                                </Dialog>
                                </>}

                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>donated of ${goalAmount} goal</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={4} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>{contributors}</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>contributors</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={4} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>{donatedAmount}</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>days left</Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12}> */}
                    <Button id='projectDonateButton'>Support this project</Button>
                    {/* </Grid> */}
                    <Grid container item spacing={2} className={classes.grid} xs={12}>
                        <Grid container item spacing={2} className={classes.grid} xs={12} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectDonatorsHeader'>Top Contributors</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={12} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>James</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>$2,000</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={12} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>James</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>$2,000</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={12} md={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>James</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>$2,000</Grid>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container>

                </Grid>
          </Grid>
    </>
  );
};

export default ProjectPage;
