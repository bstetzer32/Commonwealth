import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
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

    const project = {
        id: 1,
        img: "https://ksr-static.imgix.net/21-05-04Oven_Steel_Lifestyle_Veggie_Chicken1368-4257a65.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=f81c8fec64231267b46beb06d29bc9c5",
        title: 'The Misen Oven Steel',
        description: 'Misen wants to make roasting, braising, boiling and searing easier and more delicious with this oven-enhancer.',
        amount_raised: 32,
        goal: 100,
        user: {
            first_name: 'Misen',
            last_name: ''
        }
    }
    return (
        <>
        <Box className={classes.header}>
        <Typography gutterBottom variant="h6" component="h1">{type}</Typography>
        </Box>
        <Box className={classes.tiles}>
            <ScrollTile project={feed[0]} />
            <ScrollTile project={feed[1]} />
            <ScrollTile project={feed[2]} />
            <ScrollTile project={feed[3]} />
            <ScrollTile project={feed[4]} />
            <ScrollTile project={feed[5]} />
            
        </Box>
        </>
    )
}

export default ScrollBanner