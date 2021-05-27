import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import DonationForm from "./forms/DonationForm";
import { Grid, Card, CardMedia, CardActionArea } from "@material-ui/core";

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
    const { projectId } = useParams();
    const classes = useStyles();

  const formatNumber = (num) => {
    const value = num.toString();
    let count = 1;
    let result = [];
    for (let i = value.length - 1; i >= 0; i--) {
      result.unshift(value[i]);
      if (i === 0) {
        continue
      }
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
            console.log(proj)
            setProject(proj);
            setGoalAmount(formatNumber(proj.goal));
            setDonatedAmount(formatNumber(proj.amount_raised))
            const res = await fetch(`/api/project/${projectId}/donations`);
            const donators = await res.json();
            console.log(donators)
            setContributors(donators.number)
        })();
    }, [projectId]);

    if (!project) {
        return null
    }

    return (
        <>
            <Grid container spacing={2} className={classes.grid} id='projectTitleGrid'>
                <Grid item xs={12} className={classes.title} id='projectTitle'>{project.title}
                </Grid>
                <Grid item xs={12} className={classes.tagline} id='projectTagline'>{project.tagline}
                </Grid>
            </Grid>
            <Grid container spacing={0} className={classes.grid} id='projectInfoGrid'>
                <Grid item xs={false} lg={3}></Grid>
                <Grid container item spacing={1} xs={12} lg={6} id='projectDescriptionGrid'>
                    <h3 className={classes.location} id='projectLocation'>Location: {project.city}, {project.state}</h3>
                    <Card id='projectImage'>
                        <CardActionArea>
                            <CardMedia title='title' image={project.image_url} component='img'></CardMedia>
                        </CardActionArea>
                    </Card>
                    <div className={classes.info} id='projectDescription'>{project.description}</div>
                </Grid>
                <Grid container item spacing={2} className={classes.grid} xs={12} lg={3}>
                    <Grid container item spacing={2} className={classes.grid} xs={12} id='projectNumbersContainer'>
                        <Grid container item spacing={2} className={classes.grid} xs={4} lg={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersGreen'>${donatedAmount}</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>donated of ${goalAmount} goal</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={4} lg={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>{contributors}</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>contributors</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={4} lg={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>{donatedAmount}</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>days left</Grid>
                        </Grid>
                    </Grid>
                    {/* <Grid item xs={12}> */}
                    <DonationForm project_id={projectId}/>
                    {/* </Grid> */}
                    <Grid container item spacing={2} className={classes.grid} xs={12}>
                        <Grid container item spacing={2} className={classes.grid} xs={12} lg={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectDonatorsHeader'>Top Contributors</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={12} lg={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>James</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>$2,000</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={12} lg={12} id='projectNumbersGrid'>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbers'>James</Grid>
                            <Grid item xs={12} className={classes.tagline} id='projectNumbersRelations'>$2,000</Grid>
                        </Grid>
                        <Grid container item spacing={2} className={classes.grid} xs={12} lg={12} id='projectNumbersGrid'>
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
