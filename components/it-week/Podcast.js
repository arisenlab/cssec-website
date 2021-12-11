import React from "react";
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
    width: "30%",
    [theme.breakpoints.down("md")]: {
      width: "40%",
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

const PodcastItem = () => {
  const classes = useStyles();
  return (
    <Box className={classes.item_container}>
      <img
        src="/it-week/podcast_1.png"
        alt="Podcast Picture"
        className={classes.item_img}
      />
      <Box className={classes.item_paper}>
        <Typography variant="h6" color="primary" gutterBottom>
          1.) Why Data Science?
        </Typography>
        <Typography variant="body2" paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
        </Typography>
        <Box className={classes.links}>
          <IconButton aria-label="delete">
            <FacebookIcon color="primary" />
          </IconButton>
          <IconButton aria-label="delete">
            <YouTubeIcon color="primary" />
          </IconButton>
          <IconButton aria-label="delete">
            <Icon icon="mdi:spotify" style={{ color: "#622A55" }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

const Podcast = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.title}>
        <Typography variant="h5" style={{ fontWeight: "bold" }}>
          INCOGNITALK PODCAST EPISODES
        </Typography>
      </Box>
      <Box className={classes.container}>
        <Grid container direction="column">
          <Grid item>
            <PodcastItem />
          </Grid>
          <Grid item>
            <PodcastItem />
          </Grid>
          <Grid item>
            <PodcastItem />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Podcast;
