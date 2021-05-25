import React, {useContext, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedRecommended from './FeaturedRecommended';
import ScrollBanner from './ScrollBanner';
import {useParams} from "react-router-dom";
import {PageContext} from '../context/PageContext'

const LandingPage = () => {
    return (<>
        <FeaturedRecommended />
        <ScrollBanner type='Fresh Favorites'/>
        <ScrollBanner type='New & Noteworth'/>
        <ScrollBanner type='Home Stretch'/>
    </>)
}

export default LandingPage
