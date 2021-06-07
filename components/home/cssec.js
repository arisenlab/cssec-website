import React from "react";

import { useRouter } from "next/router";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import { makeStyles } from "@material-ui/core/styles";

import { cdn_url } from "utils/constants";

const useStyles = makeStyles({
    cssecSection: {
        width: "100%",
        backgroundColor: "#e0e0e0",
        padding: 20,
    },
    cssecSectionContent: {
        width: "90%",
        margin: "auto",
    },
});

const CSSEC = () => {
    const classes = useStyles();
    const router = useRouter();
    return (
        <Grid container alignItems="center" className={classes.cssecSection}>
            <Grid
                container
                item
                alignItems="center"
                justify="center"
                spacing={2}
                className={classes.cssecSectionContent}
            >
                <Grid item md={6} align="center" align="left">
                    <Typography variant="h3" gutterBottom>
                        Join the Computer Studies Student Executive Council!
                    </Typography>
                    <Typography variant="body1" align="justify">
                        The Computer Studies Student Executive Council (CSSEC)
                        is an organization of student leaders coordinating with
                        the cluster's faculty and administrators to provide
                        means for student assistance in academic and
                        non-academic affairs. For over the years, CSSEC
                        continues to provide opportunities for student
                        experience in personal development. We also serve as a
                        bridge of information and relevant issues within the
                        whole body. We, CSSEC, humble ourselves as
                        representatives of the Computer Studies cluster and are
                        equipped with competence and passion capable to create
                        impact.
                    </Typography>
                    <div
                        style={{
                            textAlign: "center",
                            marginTop: 10,
                        }}
                    >
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            onClick={() => router.push("/help-desk")}
                        >
                            Help Desk
                        </Button>
                    </div>
                </Grid>
                <Grid item md={6} align="center">
                    <img
                        src={`${cdn_url}/chammie-chan/chammiesignrevised.png`}
                        width="65%"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CSSEC;
