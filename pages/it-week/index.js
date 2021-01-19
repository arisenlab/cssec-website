import React from "react";

import dynamic from "next/dynamic";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Space from "../../components/general/space";

const Redirect = dynamic(() => import("../../components/it-week/redirect"));
const EventsList = dynamic(() => import("../../components/events/events-list"));

import ITWeekActs from "../../data/it-week-acts";

import { cdn_url } from "../../utils/constants";
import google_calendar from "../../utils/google";

import { isSameDay } from "date-fns";

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
        textIndent: "30px",
        marginTop: 10,
    },
    description: {
        textAlign: "justify",
    },
    centeredAndCropped: {
        objectFit: "cover",
        width: "100%",
        height: "100%",
    },
}));

const ITWeek = ({ day_events }) => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Space />

            <Grid container spacing={2}>
                <Grid container item md={8}>
                    <Grid item xs={12}>
                        <img
                            src={`${cdn_url}/it-week-2021/banner.jpg`}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.itWeekDescription}>
                            <Typography
                                variant="body1"
                                component="p"
                                className={classes.description}
                            >
                                Despite the hindrance towards the conduct of
                                various face-to-face events created by the
                                pandemic, the annually held Information
                                Technology (IT) Week shall be pursued virtually
                                this year. The Computer Studies Student
                                Executive Council (CSSEC) shall spearhead the IT
                                Week 2021 with the theme “Thriving through
                                Adversity: Enabling Technologies for Digital
                                Opportunities and Vitality” on January 17-23,
                                2021. With utilization of available resources
                                online, the CSSEC shall make the week-long
                                celebration possible to further the knowledge
                                and interest of Computer Studies students in
                                their field of learning.{" "}
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            <EventsList day_events={day_events} />
                        </Grid>
                        <Grid item>
                            <img
                                src={`${cdn_url}/ads/batucs-1.png`}
                                width="100%"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Space />
            <Space />

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} align="center">
                    <img src={`${cdn_url}/ads/pcbuilders-1.png`} width="100%" />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Paper style={{ padding: "10px" }}>
                        <Typography variant="h4" style={{ color: "#5D2252" }}>
                            Information Technology Week 2021
                        </Typography>
                    </Paper>
                    <Grid container spacing={2} style={{ marginTop: 10 }}>
                        {ITWeekActs.map(act => {
                            return (
                                <Grid item xs={6} md={4} key={act.title}>
                                    <Redirect
                                        imgSrc={act.backgroundURL}
                                        title={act.title}
                                        icon={act.icon}
                                        titleIcon={act.titleIcon}
                                        href={act.href}
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

export async function getStaticProps(ctx) {
    try {
        const events = (
            await google_calendar.events.list({
                calendarId: process.env.GOOGLE_CALENDAR_ID,
                orderBy: "startTime",
                singleEvents: true,
                timeMin: new Date(),
                maxResults: 10,
            })
        ).data.items;
        //const day_events = events;
        const day_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date())
        );
        return { props: { day_events }, revalidate: 10 };
    } catch (err) {
        return { props: { day_events: [] }, revalidate: 10 };
    }
}

export default ITWeek;
