import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import { flexbox } from '@material-ui/system';
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from '@material-ui/core/styles';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Filter1Icon from '@material-ui/icons/Filter1';
import Filter2Icon from '@material-ui/icons/Filter2';
import Filter3Icon from '@material-ui/icons/Filter3';
import RecomendedTile from './RecommendedTile'
import FeaturedTile from './FeaturedTile'
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex", 
        width:"100%"
    },
    featured: {
        width:"45%",  
        margin:"5%"
    },
    recommended: {
        width:"35%", 
        margin:"5%" ,
        display:"flex", 
        flexDirection:"column"
    },
    arrows: {
        display:"flex", 
        justifyContent:"center", 
        margin:"5%"
    }
}))

const FeaturedRecommended = () => {
    const feed = useSelector((state) => state.feed)
    const classes = useStyles();
    const [tab, setTab] = useState(0);


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
        <Box className={classes.root}>
            <Box className={classes.featured}>
                <Typography gutterBottom variant="h6" component="h1">Featured Project</Typography>
                <FeaturedTile project={feed.featured_project}/>
            </Box>
            <Box className={classes.recommended}>
                <Typography gutterBottom variant="h6" component="h1">Recomended Projects</Typography>
                {tab === 0 && (<><RecomendedTile project={feed.recommended_projects[0]} />
                <RecomendedTile project={feed.recommended_projects[1]}/>
                <RecomendedTile project={feed.recommended_projects[2]}/></>)}
                {tab === 1 && (<><RecomendedTile project={feed.recommended_projects[3]} />
                <RecomendedTile project={feed.recommended_projects[4]}/>
                <RecomendedTile project={feed.recommended_projects[5]}/></>)}
                {tab === 2 && (<><RecomendedTile project={feed.recommended_projects[6]} />
                <RecomendedTile project={feed.recommended_projects[7]}/>
                <RecomendedTile project={feed.recommended_projects[8]}/></>)}
                <Box className={classes.arrows}>
                    <Button onClick={tab !== 0 ? () => setTab(prevTab => prevTab -1) : null}>
                        <ArrowBackIosIcon/>
                    </Button>
                    <Button onClick={(e) => setTab(0)}>
                        <Filter1Icon/>
                    </Button>
                    <Button onClick={(e) => setTab(1)}>
                        <Filter2Icon/>
                    </Button>
                    <Button onClick={(e) => setTab(2)}>
                        <Filter3Icon/>
                    </Button>
                    <Button onClick={tab !== 2 ? () => setTab(prevTab => prevTab +1) : null}>
                        <ArrowForwardIosIcon/>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default FeaturedRecommended