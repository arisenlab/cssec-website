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

import ITWeekLayout from "components/it-week/ITWeekLayout";
import Layout from "components/general/layout";
import Space from "components/general/space";
import ButtonBack from "components/general/ButtonBack";

import days from "data/days_data";

import google_calendar from "utils/google";

import { isSameDay } from "date-fns";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10,
  },
  headerEvent: {
    backgroundColor: "#622A55",
    color: "#fff",
  },
  contentEvent: {
    backgroundColor: "#C9A3E4",
    padding: 20,
    width: "100%",
    [theme.breakpoints.down("md")]: {
      width: "355px",
    },
  },
}));

const Events = ({
  monday_events,
  tuesday_events,
  wednesday_events,
  thursday_events,
  friday_events,
  saturday_events,
  sunday_events,
  events,
}) => {
  const classes = useStyles();
  const router = useRouter();

  days[0]["events"] = monday_events;
  days[1]["events"] = tuesday_events;
  days[2]["events"] = wednesday_events;
  days[3]["events"] = thursday_events;
  days[4]["events"] = friday_events;
  days[5]["events"] = saturday_events;
  days[6]["events"] = sunday_events;

  const [eventList, setEventList] = React.useState(days[0].events);
  const [dayDate, setDayDate] = React.useState(days[0].str_date);

  return (
    <ITWeekLayout>
      <Layout width="95%">
        <Space />
        <ButtonBack />
        <Space height={10} />
        <Grid container spacing={2} direction="column">
          <Grid item>
            <Typography variant="h4" style={{ color: "#fff" }}>
              Information Technology Week - Events
            </Typography>
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
                      <Typography variant="h6">{name}</Typography>
                    </Paper>
                  </ButtonBase>
                </Grid>
              ))}
            </Grid>
            <Grid container item xs={12} sm={6} spacing={1} direction="column">
              <Grid item align="center">
                <Paper className={classes.headerEvent}>
                  <Typography variant="h6">{dayDate}</Typography>
                </Paper>
              </Grid>
              <Grid item align="center">
                <Paper className={classes.contentEvent}>
                  <Grid container spacing={2} direction="column">
                    <Grid item xs={12}>
                      {eventList && eventList.length !== 0 ? (
                        eventList.map((event) => (
                          <EventCard
                            key={event.id}
                            summary={event.summary}
                            timeStart={event.start.dateTime}
                            timeEnd={event.end.dateTime}
                            location={event.location}
                            description={event.description}
                          />
                        ))
                      ) : (
                        <Grid item align="center">
                          <Typography variant="h6">No Event/s</Typography>
                        </Grid>
                      )}
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
            <Grid item sm={3} align="center">
              <img src="/ads/booploops-ad.png" width="100%" />
            </Grid>
          </Grid>
        </Grid>
      </Layout>
    </ITWeekLayout>
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

    const monday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 13))
    );
    const tuesday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 14))
    );
    const wednesday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 15))
    );
    const thursday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 16))
    );
    const friday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 17))
    );
    const saturday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 18))
    );

    const sunday_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date(2021, 11, 19))
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
