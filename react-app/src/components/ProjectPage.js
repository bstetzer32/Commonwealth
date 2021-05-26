import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import { Grid, Paper } from "@material-ui/core";

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
        margin: '0px'
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        background: theme.palette.success.light
    }
}))

const ProjectPage = () => {
    const [project, setProject] = useState({});
    const { projectId } = useParams();
    const classes = useStyles();
    console.log(projectId)
    useEffect(() => {
        if (!projectId) {
            return
        }
        (async () => {
            const response = await fetch(`/api/project/${projectId}`);
            const proj = await response.json();
            console.log(proj)
            setProject(proj);
        })();
    }, [projectId]);

    if (!project) {
        return null;
    }

    return (
        <Grid container spacing={2} className={classes.grid}>
            <Grid item xs={12}>
                <h2 className={classes.title} id='projectTitle'>{project.title}</h2>
            </Grid>
            <Grid item xs={12}>
                <p className={classes.tagline} id='projectTagline'>{project.id}</p>
            </Grid>
        </Grid>
    //   <ul>
    //     <li>
    //       <strong>Project Title</strong> {project.title}
    //     </li>
    //     <li>
    //       <strong>Project Description</strong> {project.description}
    //     </li>
    //     <li>
    //       <strong>Goal</strong> {project.goal}
    //     </li>
    //   </ul>
    );
}

export default ProjectPage
