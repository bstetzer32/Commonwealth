import React, {useContext, useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import FeaturedRecommended from './FeaturedRecommended';
import ScrollBanner from './ScrollBanner';
import {useParams} from "react-router-dom";
import {PageContext} from '../context/PageContext'

const LandingPage = ({landingPageType}) => {
    const dispatch = useDispatch();
    const {type, id} = useContext(PageContext)
    const {pageType, setPageType} = type
    const {pageId, setPageId} = id
    const {landingPageId} = useParams()
    useEffect(() => {
        if (landingPageType !== pageType) {
            dispatch(setPageType(landingPageType))
        }
        if (landingPageId !== pageId) {
            dispatch(setPageId(landingPageId))
        }
    })
    return (<>
        <FeaturedRecommended />
        <ScrollBanner type='Fresh Favorites'/>
        <ScrollBanner type='New & Noteworth'/>
        <ScrollBanner type='Home Stretch'/>
    </>)
}

export default LandingPage