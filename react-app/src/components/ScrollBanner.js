import React from 'react';
import Box from '@material-ui/core/Box';
import { useSelector } from "react-redux";
import ScrollTile from './ScrollTile'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    header: {
        width:"95%" ,
        display:"flex", 
        marginLeft:"5%"
    },
    tiles: {
        width:"100%", 
        display:"flex", 
        overflow:"scroll"
    }
}))

const ScrollBanner = ({type}) => {
    let feed = useSelector((state) => state.feed)
    if (type === 'Fresh Favorites') {
        feed = feed.new_projects
    } else if (type === 'Home Stretch') {
        feed = feed.old_projects
    }
    const classes = useStyles();


    return (
        <>
        <Box className={classes.header}>
        <Typography gutterBottom variant="h6" component="h1">{type}</Typography>
        </Box>
        <Box className={classes.tiles}>
            {feed.map(project=><ScrollTile key={project.id} project={project} />)}
            
        </Box>
        </>
    )
}

export default ScrollBanner