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
        width: "95%",
        margin: "auto",
    },
    redirects: {
        display: "flex",
        flexWrap: "wrap",
    },
    itWeekDescription: {
        padding: "10px",
        textIndent: "50px",
    },
}));

const ITWeek = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Space />

            <Grid container spacing={1}>
                <Grid item md={8}>
                    <Paper>
                        <Typography>IT Week Banner</Typography>
                    </Paper>
                    <Paper className={classes.itWeekDescription}>
                        <Typography variant="body1" component="p">
                            Despite the hindrance towards the conduct of various
                            face-to-face events created by the pandemic, the
                            annually held Information Technology (IT) Week shall
                            be pursued virtually this year. The Computer Studies
                            Student Executive Council (CSSEC) shall spearhead
                            the IT Week 2021 with the theme “Thriving through
                            Adversity: Enabling Technologies for Digital
                            Opportunities and Vitality” on January 17-23, 2021.
                            With utilization of available resources online, the
                            CSSEC shall make the week-long celebration possible
                            to further the knowledge and interest of Computer
                            Studies students in their field of learning.{" "}
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <Typography>Upcoming Events</Typography>
                    </Paper>
                    <Paper>
                        <Typography>Ad Space</Typography>
                    </Paper>
                </Grid>
            </Grid>

            <Space />

            <Grid container spacing={1}>
                <Grid item xs={12} md={4}>
                    <Paper>
                        <Typography>Ad Space</Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper style={{ padding: "10px" }}>
                        <img
                            src="/it-week/Information Technology Week.svg"
                            alt="Information Technology Week"
                            style={{ width: "100%" }}
                        />
                    </Paper>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        {ITWeekActs.map(image => {
                            return (
                                <Grid item xs={6} md={4} key={image.title}>
                                    <Redirect
                                        imgSrc={image.backgroundURL}
                                        title={image.title}
                                        labelLogoSrc={image.labelLogo}
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
