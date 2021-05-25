import React from "react";
import FeaturedRecommended from './FeaturedRecommended';
import ScrollBanner from './ScrollBanner';

const LandingPage = () => {
    return (<>
        <FeaturedRecommended />
        <ScrollBanner type='Fresh Favorites'/>
        <ScrollBanner type='New & Noteworth'/>
        <ScrollBanner type='Home Stretch'/>
    </>)
}

export default LandingPage