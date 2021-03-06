import React from 'react'
import CustomBtn from './CustomBtn';
import logo from '../hamburg.svg'
import {Toolbar, Typography} from '@material-ui/core'
import {makeStyles} from '@material-ui/core/styles';

const styles = makeStyles({
    bar:{
        paddingTop: "1.15rem",
        backgroundColor: "#fff",
    },
    logo: {
        width: "4%",
    },
    menuItem: {
        cursor: "pointer",
        flexGrow: 1,
        paddingLeft: '5%',
        "&:hover": {
            color: "#4f25c8"
        },
        },
    }
)

function Navbar() {
    const classes = styles()
    return (
        <Toolbar position='sticky' color='rgba(0, 0, 9, 0.87)' className={classes.bar}>
            <img src={logo} alt="hamburger logo" className={classes.logo} />
            <Typography variant="h6" className={classes.menuItem}>
                About
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Blog
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Careers
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Demos
            </Typography>
            <Typography variant="h6" className={classes.menuItem}>
                Contact Us
            </Typography>
            <CustomBtn txt="sign in" />
        </Toolbar>
    )
}

export default Navbar