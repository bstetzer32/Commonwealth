import React from 'react';
import Box from '@material-ui/core/Box';
import { Link } from "react-router-dom";
import ScrollTile from './ScrollTile'

const ScrollBanner = () => {

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
        <Box width="100%" display="flex" ml="5%">
        <div>Fresh Favorites</div>
        </Box>
        <Box width="100%" display="flex" overflow="scroll">
            <ScrollTile project={project} />
            <ScrollTile project={project} />
            <ScrollTile project={project} />
            <ScrollTile project={project} />
            <ScrollTile project={project} />
            <ScrollTile project={project} />
            
        </Box>
        </>
    )
}

export default ScrollBanner