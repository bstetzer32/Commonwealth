import React, {useState} from "react";
import Box from '@material-ui/core/Box';
import { useSelector } from "react-redux";
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
import json2mq from 'json2mq';
import useMediaQuery from '@material-ui/core/useMediaQuery'

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        width:"100%"
    },
    rootMobile: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: "100%"
    },
    featuredMobile: {
        width:"90%",
        margin:"5% 0"
    },
    recommendedMobile: {
        width:"90%",
        margin:"5% 0",
        display:"flex",
        flexDirection:"column"
    },
    featured: {
        width:"45%",
        margin:"5%"
    },
    recommended: {
        width:"35%",
        margin:"5%" ,
        display:"flex",
        flexDirection:"column",
        alignItems: "start"
    },
    arrows: {
        display:"flex",
        justifyContent:"center",
        margin:"5%"
    },
    link: {
        textDecoration: 'none',
        color: "#0088ff"
    }
}))

const FeaturedRecommended = () => {
    const feed = useSelector((state) => state.feed)
    const classes = useStyles();
    const [tab, setTab] = useState(0);

    const matches = useMediaQuery(
        json2mq({
          minWidth: 800,
        }),
    );

    return (
        <Box className={matches ? classes.root : classes.rootMobile}>
            <Box className={matches ? classes.featured : classes.featuredMobile}>
                <Typography gutterBottom variant="h6" component="h1">Featured Project</Typography>
                {feed.featured_project && <FeaturedTile project={feed.featured_project}/>}
            </Box>
            <Box className={matches ? classes.recommended : classes.recommendedMobile}>
                <Typography gutterBottom variant="h6" component="h1">Recommended Projects</Typography>
                {tab === 0 && (<>{feed.recommended_projects[0] && <RecomendedTile project={feed.recommended_projects[0]} />}
                {feed.recommended_projects[1] && <RecomendedTile project={feed.recommended_projects[1]}/>}
                {feed.recommended_projects[2] && <RecomendedTile project={feed.recommended_projects[2]}/>}</>)}
                {tab === 1 && (<><RecomendedTile project={feed.recommended_projects[3]} />
                {feed.recommended_projects[3] && <RecomendedTile project={feed.recommended_projects[4]}/>}
                {feed.recommended_projects[5] && <RecomendedTile project={feed.recommended_projects[5]}/>}</>)}
                {tab === 2 && (<>{feed.recommended_projects[0] && <RecomendedTile project={feed.recommended_projects[6]} />}
                {feed.recommended_projects[7] && <RecomendedTile project={feed.recommended_projects[7]}/>}
                {feed.recommended_projects[8] && <RecomendedTile project={feed.recommended_projects[8]}/>}</>)}
                <Box className={classes.arrows}>
                    <Button onClick={tab !== 0 ? () => setTab(prevTab => prevTab -1) : null}>
                        <ArrowBackIosIcon className={classes.link}/>
                    </Button>
                    <Button onClick={(e) => setTab(0)}>
                        <Filter1Icon className={classes.link}/>
                    </Button>
                    <Button onClick={(e) => setTab(1)}>
                        <Filter2Icon className={classes.link}/>
                    </Button>
                    <Button onClick={(e) => setTab(2)}>
                        <Filter3Icon className={classes.link}/>
                    </Button>
                    <Button onClick={tab !== 2 ? () => setTab(prevTab => prevTab +1) : null}>
                        <ArrowForwardIosIcon className={classes.link}/>
                    </Button>
                </Box>
            </Box>
        </Box>
    )
}

export default FeaturedRecommended
