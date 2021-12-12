import React, { useRef } from "react";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
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
  event_time: {
    fontWeight: "bold",
    color: "#29142E",
  },
  btn_attend: {
    fontWeight: "bold",
    color: "#29142E",
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const EventsList = ({ day_events }) => {
  const classes = useStyles();
  const router = useRouter();

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
        <Typography variant="h4">Now Happening</Typography>
        <Divider
          variant="fullWidth"
          style={{
            height: 5,
            backgroundColor: "#5D2252",
          }}
        />
      </Paper>

      {!events ? (
        <Detail className={classes.details}>
          <Typography variant="h6">
            <strong>No Events for today</strong>
          </Typography>
        </Detail>
      ) : (
        events.map(({ id, summary, start, end, location = null }) => (
          <Detail key={id}>
            <Typography variant="h6" style={{ fontWeight: "bold" }}>
              {summary}
            </Typography>
            <Typography variant="body1" className={classes.event_time}>
              {`${format(new Date(start.dateTime), "p")} - ${format(
                new Date(end.dateTime),
                "p"
              )}`}
            </Typography>
            {location ? (
              <Typography
                variant="body1"
                className={classes.btn_attend}
                onClick={() => router.push(location)}
              >
                Click Here to Attend
              </Typography>
            ) : null}
          </Detail>
        ))
      )}

      {/* <Detail>
        <Typography variant="h6" style={{ fontWeight: "bold" }}>
          E-Sports Championship: Mobile Legends
        </Typography>
        <Typography variant="body1" className={classes.event_time}>
          3:00pm - 4:00pm
        </Typography>
        <Typography
          variant="body1"
          className={classes.btn_attend}
          onClick={() => router.push("#")}
        >
          Click Here to Attend
        </Typography>
      </Detail> */}
    </Box>
  );
};

export default EventsList;
