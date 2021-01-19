import React from "react";

import dynamic from "next/dynamic";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Space from "../../components/general/space";

const GiveawayScroll = dynamic(() =>
    import("../../components/it-week/giveaway_scroll")
);

import giveaways from "../../data/giveaways";

import { cdn_url } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
    root: {
        width: "95%",
        margin: "auto",
    },
    arrowIcon: {
        display: "flex",
        alignItems: "center",
    },
    paper: {
        padding: 10,
    },
    sponsorsContent: {
        width: "95%",
        margin: "auto",
    },
    giveawaysContent: {
        padding: 10,
        [theme.breakpoints.down("md")]: {
            wrap: "wrap",
        },
    },
}));

const Giveaways = () => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <div className={classes.root}>
            <Space />
            <ButtonBase
                disableRipple
                className={classes.arrowIcon}
                onClick={() => router.push("/it-week")}
            >
                <ArrowBackIcon /> <Typography variant="h6">Back</Typography>
            </ButtonBase>
            <Space height={10} />
            <Grid container spacing={2}>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h4" color="primary">
                            Information Technology Week - Giveaways
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <GiveawayScroll giveaways={giveaways} />
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5" color="primary">
                            Special Thanks to these Sponsors!
                            <Divider
                                variant="fullWidth"
                                style={{
                                    height: 5,
                                    backgroundColor: "#622a55",
                                }}
                            />
                        </Typography>
                        <Space height={10} />
                        <div className={classes.sponsorsContent}>
                            <Grid
                                container
                                spacing={3}
                                justify="center"
                                alignItems="center"
                            >
                                <Grid item>
                                    <img
                                        src={`${cdn_url}/ads/pcbuilders-2.png`}
                                        width="100%"
                                    />
                                </Grid>
                                <Grid item>
                                    <img
                                        src={`${cdn_url}/ads/dimple-3.png`}
                                        width="100%"
                                    />
                                </Grid>
                                <Grid item>
                                    <img
                                        src={`${cdn_url}/ads/batucs-3.png`}
                                        width="100%"
                                    />
                                </Grid>
                            </Grid>
                        </div>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Giveaways;
