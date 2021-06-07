import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { format } from "date-fns";

const EventsListTwo = ({ day_events }) => {
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
        <>
            <Typography
                variant="h5"
                style={{ paddingTop: 10, paddingLeft: 10, paddingBottom: 10 }}
            >
                <strong>Events</strong>
            </Typography>

            <div
                style={{
                    padding: 15,
                    overflowY: "scroll",
                    height: "500px",
                }}
            >
                <Typography variant="subtitle1" gutterBottom>
                    {currentString}
                </Typography>
                {events.map(({ id, summary, start, end, description }) => (
                    <Grid
                        container
                        spacing={2}
                        key={id}
                        style={{ marginTop: 10 }}
                    >
                        <Grid item xs={3} align="center">
                            <Paper
                                style={{
                                    backgroundColor: "#622A55",
                                    color: "#fff",
                                    borderRadius: "200px",
                                }}
                            >
                                <Typography variant="h6">
                                    {format(new Date(start.dateTime), "dd")}
                                </Typography>
                                <Typography variant="h6">
                                    {format(new Date(start.dateTime), "MMM")}
                                </Typography>
                            </Paper>
                        </Grid>
                        <Grid item xs={9}>
                            <Typography variant="h5" gutterBottom>
                                {summary}
                            </Typography>
                            <Typography
                                variant="body1"
                                gutterBottom
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            />
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
        </>
    );
};

export default EventsListTwo;
