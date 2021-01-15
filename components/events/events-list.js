import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import { format, differenceInSeconds, formatDistanceToNow } from "date-fns";

const EventsList = ({ day_events }) => {
    const dateToday = new Date();

    const [events, setEvents] = React.useState([]);
    const [currentTime, setCurrentTime] = React.useState(new Date());
    const [currentString, setCurrentString] = React.useState("");

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
        if (events.length > 0) {
            if (
                differenceInSeconds(
                    new Date(events[0].start.dateTime),
                    new Date()
                ) > 0
            ) {
                setCurrentString(
                    `Event ${events[0].summary} comes in ${formatDistanceToNow(
                        new Date(events[0].start.dateTime)
                    )}`
                );
            } else {
                setCurrentString(`Event ${events[0].summary} is happening now`);
            }
        } else {
            setCurrentString("There are no upcoming events");
        }
    }, [events, currentTime]);

    return (
        <Paper elevation={3}>
            <div style={{ padding: 15 }}>
                <Paper
                    style={{
                        backgroundColor: "#C9B1B1",
                        padding: 5,
                    }}
                >
                    <Typography variant="h4">
                        <i>{format(dateToday, "EEEE")}</i>
                    </Typography>
                    <Divider
                        variant="fullWidth"
                        style={{
                            height: 5,
                            backgroundColor: "#622a55",
                        }}
                    />
                </Paper>
                <div
                    style={{
                        padding: 15,
                        overflowY: "scroll",
                        height: "325px",
                    }}
                >
                    <Paper
                        style={{
                            padding: 10,
                            marginTop: 10,
                            backgroundColor: "#BC8CB3",
                        }}
                    >
                        <Typography variant="h6">
                            <strong>{currentString}</strong>
                        </Typography>
                    </Paper>
                    {events.map(({ id, summary, start, end, description }) => (
                        <Paper
                            style={{
                                padding: 10,
                                marginTop: 10,
                                backgroundColor: "#BC8CB3",
                            }}
                            key={id}
                        >
                            <Typography variant="h6">{summary}</Typography>
                            <Typography variant="subtitle2">
                                {`${format(
                                    new Date(start.dateTime),
                                    "p"
                                )} - ${format(new Date(end.dateTime), "p")}`}
                            </Typography>
                            <Typography variant="body1">
                                {description}
                            </Typography>
                        </Paper>
                    ))}
                </div>
            </div>
        </Paper>
    );
};

export default EventsList;
