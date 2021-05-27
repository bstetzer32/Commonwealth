import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";
import DonationForm from "./forms/DonationForm";

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
  // paper: {
  //     padding: theme.spacing(2),
  //     textAlign: 'center',
  //     color: theme.palette.text.secondary,
  //     background: theme.palette.success.light
  // }
}));

const ProjectPage = () => {
  const [project, setProject] = useState({});
  const [goalAmount, setGoalAmount] = useState(null);
  const [donatedAmount, setDonatedAmount] = useState(null);
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
      return;
    }
    (async () => {
      const response = await fetch(`/api/project/${projectId}`);
      const proj = await response.json();
      setProject(proj);
      setGoalAmount(formatNumber(proj.goal));
      setDonatedAmount(formatNumber(proj.amount_raised));
    })();
  }, [projectId]);

  if (!project) {
    return null;
  }

  //   const [open, setOpen] = useState(false);

  //   const handleClickOpen = () => {
  //     setOpen(true);
  //   };
  //   const handleClose = () => {
  //     setOpen(false);
  //   };

  return (
    <>
      <Grid
        container
        spacing={2}
        className={classes.grid}
        id="projectTitleGrid"
      >
        <Grid item xs={12} className={classes.title} id="projectTitle">
          {project.title}
        </Grid>
        <Grid item xs={12} className={classes.tagline} id="projectTagline">
          This ish is super hot fire
        </Grid>
      </Grid>
      <Grid container spacing={0} className={classes.grid} id="projectInfoGrid">
        <Grid item xs={0} md={3}></Grid>
        <Grid
          container
          spacing={1}
          item
          xs={12}
          md={6}
          id="projectDescriptionGrid"
        >
          <h3 className={classes.location} id="projectLocation">
            Location: {project.city}, {project.state}
          </h3>
          <p className={classes.info} id="projectDescription">
            {project.description}
          </p>
        </Grid>
        <Grid container spacing={6} className={classes.grid} xs={12} md={3}>
          <Grid
            container
            item
            spacing={1}
            className={classes.grid}
            xs={4}
            md={12}
          >
            <Grid item xs={12}>
              <p className={classes.tagline} id="projectNumbersBig">
                $12,000
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.tagline} id="projectNumbersRelations">
                donated of ${goalAmount} goal
              </p>
            </Grid>
            <DonationForm project_id={projectId} />
          </Grid>
          <Grid
            container
            item
            spacing={1}
            className={classes.grid}
            xs={4}
            md={12}
          >
            <Grid item xs={12}>
              <p className={classes.tagline} id="projectNumbers">
                {donatedAmount}
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.tagline} id="projectNumbersRelations">
                backers
              </p>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={1}
            className={classes.grid}
            xs={4}
            md={12}
          >
            <Grid item xs={12}>
              <p className={classes.tagline} id="projectNumbers">
                {donatedAmount}
              </p>
            </Grid>
            <Grid item xs={12}>
              <p className={classes.tagline} id="projectNumbersRelations">
                days left
              </p>
            </Grid>
          </Grid>
        </Grid>
        <Grid container></Grid>
      </Grid>
    </>
  );
};

export default ProjectPage;
