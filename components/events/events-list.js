import React, { useRef } from "react";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import { format, differenceInSeconds, formatDistanceToNow } from "date-fns";
import { Details } from "@material-ui/icons";

const useStyles = makeStyles(() => ({
  header: {
    backgroundColor: "#C9A3E4",
    padding: 20,
    marginBottom: 10,
  },
  details: {
    background: "rgba(196, 196, 196, 0.5)",
    padding: 5,
    marginTop: 5,
    borderLeft: "5px solid #E5E5E5",
    marginBottom: 10,
  },
}));

const EventsList = ({ day_events }) => {
  const classes = useStyles();
  const dateToday = new Date();

  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setEvents(day_events);
  }, []);

  const Detail = ({ children }) => {
    return (
      <Box className={classes.details}>
        <Typography variant="h6">
          <strong>{children}</strong>
        </Typography>
      </Box>
    );
  };

  return (
    <Box>
      <Paper className={classes.header}>
        <Typography variant="h4">{format(dateToday, "EEEE")}</Typography>
        <Divider
          variant="fullWidth"
          style={{
            height: 5,
            backgroundColor: "#5D2252",
          }}
        />
      </Paper>

      {events ? (
        <Detail className={classes.details}>
          <Typography variant="h6">
            <strong>No Events for today</strong>
          </Typography>
        </Detail>
      ) : (
        events.map(({ id, summary, start, end, description }) => (
          <Detail key={id}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {summary}
            </Typography>
            <Typography
              variant="body1"
              color="primary"
              style={{ fontWeight: "bold" }}
            >
              {`${format(new Date(start.dateTime), "p")} - ${format(
                new Date(end.dateTime),
                "p"
              )}`}
            </Typography>
          </Detail>
        ))
      )}

      <Details>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          E-Sports Championship: Mobile Legends
        </Typography>
        <Typography variant="body1" color="primary">
          3:00pm - 4:00pm
        </Typography>
        <Typography variant="body1" color="primary">
          Via Zoom
        </Typography>
      </Details>
    </Box>
  );
};

export default EventsList;
