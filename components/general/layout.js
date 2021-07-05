import React from "react";

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        margin: "auto",
        width: characteristics => characteristics.width,
        [theme.breakpoints.down("md")]: {
            width: characteristics =>
                characteristics.hasMobile ? "100%" : null,
        },
    },
}));

function Layout({ children, width, hasMobile = false }) {
    const characteristics = { width: width, hasMobile: hasMobile };
    const classes = useStyles(characteristics);
    return <div className={classes.root}>{children}</div>;
}

export default Layout;
