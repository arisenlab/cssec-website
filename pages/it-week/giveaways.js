import React from "react";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Space from "../../components/general/space";
import Giveaway from "../../components/it-week/giveaway";

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
                        <Typography variant="h4">
                            Information Technology Week - Giveaways
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">
                            Join IT Week 2021 Giveaways!
                            <Divider
                                variant="fullWidth"
                                style={{
                                    height: 5,
                                    backgroundColor: "#622a55",
                                }}
                            />
                        </Typography>
                        <Grid container spacing={3} style={{ padding: 10 }}>
                            <Grid item md={3}>
                                <Giveaway />
                            </Grid>
                            <Grid item md={3}>
                                <Giveaway />
                            </Grid>
                            <Grid item md={3}>
                                <Giveaway />
                            </Grid>
                            <Grid item md={3}>
                                <Giveaway />
                            </Grid>
                        </Grid>
                    </Paper>
                </Grid>
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">
                            Sponsors List
                            <Divider
                                variant="fullWidth"
                                style={{
                                    height: 5,
                                    backgroundColor: "#622a55",
                                }}
                            />
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Giveaways;
