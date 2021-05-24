import React from "react";
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';

const FeaturedRecommended = () => {

    return (
        <Box display="flex" width="100%">
            <Box width="45%"  m="5%">
            <div>Featured Project</div>
            <br/>
                <Box width="90%" m="5%">
                    <img src="https://ksr-static.imgix.net/21-05-04Oven_Steel_Lifestyle_Veggie_Chicken1368-4257a65.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=f81c8fec64231267b46beb06d29bc9c5" object-fit="contain" width="100%"></img>
                    <h1>The Misen Oven Steel</h1>
                    <div>Misen wants to make roasting, braising, boiling and searing easier and more delicious with this oven-enhancer.</div>
                    <Box display="flex" justifyContent="space-between">
                    <h3>by: Misen</h3>
                    <h3>32% Funded</h3>
                    </Box>
                </Box>
            </Box>
            <Box width="35%" m="5%" display="flex" flexDirection="column">
                <div>Recomended Projects</div>
                <Box width="90%" m="5%" height="20%" display="flex">
                    <img src="https://ksr-static.imgix.net/21-05-04Oven_Steel_Lifestyle_Veggie_Chicken1368-4257a65.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=f81c8fec64231267b46beb06d29bc9c5" object-fit="contain" width="40%"></img>
                    <Box>
                    <h3>The Misen Oven Steel</h3>
                    <div>Misen wants to make roasting, braising, boiling and searing easier and more delicious with this oven-enhancer.</div>
                    <Box display="flex" justifyContent="space-between">
                    <h4>by: Misen</h4>
                    <h4>32% Funded</h4>
                    </Box>
                    </Box>
                </Box>
                <Box width="90%" m="5%" height="20%" display="flex">
                    <img src="https://ksr-static.imgix.net/21-05-04Oven_Steel_Lifestyle_Veggie_Chicken1368-4257a65.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=f81c8fec64231267b46beb06d29bc9c5" object-fit="contain" width="40%"></img>
                    <Box>
                    <h3>The Misen Oven Steel</h3>
                    <div>Misen wants to make roasting, braising, boiling and searing easier and more delicious with this oven-enhancer.</div>
                    <Box display="flex" justifyContent="space-between">
                    <h4>by: Misen</h4>
                    <h4>32% Funded</h4>
                    </Box>
                    </Box>
                </Box>
                <Box width="90%" m="5%" height="20%" display="flex">
                    <img src="https://ksr-static.imgix.net/21-05-04Oven_Steel_Lifestyle_Veggie_Chicken1368-4257a65.jpg?ixlib=rb-4.0.2&auto=compress%2Cformat&w=1000&fit=min&s=f81c8fec64231267b46beb06d29bc9c5" object-fit="contain" width="40%"></img>
                    <Box>
                    <h3>The Misen Oven Steel</h3>
                    <div>Misen wants to make roasting, braising, boiling and searing easier and more delicious with this oven-enhancer.</div>
                    <Box display="flex" justifyContent="space-between">
                    <h4>by: Misen</h4>
                    <h4>32% Funded</h4>
                    </Box>
                    </Box>
                </Box>
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