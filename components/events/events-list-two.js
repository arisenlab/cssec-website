import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { format, differenceInSeconds, formatDistanceToNow } from "date-fns";

const EventsListTwo = ({ day_events }) => {
    const dateToday = new Date();

    const [events, setEvents] = React.useState([]);
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [currentString, setCurrentString] = React.useState(null);

    React.useEffect(() => {
        setEvents(day_events);
    }, []);

    React.useEffect(() => {
        window.setInterval(
            setCurrentTime(() => new Date()),
            1000
        );
    }, []);

    React.useEffect(() => {
        if (events.length === 0) {
            setCurrentString(
                "There are no upcoming events. Rest and Fighting!"
            );
        } else {
            setCurrentString(null);
        }
    }, [events, currentTime]);

    return (
        <Paper elevation={3}>
            <Typography
                variant="h5"
                style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10 }}
            >
                <strong>Events on this day</strong>
            </Typography>

            <div
                style={{
                    padding: 15,
                    overflowY: "scroll",
                    height: "325px",
                }}
            >
                <Typography variant="subtitle1" gutterBottom>
                    {currentString}
                </Typography>
                {events.map(({ id, summary, start, end, description }) => (
                    <Grid container spacing={2} key={id}>
                        <Grid item xs={3} align="center">
                            <Paper
                                style={{
                                    backgroundColor: "#622A55",
                                    color: "#fff",
                                }}
                            >
                                <div>
                                    <Typography variant="h6">
                                        {format(new Date(start.dateTime), "dd")}
                                    </Typography>
                                </div>
                                <div>
                                    <Typography variant="h6">
                                        {format(
                                            new Date(start.dateTime),
                                            "MMM"
                                        )}
                                    </Typography>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" gutterBottom>
                                {summary}
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                {description}
                            </Typography>
                            <Typography variant="subtitle2">
                                <i>{`${format(
                                    new Date(start.dateTime),
                                    "p"
                                )} - ${format(
                                    new Date(end.dateTime),
                                    "p"
                                )}`}</i>
                            </Typography>
                        </Grid>
                    </Grid>
                ))}
            </div>
        </Paper>
    );
};

export default EventsListTwo;