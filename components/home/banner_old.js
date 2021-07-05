import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { cdn_url } from "utils/constants";

const useStyles = makeStyles({
    root: {
        marginTop: -5,
        backgroundColor: "rgba(30,30,30,1)",
    },
    firstIcon: {
        backgroundImage: `url(${cdn_url}/banner/home/c1.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        margin: "10vh 0vh 0vh 0vh",
        width: "20vh",
        height: "20vh",
    },
    secIcon: {
        backgroundImage: `url(${cdn_url}/banner/home/c2.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        margin: "5vh 5vh 5vh 0vh",
        width: "20vh",
        height: "20vh",
    },
    thirdIcon: {
        backgroundImage: `url(${cdn_url}/banner/home/c3.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        margin: "5vh 0vh 5vh 0vh",
        width: "20vh",
        height: "20vh",
    },
    fourthIcon: {
        backgroundImage: `url(${cdn_url}/banner/home/c4.png)`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        margin: "10vh 5vh 0vh 0vh",
        width: "20vh",
        height: "20vh",
    },
    headerProp: {
        color: "rgba(234, 190, 180, 1)",
        marginBottom: "10vh",
    },
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            alignItems="center"
            justify="center"
            className={classes.root}
        >
            <Grid
                container
                item
                direction="row"
                alignItems="center"
                xs={12}
                justify="center"
            >
                <div className={classes.fourthIcon}></div>
                <div className={classes.firstIcon}></div>
            </Grid>
            <Grid
                container
                item
                direction="row"
                alignItems="center"
                xs={12}
                justify="center"
            >
                <div className={classes.secIcon}></div>
                <div className={classes.thirdIcon}></div>
            </Grid>
            <Typography
                variant="h3"
                align="center"
                className={classes.headerProp}
            >
                One In A Chameleon
            </Typography>
        </Grid>
    );
};

export default Banner;
