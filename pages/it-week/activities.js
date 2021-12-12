import React from "react";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import ITWeekLayout from "components/it-week/ITWeekLayout";
import Layout from "components/general/layout";
import Space from "components/general/space";
import EventCard from "components/it-week/EventCard";
import EventCardSquare from "components/it-week/EventCardSquare";
import Podcast from "components/it-week/Podcast";
import Games from "components/it-week/Games";
import ButtonBack from "components/general/ButtonBack";

import WP from "utils/wordpress";

const Activities = ({ podcasts }) => {
  const router = useRouter();
  return (
    <ITWeekLayout>
      <Layout width="95%">
        <Space />
        <ButtonBack />
        <Space height={5} />
        <Box>
          <Typography variant="h6" style={{ color: "#fff" }}>
            Information Technology Week 2021 - Activities
          </Typography>
        </Box>

        <Space />

        <Grid container spacing={5} justify="center">
          <Grid
            container
            item
            alignContent="stretch"
            xs={12}
            md={8}
            spacing={2}
          >
            <Grid item xs={12}>
              <Box>
                <Typography
                  variant="h5"
                  style={{ color: "#fff", fontWeight: "bold" }}
                  gutterBottom
                >
                  ACADEMIC EVENTS
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <EventCard
                bgImage="/it-week/acad-event-talkwork.jpg"
                title="Talks and Workshop"
                href="https://twitter.com/ADDU_CS/status/1466727418748542979"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <EventCard
                bgImage="/it-week/acad-event-congress.jpg"
                title="Techfluent: Research Congress"
                href="https://twitter.com/ADDU_CS/status/1469573602492125184"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <EventCard
                bgImage="/it-week/acad-event-gamedev.jpg"
                title="Make IT: Game Dev Competition "
                href="https://twitter.com/ADDU_CS/status/1467040981837139969"
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <EventCard
                bgImage="/it-week/acad-event-hackoverflow.jpg"
                title="HackOverflow"
                href="https://twitter.com/ADDU_CS/status/1468837819456106498"
              />
            </Grid>
          </Grid>
          <Grid item xs={12} md={4} align="center">
            <img src="/ads/pc-builders-ad-2.png" width="90%" />
          </Grid>
          <Grid item xs={12}>
            <Games />
          </Grid>
        </Grid>

        <Space />

        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Grid
              container
              item
              alignContent="stretch"
              justify="space-between"
              spacing={2}
            >
              <Grid item xs={12}>
                <Box>
                  <Typography
                    variant="h5"
                    style={{ color: "#fff", fontWeight: "bold" }}
                    gutterBottom
                  >
                    NON-ACADEMIC EVENTS
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={6}>
                <EventCardSquare
                  bgImage="/it-week/nonacad-event-minecraft.png"
                  title="MINECRAFT BUILDING COMPETITION"
                  href="https://twitter.com/ADDU_CS/status/1465244151386152963"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <EventCardSquare
                  bgImage="/it-week/nonacad-event-wtf.jpg"
                  title="WHAT THE FACT! TRIVIA NIGHTS"
                  href="https://twitter.com/ADDU_CS/status/1466346402515079168"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <EventCardSquare
                  bgImage="/it-week/nonacad-event-meme.jpg"
                  title="MEME IT! COMPETITION"
                  href="#"
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <EventCardSquare
                  bgImage="/it-week/nonacad-event-pixel.png"
                  title="IT WEEK PIXEL GALLERY"
                  href="https://twitter.com/ADDU_CS/status/1466301108616253451"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} align="center">
            <Podcast podcasts={podcasts} />
          </Grid>
        </Grid>

        <Space />

        <Box
          style={{
            backgroundColor: "#62159A",
            width: "250px",
            margin: "auto",
            padding: 20,
            borderRadius: 30,
            marginBottom: 20,
          }}
        >
          <Typography
            variant="h4"
            style={{
              color: "#fff",
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Mini Games
          </Typography>
        </Box>

        <Grid container justify="center" spacing={4}>
          <Grid item xs={12} md={3}>
            <Box style={{ textAlign: "center" }}>
              <img src="/it-week/mini-games-amongus.jpg" width="80%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box style={{ textAlign: "center" }}>
              <img src="/it-week/mini-games-tetris.png" width="80%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box style={{ textAlign: "center" }}>
              <img src="/it-week/mini-games-minecraft.jpg" width="80%" />
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box style={{ textAlign: "center" }}>
              <img src="/it-week/mini-games-crabgame.jpg" width="80%" />
            </Box>
          </Grid>
          <Grid item xs={12} align="right">
            <Button
              variant="contained"
              color="primary"
              onClick={() =>
                router.push("https://tinyurl.com/ITWeek2021DiscordServer")
              }
            >
              Join Discord Server
            </Button>
          </Grid>
        </Grid>
        <Space />
      </Layout>
    </ITWeekLayout>
  );
};

export async function getStaticProps() {
  try {
    let podcasts = await WP.podcasts().order("asc").orderby("date");

    return { props: { podcasts }, revalidate: 10 };
  } catch (err) {
    return { props: { podcasts: [] }, revalidate: 10 };
  }
}

export default Activities;
