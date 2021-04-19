import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

import Space from "../components/general/space";

import { differenceInSeconds, format, formatDistanceToNow } from "date-fns";

import google_calendar from "../utils/google";

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
    currentPaper: {
        backgroundColor: "#622a55",
        color: "#fff",
    },
    secondaryTail: {
        backgroundColor: theme.palette.secondary.main,
    },
}));

const Calendar = ({ events: cssec_events }) => {
    const classes = useStyles();

    const [events, setEvents] = React.useState([]);
    const [currentString, setCurrentString] = React.useState(null);
    const [currentTime, setCurrentTime] = React.useState(new Date());

    React.useEffect(() => {
        setEvents(cssec_events);
    }, []);

    React.useEffect(() => {
        window.setInterval(
            setCurrentTime(() => new Date()),
            1000
        );
    }, []);

    React.useEffect(() => {
        if (events.length > 0) {
            if (
                differenceInSeconds(
                    new Date(events[0].start.dateTime),
                    currentTime
                ) > 0
            ) {
                setCurrentString(
                    `Event ${events[0].summary} comes in ${formatDistanceToNow(
                        new Date(events[0].start.dateTime)
                    )}`
                );
            } else {
                setCurrentString(`${events[0].summary} is happening right now`);
            }
        } else {
            setCurrentString("There are no upcoming events");
        }
    }, [events, currentTime]);

    return (
        <>
            <Space />

            <div className={classes.root}>
                <Paper
                    className={classes.paper}
                    style={{ color: "#5D2252" }}
                    align="center"
                >
                    <Typography variant="h3">Timeline of Events</Typography>
                </Paper>
                <Timeline align="alternate">
                    <TimelineItem>
                        <TimelineOppositeContent>
                            <Typography variant="subtitle1">
                                <b>{`${format(
                                    new Date(),
                                    "MMM dd, yyyy p"
                                )}`}</b>
                            </Typography>
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                            <TimelineDot
                                style={{ backgroundColor: "#3a1534" }}
                            />
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent style={{}}>
                            <Paper
                                elevation={3}
                                className={`${classes.paper} ${classes.currentPaper}`}
                            >
                                <Typography variant="h6" component="h1">
                                    {currentString}
                                </Typography>
                            </Paper>
                        </TimelineContent>
                    </TimelineItem>
                    {events.map(event => (
                        <TimelineItem key={event.id}>
                            <TimelineOppositeContent>
                                <Typography
                                    variant="body1"
                                    color="textSecondary"
                                >
                                    {`${format(
                                        new Date(event.start.dateTime),
                                        "MMM dd, yyyy"
                                    )} ${format(
                                        new Date(event.start.dateTime),
                                        "p"
                                    )} - ${format(
                                        new Date(event.end.dateTime),
                                        "p"
                                    )}`}
                                </Typography>
                            </TimelineOppositeContent>
                            <TimelineSeparator>
                                <TimelineDot
                                    style={{ backgroundColor: "#ba83b1" }}
                                />
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Paper elevation={3} className={classes.paper}>
                                    <Typography variant="h5" component="h1">
                                        {event.summary}
                                    </Typography>
                                    <Typography variant="body2">
                                        {event.description}
                                    </Typography>
                                </Paper>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </>
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
        return { props: { events }, revalidate: 10 };
    } catch (err) {
        return { props: { events: [] }, revalidate: 10 };
    }
}

export default Calendar;
