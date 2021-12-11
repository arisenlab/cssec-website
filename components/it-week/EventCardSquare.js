import React from "react";
import { useRouter } from "next/router";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    borderRadius: 20,
    marginBottom: 10,
    padding: 50,
    height: "100%",
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
}));

const EventCardSquare = ({ bgImage, title, href }) => {
  const router = useRouter();
  const classes = useStyles();
  return (
    <ButtonBase
      style={{
        background: `linear-gradient(0deg, rgba(255, 255, 255, 0.45), rgba(255, 255, 255, 0.45)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className={classes.container}
      onClick={() => router.push(href)}
    >
      <Typography variant="h5" color="primary" style={{ fontWeight: "bold" }}>
        {title}
      </Typography>
    </ButtonBase>
  );
};

export default EventCardSquare;
