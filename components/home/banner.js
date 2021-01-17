import React from "react";
import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

import { cdn_url } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
    bannerContainer: {
        height: "90vh",
        backgroundImage:
            "-webkit-linear-gradient(150deg, #814573 50%, #fff 50%)",
        [theme.breakpoints.down("sm")]: {
            backgroundImage: "none",
            backgroundColor: "#814573",
        },
        //    "linear-gradient(280.39deg, #814573 48.4%, rgba(255, 255, 255, 0) 103.04%)",
    },
    bannerContent: {
        position: "relative",
        float: "right",
        color: "#fff",
        width: "90%",
    },
    headerText: {
        textAlign: "right",
        fontSize: "8vh",
        margin: 0,
        lineHeight: "1em",
    },
    text: {
        textAlign: "right",
        margin: 0,
        fontSize: "3vh",
        lineHeight: "1.2em",
    },
    buttons: {
        backgroundColor: "#622A55",
        color: "#fff",
    },
    coding_girl: {
        backgroundImage: `url(${cdn_url}/it-week-2021/assets-elements/coding%20girl.png)`,
        backgroundRepeat: "no-repeat",
        width: "35vw",
        height: "55vw",
        backgroundSize: "contain",
        position: "absolute",
        bottom: -250,
    },
    cybersec: {
        backgroundImage: `url(${cdn_url}/it-week-2021/assets-elements/code_cybersecurity.png)`,
        backgroundRepeat: "no-repeat",
        width: "30vw",
        height: "10vw",
        backgroundSize: "contain",
        position: "absolute",
        bottom: 450,
        left: 50,
        animation: "$move_sideways 4s infinite alternate",
    },
    controller: {
        backgroundImage: `url(${cdn_url}/it-week-2021/assets-elements/image2.png)`,
        backgroundRepeat: "no-repeat",
        width: "30vw",
        height: "30vw",
        backgroundSize: "contain",
        position: "absolute",
        bottom: 100,
        left: 200,
        animation: "$alt_move_sideways 4s infinite alternate",
    },
    poster: {
        backgroundImage: `url(${cdn_url}/it-week-2021/assets-elements/poster.png)`,
        backgroundRepeat: "no-repeat",
        width: "30vw",
        height: "30vw",
        backgroundSize: "contain",
        position: "absolute",
        bottom: -200,
        left: -100,
        animation: "$move_sideways 4s infinite alternate",
    },
    ux: {
        backgroundImage: `url(${cdn_url}/it-week-2021/assets-elements/ux.png)`,
        backgroundRepeat: "no-repeat",
        width: "30vw",
        height: "30vw",
        backgroundSize: "contain",
        position: "absolute",
        bottom: -50,
        left: 350,
        animation: "$alt_move_sideways 4s infinite alternate",
    },
    "@keyframes move_sideways": {
        from: {
            translate: "0 0",
            transform: "rotate(0deg)",
            animationTimingFunction: "cubic-bezier(0.1, 0.3, 0.3, 1)",
        },
        "25%": {
            translate: "10px 0",
            transform: "rotate(10deg)",
            animationTimingFunction: "cubic-bezier(0.7, 0.0, 0.9, 0.7)",
        },
        "50%": {
            translate: "0 0",
            transform: "rotate(0deg)",
            animationTimingFunction: "cubic-bezier(0.1, 0.3, 0.3, 1)",
        },
        "75%": {
            translate: "-10px 0",
            transform: "rotate(-10deg)",
            animationTimingFunction: "cubic-bezier(0.7, 0.0, 0.9, 0.7)",
        },
        to: {
            translate: "0 0",
            transform: "rotate(0deg)",
        },
    },
    "@keyframes alt_move_sideways": {
        from: {
            translate: "0 0",
            transform: "rotate(0deg)",
            animationTimingFunction: "cubic-bezier(0.1, 0.3, 0.3, 1)",
        },
        "25%": {
            translate: "10px 0",
            transform: "rotate(-10deg)",
            animationTimingFunction: "cubic-bezier(0.7, 0.0, 0.9, 0.7)",
        },
        "50%": {
            translate: "0 0",
            transform: "rotate(0deg)",
            animationTimingFunction: "cubic-bezier(0.1, 0.3, 0.3, 1)",
        },
        "75%": {
            translate: "-10px 0",
            transform: "rotate(10deg)",
            animationTimingFunction: "cubic-bezier(0.7, 0.0, 0.9, 0.7)",
        },
        to: {
            translate: "0 0",
            transform: "rotate(0deg)",
        },
    },
}));

const Banner = () => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div className={classes.bannerContainer}>
            <Grid
                container
                alignItems="center"
                style={{ height: "90%", width: "97%", paddingTop: 20 }}
            >
                <Hidden smDown>
                    <Grid item xs={6} className={classes.assets_section}>
                        <div className={classes.coding_girl}></div>
                        <div className={classes.cybersec}></div>
                        <div className={classes.controller}></div>
                        <div className={classes.poster}></div>
                        <div className={classes.ux}></div>
                    </Grid>
                </Hidden>
                <Grid item xs={12} md={6}>
                    <div className={classes.bannerContent}>
                        <Typography variant="h6" className={classes.text}>
                            Welcome to
                        </Typography>
                        <Typography variant="h4" className={classes.headerText}>
                            <b>
                                <i>IT WEEK 2021</i>
                            </b>
                        </Typography>

                        <Typography
                            variant="subtitle1"
                            className={classes.text}
                        >
                            “Thriving through adversity: Enabling Technologies
                            for Digital Opportunities and Vitality”
                        </Typography>
                    </div>
                    <div
                        style={{
                            position: "relative",
                            float: "right",
                            marginTop: 10,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router.push("/it-week")}
                        >
                            Know More
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            style={{ marginLeft: 5 }}
                            onClick={() => router.push("/it-week/events")}
                        >
                            Events
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </div>
    );
};

export default Banner;
