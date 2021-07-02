import React, { useState, useEffect } from "react";
import { useParams, useHistory, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import DonationForm from "./forms/DonationForm";
import { deleteProject } from "../store/project";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { getOneProject } from "../store/project";
import { loadDonations } from "../store/donation";

import {
  Grid,
  Card,
  CardMedia,
  CardActionArea,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  title: {
    width: "100%",
    height: "60px",
    margin: "0px",
    textAlign: "center",
    padding: theme.spacing(1),
  },
  tagline: {
    width: "100%",
    height: "40px",
    margin: "0px",
    textAlign: "center",
    padding: theme.spacing(1),
  },
  grid: {
    width: "100%",
    margin: "0px",
    padding: "0px",
  },
  location: {
    width: "100%",
    height: "20px",
    textAlign: "center",
  },
  info: {
    width: "100%",
    height: "20px",
    textAlign: "center",
  },
}));

export const formatNumber = (num) => {
  const value = num.toString();
  let count = 1;
  let result = [];
  for (let i = value.length - 1; i >= 0; i--) {
    result.unshift(value[i]);
    if (i === 0) {
      continue;
    }
    if (count === 3) {
      result.unshift(",");
      count = 0;
    }
    count++;
  }
  return result.join("");
};

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const [goalAmount, setGoalAmount] = useState(null);
  const [donatedAmount, setDonatedAmount] = useState(null);
  const [contributors, setContributors] = useState(0);
  const [topContributors, setTopContributors] = useState({});
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const history = useHistory();
  const user = useSelector((state) => state.session.user);
  const { projectId } = useParams();
  const classes = useStyles();
  const [isLoaded, setIsLoaded] = useState(false);

  const projectTest = useSelector((state) => state.projectReducer);
  const donatorObj = useSelector((state) => state.donationReducer.donations);

  const proyecto = projectTest[projectId];

  useEffect(() => {
    (async () => {
      if (!proyecto) {
        await dispatch(getOneProject(projectId));
        await dispatch(loadDonations(projectId));
      }
      if (!donatorObj) {
        return;
      }
      await setContributors(donatorObj?.number);
      await setTopContributors(donatorObj?.topContributors);
      setIsLoaded(true);
    })();
  }, [dispatch, project, proyecto, donatorObj, projectTest, donatedAmount]);

  useEffect(() => {
    if (!projectId) {
      return;
    }
    setProject(proyecto);
    const temp = proyecto?.goal;
    setGoalAmount(temp);
    const temp1 = proyecto?.amount_raised;
    setDonatedAmount(temp1);
  }, [proyecto, donatedAmount]);

  useEffect(() => {}, [proyecto]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const deleteAProject = async () => {
    await dispatch(deleteProject(projectId));
    history.push("/");
  };
  const end = proyecto?.expiration_date;
  const x = new Date();
  const y = new Date(end);

  const daysLeft = Math.floor(
    (y.getTime() - x.getTime()) / (1000 * 60 * 60 * 24)
  );
  if (
    !project &&
    !topContributors &&
    !isLoaded &&
    typeof daysLeft !== "number"
  ) {
    return null;
  }

  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.grid}
        id="projectTitleGrid"
      >
        <Grid item xs={12} className={classes.title} id="projectTitle">
          {project?.title}
        </Grid>
        <Grid item xs={12} className={classes.tagline} id="projectTagline">
          {project?.tagline}
        </Grid>
      </Grid>
      <Grid container spacing={0} className={classes.grid} id="projectInfoGrid">
        <Grid item xs={false} lg={3}></Grid>
        <Grid
          container
          item
          spacing={1}
          xs={12}
          lg={6}
          id="projectDescriptionGrid"
        >
          <Card id="projectDesciptionGridCard">
            <div id="projectLocationDiv">
              <h3 id="projectLocation">
                Location: {project?.city}, {project?.state}
              </h3>
            </div>
            <div id="projectImageDiv">
              <Card id="projectImage">
                <CardActionArea>
                  <CardMedia
                    title="title"
                    image={project?.image_url}
                    component="img"
                  ></CardMedia>
                </CardActionArea>
              </Card>
            </div>
            <div id="projectDescriptionDiv">
              <div className={classes.info} id="projectDescription">
                {project?.description}
              </div>
            </div>
          </Card>
        </Grid>
        <Grid
          container
          item
          spacing={2}
          //   className={classes.grid}
          xs={12}
          lg={3}
          id="project__side--grid"
        >
          <div id="projectNumbersContainerDiv">
            <Card id="projectNumbersCard">
              <Grid
                container
                item
                spacing={2}
                className={classes.grid}
                xs={12}
                id="projectNumbersContainer"
              >
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={4}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersGreen"
                  >
                    ${donatedAmount ? formatNumber(donatedAmount) : 0}
                  </Grid>
                  <br />
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersRelations"
                  >
                    donated of ${goalAmount ? formatNumber(goalAmount) : 0} goal
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={4}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbers"
                  >
                    {contributors}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersRelations"
                  >
                    contributors
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={4}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbers"
                  >
                    {daysLeft}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersRelations"
                  >
                    days left
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </div>
          {/* <Grid item xs={12}> */}
          <div className="projectPage__button--container">
            <DonationForm project_id={projectId} />
          </div>
          {project?.user_id === user?.id && (
            <div className="projectPage__update">
              <Link id="update__link" to={`/projects/${projectId}/update`}>
                <Button id="projectPage__updateButton">Update</Button>
              </Link>
            </div>
          )}
          <div className="projectPage__delete">
            {project?.user_id === user?.id && (
              <>
                {" "}
                <Button
                  variant="outlined"
                  color="primary"
                  onClick={handleClickOpen}
                  id="projectPage__deleteButton"
                >
                  {" "}
                  Delete Project
                </Button>
                <Dialog
                  open={open}
                  onClose={handleClose}
                  aria-labelledby="alert-dialog-title"
                  aria-describedby="alert-dialog-description"
                >
                  <DialogTitle id="alert-dialog-title">
                    {"Delete your project?"}
                  </DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                      Are you sure you want to delete your project? All donated
                      funds will be returned to the donators. This process is
                      irreversible.
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
              </>
            )}
          </div>

          <div id="projectTopContributorsDiv">
            <Card id="projectTopContributorsCard">
              <Grid container item spacing={2} className={classes.grid} xs={12}>
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={12}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectDonatorsHeader"
                  >
                    Top Contributors
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={12}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbers"
                  >
                    {topContributors && topContributors[0]?.user_fullname}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersRelations"
                  >
                    {topContributors ?
                      topContributors[0] ?
                      topContributors[0].amount ?
                      '$' + formatNumber(topContributors[0].amount)
                    : null
                    : null
                    : null
                    }
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={12}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbers"
                  >
                    {topContributors && topContributors[1]?.user_fullname}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersRelations"
                  >
                    {topContributors ?
                      topContributors[1] ?
                      topContributors[1].amount ?
                      '$' + formatNumber(topContributors[1].amount)
                    : null
                    : null
                    : null
                    }
                  </Grid>
                </Grid>
                <Grid
                  container
                  item
                  spacing={2}
                  className={classes.grid}
                  xs={12}
                  lg={12}
                  id="projectNumbersGrid"
                >
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbers"
                  >
                    {topContributors && topContributors[2]?.user_fullname}
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    className={classes.tagline}
                    id="projectNumbersRelations"
                  >
                    {topContributors ?
                      topContributors[2] ?
                      topContributors[2].amount ?
                      '$' + formatNumber(topContributors[2].amount)
                    : null
                    : null
                    : null
                    }
                  </Grid>
                </Grid>
              </Grid>
            </Card>
          </div>
        </Grid>
      </Grid>
    </>
  );
};

export default ProjectPage;
