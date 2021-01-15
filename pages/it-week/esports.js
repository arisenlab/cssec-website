import React from "react";

import Image from "next/image";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import ButtonBase from "@material-ui/core/ButtonBase";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import ArrowBackIcon from "@material-ui/icons/ArrowBack";

import Space from "../../components/general/space";
import EsportsLiveVideo from "../../components/it-week/esports-live-video";
import esports from "../../data/esports";
import Youtube from "../../components/it-week/Youtube";

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

const Esports = () => {
    const classes = useStyles();
    const router = useRouter();

    const opts = {
        height: "390",
        width: "640",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const [videoName, setVideoName] = React.useState("Dota 2");
    const [videoLink, setVideoLink] = React.useState(esports[0].stream_link);

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
                <Grid item container md={4} direction="column" spacing={2}>
                    <Grid item>
                        <Paper className={classes.paper}>
                            <Typography variant="h5" gutterBottom>
                                Watch the Final Matches here!
                                <Divider
                                    variant="fullWidth"
                                    style={{
                                        height: 5,
                                        backgroundColor: "#622a55",
                                    }}
                                />
                            </Typography>
                            <Grid container spacing={2}>
                                {esports.map(
                                    ({
                                        id,
                                        name,
                                        logo,
                                        logoDimensions,
                                        stream_link,
                                    }) => (
                                        <Grid item xs={6} key={id}>
                                            <ButtonBase
                                                style={{ width: "100%" }}
                                                onClick={() => {
                                                    setVideoName(name);
                                                    setVideoLink(stream_link);
                                                }}
                                            >
                                                <Paper
                                                    style={{
                                                        display: "flex",
                                                        padding: 10,
                                                        width: "100%",
                                                    }}
                                                >
                                                    <Image
                                                        src={logo}
                                                        width={
                                                            logoDimensions[0]
                                                        }
                                                        height={
                                                            logoDimensions[1]
                                                        }
                                                    />
                                                    <Typography
                                                        variant="body1"
                                                        style={{
                                                            fontWeight: 700,
                                                            marginLeft: 5,
                                                        }}
                                                    >
                                                        {name}
                                                    </Typography>
                                                </Paper>
                                            </ButtonBase>
                                        </Grid>
                                    )
                                )}
                            </Grid>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography variant="h2">
                                INTO GAMING ATAY
                            </Typography>
                        </Paper>
                    </Grid>
                    <Grid item>
                        <Paper>
                            <Typography variant="h2">
                                IT WEEK LEADER BOARDS
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography variant="h5" gutterBottom>
                        {videoName}
                        <Divider
                            variant="fullWidth"
                            style={{
                                height: 5,
                                backgroundColor: "#622a55",
                            }}
                        />
                    </Typography>
                    <Paper style={{ padding: 10, margin: "auto" }}>
                        <Youtube videoId={videoLink} />
                    </Paper>
                </Grid>
            </Grid>
        </div>
    );
};

export default Esports;
