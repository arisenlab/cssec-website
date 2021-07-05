import React from "react";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import { cdn_url } from "utils/constants";
import { Button, Typography } from "@material-ui/core";

const BannerButton = withStyles({
    root: {
        backgroundColor: "#4C4B5C",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#403F4A",
        },
        borderRadius: 13,
    },
})(Button);

const useStyles = makeStyles({
    rootContainer: {
        marginTop: -5,
        background:
            "linear-gradient(225.17deg, #B1B0E5 50.48%, rgba(177, 176, 229, 0.671875) 62.09%, rgba(177, 176, 229, 0.648707) 86.14%)",
        padding: "10vh 0 10vh 0",
    },
    bannerImage: {
        borderRadius: "35px",
        borderWidth: "4px",
        borderStyle: "solid",
        borderColor: "#A0A0A0",
    },
    text: {
        color: "#450A66",
    },
});

const Banner = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            justify="center"
            alignItems="center"
            className={classes.rootContainer}
        >
            <Grid item md={6} container spacing={2} align="center">
                <Grid item>
                    <img
                        src={`${cdn_url}/banner/home/banner_title.png`}
                        width="60%"
                    />
                    <Typography variant="h4" className={classes.text}>
                        <i>Downloading Transcendence,</i>
                    </Typography>
                    <Typography variant="h4" className={classes.text}>
                        <i>Uploading the Future</i>
                    </Typography>
                </Grid>

                <Grid item container justify="center" spacing={1}>
                    <Grid item>
                        <BannerButton disableElevation variant="contained">
                            Branding
                        </BannerButton>
                    </Grid>
                    <Grid item>
                        <BannerButton disableElevation variant="contained">
                            Help Desk
                        </BannerButton>
                    </Grid>
                </Grid>
            </Grid>
            <Hidden mdDown>
                <Grid item md={6} align="center">
                    <img
                        src={`${cdn_url}/banner/home/banner_image.jpg`}
                        width="80%"
                        className={classes.bannerImage}
                    />
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default Banner;
