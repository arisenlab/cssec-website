import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { cdn_url } from "utils/constants";
import { format } from "date-fns";

const EventsListTwo = ({ day_events }) => {
  const [events, setEvents] = React.useState([]);

  React.useEffect(() => {
    setEvents(day_events);
  }, []);

  return (
    <>
      <Typography variant="h4">
        <strong>Events</strong>
      </Typography>
      {events.length > 0 ? (
        <div
          style={{
            padding: 15,
            overflowY: "scroll",
            height: "600px",
          }}
        >
          {events.map(({ id, summary, start, end, description }) => (
            <Grid container spacing={2} key={id} style={{ marginTop: 10 }}>
              <Grid item xs={2} align="center">
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
              <Grid item xs={10}>
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
                  <i>{`${format(new Date(start.dateTime), "p")} - ${format(
                    new Date(end.dateTime),
                    "p"
                  )}`}</i>
                </Typography>
              </Grid>
            </Grid>
          ))}
        </div>
      ) : (
        <Grid container align="center">
          <Grid item xs={12} md={12} align="center">
            <img
              src={`${cdn_url}/chammie-chan/sad-chammie-chan.png`}
              width="25%"
            />
            <Typography variant="h6">
              "There are no upcoming events."
            </Typography>
          </Grid>
        </Grid>
      )}
    </>
  );
};

export default EventsListTwo;
