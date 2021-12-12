import React from "react";
import { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";

import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import { Icon } from "@iconify/react";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: "30px",
    backgroundColor: "#C9A3E4",
    width: "80%",
    padding: 15,
    [theme.breakpoints.down("md")]: {
      width: "100%",
    },
  },
  title: {
    textAlign: "left",
    marginBottom: 10,
  },
  container: {
    overflowY: "scroll",
    margin: "auto",
    width: "100%",
    height: "400px",
    "&::-webkit-scrollbar": {
      width: "0.5em",
      marginRight: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "10px",
    },
  },
  item_container: {
    display: "flex",
    flexGrow: 1,
    gap: 0,
    marginBottom: 15,
  },
  item_img: {
    borderRadius: "10px 0 0 10px",
    width: "40%",
    [theme.breakpoints.down("md")]: {
      width: "45%",
    },
  },
  item_paper: {
    backgroundColor: "#C4C4C4",
    borderRadius: "0 10px 10px 0",
    textAlign: "left",
    padding: "5px 5px 5px 10px",
  },
  item_title: {
    fontWeight: "bold",
  },
  item_links: {
    display: "flex",
    gap: 1,
  },
}));

const Podcast = ({ podcasts }) => {
  const classes = useStyles();
  const router = useRouter();

  const PodcastItem = ({ podcast, index }) => {
    return (
      <Box className={classes.item_container}>
        <img
          src={podcast.acf.thumbnail.url}
          alt={`${podcast.acf.title} Thumbnail`}
          className={classes.item_img}
        />
        <Box className={classes.item_paper}>
          <Typography variant="h6" color="primary" gutterBottom>
            {`${index + 1}.) ${podcast.acf.title}`}
          </Typography>
          <Typography variant="body2" paragraph>
            {podcast.acf.description}
          </Typography>
          <Box className={classes.links}>
            <IconButton
              aria-label={`${podcast.acf.title}-facebook-link`}
              onClick={() => router.push(podcast.acf.facebook_link)}
            >
              <FacebookIcon color="primary" />
            </IconButton>
            <IconButton
              aria-label={`${podcast.acf.title}-youtube-link`}
              onClick={() => router.push(podcast.acf.youtube_link)}
            >
              <YouTubeIcon color="primary" />
            </IconButton>
            <IconButton
              aria-label={`${podcast.acf.title}-spotify-link`}
              onClick={() => router.push(podcast.acf.spotify_link)}
            >
              <Icon icon="mdi:spotify" style={{ color: "#622A55" }} />
            </IconButton>
          </Box>
        </Box>
      </Box>
    );
  };

  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          INCOGNITALK PODCAST EPISODES
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Grid container direction="column">
          {podcasts.map((podcast, index) => (
            <Grid item key={podcast.id}>
              <PodcastItem podcast={podcast} index={index} />
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Podcast;
