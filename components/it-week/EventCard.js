import React from "react";
import { useRouter } from "next/router";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    borderRadius: 20,
    marginBottom: 10,
    padding: 50,
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonContainer: {
    textAlign: "center",
  },
  button: {
    borderRadius: 30,
    backgroundColor: "#62159A",
    color: "#fff",
    padding: "10px 40px 10px 40px",
    "&:hover": {
      backgroundColor: "#6d159A",
    },
  },
  text: {
    textShadow: "0px 4px 4px #FFFFFF",
    textAlign: "center",
  },
}));

const EventCard = ({ bgImage, title, href }) => {
  const classes = useStyles();
  const router = useRouter();
  return (
    <Box style={{ height: "70%" }}>
      <Paper
        className={classes.paper}
        style={{
          background: `linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0.6)), url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Typography variant="h4" color="primary" className={classes.text}>
          {title}
        </Typography>
      </Paper>

      <Box className={classes.buttonContainer}>
        <Button
          onClick={() => router.push(href)}
          className={classes.button}
          variant="contained"
        >
          <Typography variant="body1" style={{ fontWeight: "bold" }}>
            Learn More
          </Typography>
        </Button>
      </Box>
    </Box>
  );
};

export default EventCard;
