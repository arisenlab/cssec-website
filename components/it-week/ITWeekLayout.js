import React from "react";

import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
  container: {
    width: "100%",
    margin: 0,
    padding: 0,
    backgroundColor: "#0B0722",
  },
}));

const ITWeekLayout = ({ children }) => {
  const classes = useStyles();
  return <Box className={classes.container}>{children}</Box>;
};

export default ITWeekLayout;
