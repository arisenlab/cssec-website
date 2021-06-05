import React from "react";
import { useRouter } from "next/router";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({

}))

const compactSpace = () => {
    const classes = useStyles();
    return(
        <Grid
            container
            direction = "row"
            alignItems = "center"
            justify = "space-evenly"
        ></Grid>
    );
};

export default compactSpace;