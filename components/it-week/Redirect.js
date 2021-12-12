import React from "react";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "#F1E5F9",
    height: 150,
    width: "100%",
    display: "flex",
    position: "relative",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "10px",
  },
  titleIcon: {
    position: "absolute",
    bottom: 0,
    paddingLeft: 8,
    paddingRight: 8,
  },
  title: {
    position: "absolute",
    right: "5%",
    backgroundColor: "#F1E5F9",
    paddingLeft: 10,
    paddingRight: 10,
    fontWeight: "bold",
    [theme.breakpoints.down("md")]: {
      top: 5,
      bottom: 5,
    },
  },
  contentContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
}));

const Redirect = ({ act }) => {
  const { title, icon, href, bgImage } = act;
  const classes = useStyles();
  const router = useRouter();

  const TitleStyle = () => {
    return (
      <Box className={classes.titleIcon}>
        <Box
          style={{
            position: "relative",
          }}
        >
          <Typography variant="h6" color="primary" className={classes.title}>
            {title}
          </Typography>
          <img src="/icons/ring-key.png" width="100%" />
        </Box>
      </Box>
    );
  };

  return (
    <ButtonBase
      className={classes.root}
      /* style={{
        background: `linear-gradient(0deg, rgba(241, 229, 249, 0.45), rgba(241, 229, 249, 0.45)), url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }} */
      onClick={() => router.push(href)}
    >
      <Box className={classes.contentContainer}>
        <img
          src={icon}
          alt={`${title}'s Icon'`}
          width="25%"
          style={{ marginBottom: 5 }}
        />
        <TitleStyle />
      </Box>
    </ButtonBase>
  );
};

export default Redirect;
