import React from "react";
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%'
    },
    cardRoot: {
        display: 'flex'
    },
    image: {
        display: 'flex',
        alignSelf: 'start',
        width: '40%',
        height: '100%',
        margin: '5%',
        borderRadius: '4px'
    },
    info: {
         display:"flex",
         justifyContent:"space-between"
    },
    link: {
        textDecoration: 'none',
        color: "#0088ff"
       }
}))

const RecomendedTile = ({project}) => {
  const classes = useStyles();
  const theme = useTheme();
    return (
        <Box className={classes.root} my="2.5%">
            <Card>
            <CardActionArea className={classes.cardRoot}>
            <CardMedia image={project?.image_url} component="img" title='title' className={classes.image} />
            <CardContent>
            <Link to={`/projects/${project?.id}`} className={classes.link}>
                <Typography gutterBottom variant="h5" component="h1">{project?.title}</Typography>
            </Link>
            <Typography variant="body2" color="textSecondary" component="p">{project?.description}</Typography>
            <Box className={classes.info}>
            <h4>by: {project?.user}</h4>
            <h4>{(project?.amount_raised / project?.goal * 100).toFixed(2)}% Funded</h4>
            </Box>
            </CardContent>
            </CardActionArea>
            </Card>
        </Box>
    )
}

export default RecomendedTile
