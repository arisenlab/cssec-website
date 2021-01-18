import React from "react";

import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import Space from "../general/space";

import Giveaway from "./giveaway";

const useStyles = makeStyles(theme => ({
    paper: {
        padding: 10,
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
    },
    card: {
        flex: "0 0 auto",
        width: "300px",
        marginLeft: 20,
        WebkitOverflowScrolling: "touch",
    },
}));

const GiveawayScroll = ({ giveaways }) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            <Typography variant="h5" color="primary">
                Join IT Week 2021 Giveaways!
                <Divider variant="fullWidth" className={classes.divider} />
            </Typography>
            <Space />
            <div className={classes.scrollGiveaways}>
                <div className={classes.scrolling_wrapper}>
                    {giveaways.map(giveaway => (
                        <div className={classes.card} key={giveaway.id}>
                            <Giveaway
                                name={giveaway.name}
                                desc={giveaway.desc}
                                link={giveaway.link}
                                imgSrc={giveaway.img_src}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </Paper>
    );
};

export default GiveawayScroll;
