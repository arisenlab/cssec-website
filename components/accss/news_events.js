import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        margin: "auto",
    },
}));

const NewsAndEvents = () => {
    const classes = useStyles();
    return (
        <Grid
            container
            spacing={2}
            alignItems="center"
            className={classes.root}
        >
            <Grid item md={6}>
                <Paper>
                    <Typography variant="h6">NEWS</Typography>
                </Paper>
            </Grid>
            <Grid item md={6}>
                <Paper>
                    <Typography variant="h6">EVENTS</Typography>
                </Paper>
            </Grid>
        </Grid>
    );
};

export default NewsAndEvents;
