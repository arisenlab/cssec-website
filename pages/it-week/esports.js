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
import esports from "../../data/esports";
import FacebookVideo from "../../components/it-week/FacebookVideo";
import Youtube from "../../components/it-week/Youtube";

import getYouTubeID from "get-youtube-id";

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
}));

const Esports = () => {
    const classes = useStyles();
    const router = useRouter();

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
                                                        padding: 5,
                                                        width: "100%",
                                                    }}
                                                >
                                                    <img
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
                        <img src={`${cdn_url}/ads/dimple-1.png`} width="100%" />
                    </Grid>
                </Grid>
                <Grid item xs={12} md={8} style={{ padding: 20 }}>
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
                    {/* <FacebookVideo /> */}
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={6} align="center">
                            <Typography variant="h3">
                                Comming Soon....
                            </Typography>
                        </Grid>
                        <Grid item xs={6} align="center">
                            <img
                                src={`${cdn_url}/chammie-chan/yay-chammie-chan.png`}
                                width="100%"
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Space />
        </div>
    );
};

export default Esports;
