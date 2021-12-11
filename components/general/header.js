import React from "react";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

import Navbar from "../../navigation/navbar";
import NavBurger from "../../navigation/navburger";

import { cdn_url } from "../../utils/constants";

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(1),
    display: "block",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
    color: "#fff",
  },
  navLinks: {
    [theme.breakpoints.down("md")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
  },
  title: {
    flexGrow: 1,
    display: "flex",
    alignItems: "center",
    padding: 5,
  },
  titleText: {
    paddingLeft: 10,
  },
}));

const Header = ({ currentRoute }) => {
  const classes = useStyles();
  const theme = useTheme();
  const [drawer, setDrawer] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setDrawer(open);
  };

  return (
    <AppBar position="sticky" color="primary" style={{ zIndex: 1 }}>
      <Toolbar>
        <IconButton
          aria-label="open drawer"
          edge="start"
          onClick={toggleDrawer(true)}
          className={classes.menuButton}
        >
          <MenuIcon />
        </IconButton>

        <Drawer anchor={"left"} open={drawer} onClose={toggleDrawer(false)}>
          <NavBurger
            onChosen={() => {
              setDrawer(false);
            }}
          />
        </Drawer>
        <div className={classes.title}>
          <img
            src={`${cdn_url}/utilities/mecha_chammie.png`}
            height={50}
            width={50}
          />
          <Typography variant="h6" className={classes.titleText}>
            {!useMediaQuery(theme.breakpoints.down("md"))
              ? "Computer Studies Student Executive Council"
              : "CSSEC"}
          </Typography>
        </div>

        <div className={classes.navLinks}>
          <Navbar currentRoute={currentRoute} />
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
