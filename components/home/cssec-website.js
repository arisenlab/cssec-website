import React from "react";

import { useRouter } from "next/router";

import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

import { makeStyles } from "@material-ui/core/styles";

import { cdn_url } from "../../utils/constants";

const useStyles = makeStyles({
    cssecSectionContent: {
        width: "90%",
        margin: "auto",
    },
    cssecWebsiteSection: {
        width: "100%",
        backgroundColor: "rgba(186, 131, 180, 0.29)",
        padding: 20,
    },
});

const CSSECWebsite = () => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <Grid
            container
            alignItems="center"
            className={classes.cssecWebsiteSection}
        >
            <Grid
                container
                item
                alignItems="center"
                justify="center"
                spacing={2}
                className={classes.cssecSectionContent}
            >
                <Grid item md={6} align="center">
                    <img
                        src={`${cdn_url}/it-week-2021/chammie-uni.png`}
                        width="65%"
                    />
                </Grid>
                <Grid item md={6}>
                    <Typography variant="h3" gutterBottom align="left">
                        About CSSEC Website
                    </Typography>
                    <Typography variant="body1" align="justify">
                        The CSSEC Website creates within a portal of information
                        available to the Computer Studies Cluster, made possible
                        by the cluster's own great student developers and
                        designers. Relevant events, news and updates are
                        accessible in the website as well as details of the
                        Computer Studies Student Executive Council core officers
                        and committees. This also ensures a convenient
                        experience for the users and serve its main purpose of
                        delivering service to the whole CS community.
                    </Typography>
                    <div
                        style={{
                            display: "inline-flex",
                            flexWrap: "wrap",
                            marginTop: 10,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router.push("/it-week")}
                        >
                            Know More
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router.push("/it-week/events")}
                            style={{ marginLeft: 10 }}
                        >
                            Events
                        </Button>
                        <Button
                            variant="contained"
                            color="primary"
                            onClick={() => router.push("/it-week/giveaways")}
                            style={{ marginLeft: 10 }}
                        >
                            Giveaways
                        </Button>
                    </div>
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CSSECWebsite;
