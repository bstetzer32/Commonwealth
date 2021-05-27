import React from "react";
import Box from "@material-ui/core/Box";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    minWidth: "20%",
    maxWidth: "20%",
    maxHeight: "100%",
    margin: "2.5%",
  },
  card: {
    minHeight: "100%",
    maxHeight: "100%",
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
  },
  image: {
    height: "12rem",
    float: "left",
    objectFit: "cover",
  },
}));

const ScrollTile = ({ project }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            image={project.image_url}
            component="img"
            title="title"
            className={classes.image}
          />
          <CardContent>
            <Link to={`/project/${project?.id}`}>
              <Typography gutterBottom variant="h5" component="h1">
                {project.title}
              </Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">
              {project?.description}
            </Typography>
            <Box className={classes.info}>
              <h3>by: {project?.user.fullname}</h3>
              <h3>
                {((project?.amount_raised / project?.goal) * 100).toFixed(2)}%
                Funded
              </h3>
            </Box>
          </CardContent>
        </CardActionArea>
      </Card>
    </Box>
  );
};

export default ScrollTile;
