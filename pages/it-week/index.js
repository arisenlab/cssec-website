import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Space from "../../components/general/space";
import Redirect from "../../components/it-week/redirect";

import ITWeekActs from "../../data/it-week-acts";

const useStyles = makeStyles(theme => ({
    root: {
        width: "98%",
        margin: "auto",
    },
    redirects: {
        display: "flex",
        flexWrap: "wrap",
    },
}));

const ITWeek = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Space />

            <Grid container spacing={1}>
                <Grid item xs={8}>
                    <Paper>
                        <Typography>IT Week Banner</Typography>
                    </Paper>
                    <Paper>
                        <Typography>IT Week Description</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={4}>
                    <Paper>
                        <Typography>Upcoming Events</Typography>
                    </Paper>
                    <Paper>
                        <Typography>Ad Space</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Space />

            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <Paper>
                        <Typography>Ad Space</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={8}>
                    <Paper>
                        <Typography>Space</Typography>
                    </Paper>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        {ITWeekActs.map(image => {
                            return (
                                <Grid item xs={4}>
                                    <Redirect
                                        imgSrc={image.url}
                                        title={image.title}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};

export default ITWeek;
