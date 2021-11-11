import React from 'react'
import {BottomNavigation, BottomNavigationAction} from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';

function footer() {
    return(
        <BottomNavigation>
            <BottomNavigationAction label="Instagram" icon={<InstagramIcon style={{fill: "#C13584"}}/>}/>
            <BottomNavigationAction label="YouTube" icon={<YouTubeIcon style={{fill: "#C4302B"}}/>}/>
        </BottomNavigation>
    )
}

export default footer