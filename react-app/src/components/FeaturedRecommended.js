import React from "react";
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import RecomendedTile from './RecommendedTile'
import FeaturedTile from './FeaturedTile'

const FeaturedRecommended = () => {
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
        <Box display="flex" width="100%">
            <Box width="45%"  m="5%">
            <div>Featured Project</div>
            <br/>
                <FeaturedTile project={project}/>
            </Box>
            <Box width="35%" m="5%" display="flex" flexDirection="column">
                <div>Recomended Projects</div>
                <RecomendedTile project={project}/>
                <RecomendedTile project={project}/>
                <RecomendedTile project={project}/>
                <Box display="flex" justifyContent="center" m="5%">
                    <ArrowBackIosIcon/>
                    <Filter1Icon/>
                    <Filter2Icon/>
                    <Filter3Icon/>
                    <ArrowForwardIosIcon/>
                </Box>
            </Box>
        </Box>
    )
}

export default FeaturedRecommended