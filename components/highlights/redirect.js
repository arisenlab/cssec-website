import React from "react";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";

const useStyles = makeStyles(theme => ({
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
    },
}));

const Redirect = ({ icon, titleIcon, href }) => {
    const classes = useStyles();
    const router = useRouter();

    return (
        <ButtonBase className={classes.root} onClick={() => router.push(href)}>
            <div>{icon}</div>
            <div className={classes.titleIcon}>{titleIcon}</div>
        </ButtonBase>
    );
};

export default Redirect;
