import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import { makeStyles } from "@material-ui/core/styles";

import Space from "components/general/space";

const useStyles = makeStyles(theme => ({
    container: {
        color: "#5D2252",
    },
    divider: {
        backgroundColor: "#5D2252",
        height: "5px",
    },
    title: {
        padding: "10px",
        color: "#5D2252",
    },
    notFull: {
        width: sizes => sizes.width,
        [theme.breakpoints.down("md")]: {
            width: sizes => sizes.mobileSize,
        },
    },
}));

const SectionHeader = ({ text, width = "100%" }) => {
    const sizes = { width: width, mobileSize: "100%" };
    const classes = useStyles(sizes);

    return (
        <>
            <Paper elevation={3} className={classes.notFull}>
                <div className={classes.title}>
                    <Typography variant="h5">{text}</Typography>
                    <Divider className={classes.divider} />
                </div>
            </Paper>
            <Space height={15} />
        </>
    );
};

export default SectionHeader;
