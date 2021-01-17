import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import { cdn_url } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `linear-gradient(0deg, rgba(123, 118, 125, 0.5), rgba(123, 118, 125, 0.5)), url(${cdn_url}/accss/accss-banner.jpg)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "60vh",
    },
}));

const Banner = () => {
    const classes = useStyles();

    return <div className={classes.root}></div>;
};

export default Banner;
