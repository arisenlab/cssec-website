import React from "react";
import dynamic from "next/dynamic";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Typography from "@material-ui/core/Typography";

import Space from "components/general/space";

const TimelineItem1 = dynamic(() =>
    import("components/calendar/timeline").then(func => func.TimelineItem1)
);
const TimelineItem2 = dynamic(() =>
    import("components/calendar/timeline").then(func => func.TimelineItem2)
);

import {
    format,
    getMonth,
    isThisMonth,
    addMonths,
    differenceInMonths,
} from "date-fns";

import google_calendar from "utils/google";

const useStyles = makeStyles(theme => ({
    root: {
        width: "80%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    paper: {
        padding: "6px 16px",
    },
    monthPaper: {
        width: "40%",
        [theme.breakpoints.down("xs")]: {
            width: "100%",
        },
    },
    currentPaper: {
        backgroundColor: "#622a55",
        color: "#fff",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Calendar = ({ events: cssec_events, events2: cssec_events2 }) => {
    const classes = useStyles();

    const [events, setEvents] = React.useState([]);
    const [events2, setEvents2] = React.useState([]);

    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const noEventsBanner = (
        <Paper elevation={3} className={classes.paper}>
            <Typography variant="h5" component="h1">
                No events on this month
            </Typography>
            <Divider
                variant="fullWidth"
                style={{
                    height: 3,
                    backgroundColor: "#622a55",
                }}
            />
        </Paper>
    );

    React.useEffect(() => {
        setEvents(cssec_events);
    }, []);

    return (
        <>
            <Space />

            <div className={classes.root}>
                <Paper className={classes.paper} align="center">
                    <Typography variant="h3" color="primary">
                        Timeline of Events
                    </Typography>
                </Paper>
                <Timeline>
                    {/* This month */}
                    <TimelineItem1 date="Month" align="center">
                        <Paper
                            elevation={3}
                            className={`${classes.paper} ${classes.monthPaper}`}
                        >
                            <Typography
                                variant="h5"
                                component="h1"
                                align="center"
                            >
                                {monthNames[getMonth(new Date())]}
                            </Typography>
                        </Paper>
                    </TimelineItem1>
                    {events.length > 0 ? (
                        events.map(event => (
                            <TimelineItem1
                                date={`${format(
                                    new Date(event.start.dateTime),
                                    "MMM dd, yyyy"
                                )} ${format(
                                    new Date(event.start.dateTime),
                                    "p"
                                )} - ${format(
                                    new Date(event.end.dateTime),
                                    "p"
                                )}`}
                                key={event.id}
                            >
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h5" component="h1">
                                        {event.summary}
                                    </Typography>
                                    {event.description ? (
                                        <>
                                            <Divider
                                                variant="fullWidth"
                                                style={{
                                                    height: 3,
                                                    backgroundColor: "#622a55",
                                                }}
                                            />
                                            <Typography
                                                variant="body2"
                                                dangerouslySetInnerHTML={{
                                                    __html: event.description,
                                                }}
                                            />
                                        </>
                                    ) : null}
                                </Paper>
                            </TimelineItem1>
                        ))
                    ) : (
                        <TimelineItem1>{noEventsBanner}</TimelineItem1>
                    )}
                    {/* Next month */}
                    <TimelineItem2 date="Month" rightAlign="right">
                        <Paper
                            elevation={3}
                            className={`${classes.paper} ${classes.monthPaper}`}
                        >
                            <Typography
                                variant="h5"
                                component="h1"
                                align="center"
                            >
                                {monthNames[getMonth(new Date()) + 1]}
                            </Typography>
                        </Paper>
                    </TimelineItem2>
                    {events2.length > 0 ? (
                        events2.map(event => (
                            <TimelineItem2
                                date={`${format(
                                    new Date(event.start.dateTime),
                                    "MMM dd, yyyy"
                                )} ${format(
                                    new Date(event.start.dateTime),
                                    "p"
                                )} - ${format(
                                    new Date(event.end.dateTime),
                                    "p"
                                )}`}
                                key={event.id}
                            >
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h5" component="h1">
                                        {event.summary}
                                    </Typography>
                                    {event.description ? (
                                        <>
                                            <Divider
                                                variant="fullWidth"
                                                style={{
                                                    height: 3,
                                                    backgroundColor: "#622a55",
                                                }}
                                            />
                                            <Typography
                                                variant="body2"
                                                dangerouslySetInnerHTML={{
                                                    __html: event.description,
                                                }}
                                            />
                                        </>
                                    ) : null}
                                </Paper>
                            </TimelineItem2>
                        ))
                    ) : (
                        <TimelineItem2>{noEventsBanner}</TimelineItem2>
                    )}
                </Timeline>
            </div>
        </>
    );
};

export async function getStaticProps(ctx) {
    try {
        let events = (
            await google_calendar.events.list({
                calendarId: process.env.GOOGLE_CALENDAR_ID,
                orderBy: "startTime",
                singleEvents: true,
                timeMin: new Date(),
            })
        ).data.items;

        //get the events for this month
        events = events.filter(event =>
            isThisMonth(new Date(event.start.dateTime))
        );

        //get the events for next month
        let events2 =
            events.filter(event =>
                differenceInMonths(
                    new Date(event.start.dateTime),
                    addMonths(new Date(), 1)
                )
            ) === 0;

        return { props: { events, events2 }, revalidate: 10 };
    } catch (err) {
        return { props: { events: [], events2: [] }, revalidate: 10 };
    }
}

export default Calendar;
