import React from "react";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const EventCard = dynamic(() => import("components/events/event-card"));

import Space from "components/general/space";

import days from "data/days_data";

import google_calendar from "utils/google";
import { cdn_url } from "utils/constants";

import { isSameDay } from "date-fns";

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        margin: "auto",
    },
    arrowIcon: {
        display: "flex",
        alignItems: "center",
    },
    paper: {
        padding: 10,
    },
    headerEvent: {
        backgroundColor: "#622A55",
        color: "#fff",
    },
    contentEvent: {
        backgroundColor: "rgba(186, 131, 180, 0.29)",
        padding: 20,
    },
}));

const Events = ({
    sunday_events,
    monday_events,
    tuesday_events,
    wednesday_events,
    thursday_events,
    friday_events,
    saturday_events,
    events,
}) => {
    const classes = useStyles();
    const router = useRouter();

    days[0]["events"] = sunday_events;
    days[1]["events"] = monday_events;
    days[2]["events"] = tuesday_events;
    days[3]["events"] = wednesday_events;
    days[4]["events"] = thursday_events;
    days[5]["events"] = friday_events;
    days[6]["events"] = saturday_events;

    const [eventList, setEventList] = React.useState(days[0].events);
    const [dayDate, setDayDate] = React.useState(days[0].str_date);

    return (
        <div className={classes.root}>
            <Space />
            <ButtonBase
                disableRipple
                className={classes.arrowIcon}
                onClick={() => router.push("/it-week")}
            >
                <ArrowBackIcon /> <Typography variant="h6">Back</Typography>
            </ButtonBase>
            <Space height={10} />
            <Grid container spacing={2} direction="column">
                <Grid item>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" style={{ color: "#5D2252" }}>
                            Information Technology Week - Events
                        </Typography>
                    </Paper>
                </Grid>
                <Grid container item spacing={3} style={{ padding: 20 }}>
                    <Grid container item sm={3} spacing={1} direction="column">
                        {days.map(({ id, name, str_date, style }) => (
                            <Grid item key={id}>
                                <ButtonBase
                                    style={{ width: "100%" }}
                                    onClick={() => {
                                        setEventList(days[id].events);
                                        setDayDate(str_date);
                                    }}
                                >
                                    <Paper style={style}>
                                        <Typography variant="h6">
                                            {name}
                                        </Typography>
                                    </Paper>
                                </ButtonBase>
                            </Grid>
                        ))}
                    </Grid>
                    <Grid container item sm={6} spacing={1} direction="column">
                        <Grid item align="center">
                            <Paper className={classes.headerEvent}>
                                <Typography variant="h6">{dayDate}</Typography>
                            </Paper>
                        </Grid>
                        <Grid item align="center">
                            <Paper className={classes.contentEvent}>
                                <Grid container spacing={2} direction="column">
                                    <Grid item xs={12}>
                                        <EventCard
                                            summary={"Blah3dasddawd"}
                                            timeStart={new Date()}
                                            timeEnd={new Date()}
                                            location={"Matina"}
                                            description={"Description"}
                                        />
                                        {/* {eventList && eventList.length !== 0 ? (
                                            eventList.map(event => (
                                                <EventCard
                                                    key={event.id}
                                                    summary={event.summary}
                                                    timeStart={
                                                        event.start.dateTime
                                                    }
                                                    timeEnd={event.end.dateTime}
                                                    location={event.location}
                                                    description={
                                                        event.description
                                                    }
                                                />
                                            ))
                                        ) : (
                                            <Grid item align="center">
                                                <Typography variant="h6">
                                                    No Event/s
                                                </Typography>
                                            </Grid>
                                        )} */}
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    </Grid>
                    <Grid item sm={3} align="center">
                        <img src={`${cdn_url}/ads/batucs-2.png`} width="100%" />
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
                maxResults: 20,
            })
        ).data.items;

        const sunday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 17))
        );
        const monday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 18))
        );
        const tuesday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 19))
        );
        const wednesday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 20))
        );
        const thursday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 21))
        );
        const friday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 22))
        );
        const saturday_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date(2021, 0, 23))
        );

        return {
            props: {
                sunday_events,
                monday_events,
                tuesday_events,
                wednesday_events,
                thursday_events,
                friday_events,
                saturday_events,
                events,
            },
            revalidate: 10,
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                sunday_events: [],
                monday_events: [],
                tuesday_events: [],
                wednesday_events: [],
                thursday_events: [],
                friday_events: [],
                saturday_events: [],
            },
            revalidate: 10,
        };
    }
}

export default Events;
