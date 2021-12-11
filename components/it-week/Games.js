import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10,
    backgroundColor: "#C9A3E4",
  },
  giveawaysContent: {
    padding: 10,
  },
  divider: {
    height: 5,
    backgroundColor: "#622a55",
  },
  scrolling_wrapper: {
    display: "flex",
    flexWrap: "nowrap",
    overflowX: "auto",
    paddingBottom: 5,
    "&::-webkit-scrollbar": {
      width: "0.5em",
      height: "0.5em",
      marginRight: 5,
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
      borderRadius: "10px",
    },
  },
  card: {
    flex: "0 0 auto",
    width: "300px",
    marginLeft: 20,
    height: "150px",
    backgroundColor: "#422C88",
    WebkitOverflowScrolling: "touch",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
}));

const Games = ({ giveaways }) => {
  const classes = useStyles();

  return (
    <Paper className={classes.paper}>
      <div className={classes.scrollGiveaways}>
        <div className={classes.scrolling_wrapper}>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
            <Box className={classes.card}>Game #{num}</Box>
          ))}
        </div>
      </div>
    </Paper>
  );
};

export default Games;
