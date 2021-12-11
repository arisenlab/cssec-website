import React from "react";
import dynamic from "next/dynamic";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Layout from "components/general/layout";
import ITWeekLayout from "components/it-week/ITWeekLayout";
import Space from "components/general/space";

const Redirect = dynamic(() => import("../../components/it-week/Redirect"));
const EventsList = dynamic(() => import("../../components/events/events-list"));

import { cdn_url } from "utils/constants";
import ITWeekActs from "../../data/it-week";

const useStyles = makeStyles(() => ({
  itWeekDescription: {
    background: "rgba(196, 196, 196, 0.15)",
    color: "white",
    padding: "10px",
    textIndent: "30px",
    marginTop: 10,
  },
  description: {
    textAlign: "justify",
  },
  img: {
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Highlights = ({ day_events }) => {
  const classes = useStyles();
  const [currentImage, setCurrentImage] = React.useState(0);
  const [isViewerOpen, setIsViewerOpen] = React.useState(false);

  const openImageViewer = React.useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    <ITWeekLayout>
      <Layout width="95%">
        <Space />

        <Grid container spacing={2}>
          <Grid container item md={8}>
            <Grid item xs={12}>
              <img src="/it-week/itweek21-banner.png" width="100%" />
            </Grid>
            <Grid item xs={12}>
              <Paper className={classes.itWeekDescription}>
                <Typography
                  variant="body1"
                  className={classes.description}
                  paragraph
                >
                  Several face-to-face events were difficult to hold this school
                  year due to the ongoing pandemic. This year's IT Week will be
                  hosted remotely, and the Computer Studies Students Executive
                  Council (CSSEC) will be in charge of organizing IT Week 2021
                  with the theme “Achieving Transcendence, Empowering Tech
                  Students of Today” on December 13-18, 2021.
                </Typography>
              </Paper>
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <EventsList day_events={day_events} />
            <img src={`${cdn_url}/ads/batucs-1.png`} width="100%" />
          </Grid>
        </Grid>

        <Space height={50} />

        <Grid container spacing={2}>
          <Grid item xs={12} md={4} align="center">
            <img src="/ads/pc-builders-ad.png" width="90%" />
          </Grid>
          {/* <Grid item xs={12} md={8} align="center">
                    <SectionHeader text="CS Shirts" />
                    {images.map((src, index) => (
                        <img
                            src={src}
                            onClick={() => openImageViewer(index)}
                            width="300"
                            key={index}
                            style={{ margin: "2px" }}
                            alt={src}
                            className={classes.img}
                        />
                    ))}

                    {isViewerOpen && (
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                        />
                    )}
                </Grid> */}
          <Grid item xs={12} md={8}>
            <Paper
              style={{
                padding: "10px",
                background: "rgba(196, 196, 196, 0.15)",
              }}
            >
              <Typography variant="h4" style={{ color: "#fff" }}>
                Information Technology Week 2021
              </Typography>
            </Paper>
            <Grid container spacing={2} style={{ marginTop: 10 }}>
              {ITWeekActs.map((act) => {
                return (
                  <Grid item xs={6} md={4} key={act.title}>
                    <Redirect act={act} />
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
        <Space height={25} />
      </Layout>
    </ITWeekLayout>
  );
};

export async function getStaticProps() {
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
    //const day_events = events;
    const day_events = events.filter((event) =>
      isSameDay(new Date(event.start.dateTime), new Date())
    );
    return { props: { day_events }, revalidate: 10 };
  } catch (err) {
    return { props: { day_events: [] }, revalidate: 10 };
  }
}

export default Highlights;
