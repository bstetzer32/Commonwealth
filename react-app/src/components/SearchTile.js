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
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Montserrat, sans-serif",
  },
  card: {
    minHeight: "100%",
    maxHeight: "100%",
    minWidth: "100%",
    maxWidth: "100%",
    margin: "0",
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  actionArea: {
    position: "relative",
    top: "0",
    right: "0",
    bottom: "0",
    left: "0",
    display: "block",
  },
  info: {
    display: "flex",
    justifyContent: "flex-end",
    // marginTop: "2em",
    alignItems: "center",
    flexDirection: "column",
    margin: "0",
    padding: ".25em",
    fontSize: "1em",
  },
  title: {
    overflow: "hidden",
    textDecoration: "none",
    textAlign: "center",
    fontSize: "1.5em",
    fontFamily: "Titillium Web, sans-serif",
  },
  tagline: {
    textAlign: "center",
    padding: ".5em",
  },
  img: {
    float: "left",
    height: "15em",
    width: "100%",
    objectFit: "cover",
  },
  funded: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",
    flexDirection: "column",
    margin: "0",
    padding: ".25em",
    fontSize: "1em",
    color: "#19B419",
  },
}));

const SearchTile = ({ project }) => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Card className={classes.card}>
        <CardActionArea className={classes.actionArea}>
          <CardMedia
            className={classes.img}
            image={project?.image_url}
            component="img"
            title="title"
          />
          <CardContent>
            <Link to={`/projects/${project?.id}`} className={classes.title}>
              <Typography>
                <span className={classes.title}>{project.title}</span>
              </Typography>
            </Link>
            <Typography
              className={classes.tagline}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              {project.tagline}
            </Typography>
          </CardContent>
        </CardActionArea>
        <div>
          <Box className={classes.info}>by: {project?.user.fullname}</Box>
          <Box className={classes.funded}>
            {((project?.amount_raised / project?.goal) * 100).toFixed(2)}%
            Funded
          </Box>
        </div>
      </Card>
    </Box>
  );
};

export default SearchTile;
