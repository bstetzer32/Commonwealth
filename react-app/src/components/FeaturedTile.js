import React from "react";
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    root: {
        width: '90%',
        margin: '5%'
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

const FeaturedTile = ({project}) => {
  const classes = useStyles();
    return (
        <Card className={classes.root}>
            <CardActionArea>
                <CardMedia image="https://ksr-static.imgix.net/21-05-04Oven_Steel_Lifestyle_Veggie_Chicken1368-4257a65.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=f81c8fec64231267b46beb06d29bc9c5" component="img" title='title'/>
                <CardContent>
                <Link to={`/projects/${project?.id}`} className={classes.link}>
                    <Typography gutterBottom variant="h5" component="h1">{project?.title}</Typography>
                </Link>
                <Typography variant="body2" color="textSecondary" component="p">{project?.description}</Typography>
                <Box className={classes.info}>
                <h3>by: {project?.user}</h3>
                <h3>{((project?.amount_raised / project?.goal) * 100).toFixed(2)}% Funded</h3>
                </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default FeaturedTile
