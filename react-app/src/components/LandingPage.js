import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import { useDispatch} from "react-redux";
import FeaturedRecommended from './FeaturedRecommended';
import ScrollBanner from './ScrollBanner';
import {getFeed} from '../store/feed'

const LandingPage = ({type}) => {
    const [loaded, setLoaded] = useState(false);
    const dispatch = useDispatch()
    let {id} = useParams()
    if (id === undefined) {
        id = 0
    }
    useEffect(() => {
        (async () => {
            await dispatch(getFeed(type, id))
            setLoaded(true)
        })();
    })
    if (!loaded) {
        return null;
    }

    return (<>
        <FeaturedRecommended />
        <ScrollBanner type='Fresh Favorites'/>
        <ScrollBanner type='Home Stretch'/>
    </>)
}

export default LandingPage
