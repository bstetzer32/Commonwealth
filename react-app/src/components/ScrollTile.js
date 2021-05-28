import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
    root: {
        minWidth:"20%",
        maxWidth:"20%",
        maxHeight:"100%",
        margin:"2.5%"
    },
    rootMobile: {
        minWidth:"60%",
        maxWidth:"60%",
        maxHeight:"100%",
        margin:"2.5%"
    },
    card: {
        minHeight:"100%",
        maxHeight:"100%",
    },
    info: {
        display:"flex",
        justifyContent:"space-between"
    },
    image: {
        height: "12rem",
        float: "left",
        objectFit: "cover"
    },
    link: {
    textDecoration: 'none',
    color: "#0088ff"
   },
    funded: {
        color: "#19B419"
    }
}))

const ScrollTile = ({ project }) => {
  const classes = useStyles();

  const matches = useMediaQuery(
    json2mq({
      minWidth: 800,
    }),
);

    return (
            <Box className={matches ? classes.root : classes.rootMobile}>
                <Card className={classes.card}>
                    <CardActionArea>
                        <CardMedia image={project?.image_url} component="img" title='title' className={classes.image}/>
                        <CardContent>
                            <Link to={`/projects/${project?.id}`} className={classes.link}>
                                <Typography gutterBottom variant="h5" component="h1">{project?.title}</Typography>
                            </Link>
                            <Typography variant="body2" color="textSecondary" component="p">{project?.tagline}</Typography>
                            <Box  className={classes.info}>
                                <h3>by: {project?.user}</h3>
                                <h3 className={classes.funded}>{((project?.amount_raised / project?.goal) * 100).toFixed(2)}% Funded</h3>
                            </Box>
                        </CardContent>
                    </CardActionArea>
                </Card>
             </Box>
  );
};

export default ScrollTile;
