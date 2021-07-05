import React from "react";

import { useRouter } from "next/router";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import MaterialButton from "@material-ui/core/Button";

import { makeStyles, withStyles } from "@material-ui/core/styles";

import { cdn_url } from "utils/constants";

const CSSECButton = withStyles(theme => ({
    root: {
        backgroundColor: "#fff",
        color: "#000",
        "&:hover": {
            backgroundColor: "#F8F8F8",
        },
    },
}))(MaterialButton);

const useStyles = makeStyles({
    cssecSection: {
        width: "100%",
        backgroundColor: "#F1F1F1",
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
                        Computer Studies Student Executive Council
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
                        <CSSECButton
                            variant="contained"
                            size="large"
                            onClick={() => router.push("/help-desk")}
                        >
                            Help Desk
                        </CSSECButton>
                    </div>
                </Grid>
                <Grid item md={6} align="center">
                    <img
                        src={`${cdn_url}/chammie-chan/pilot-mecha-chammie-chan.png`}
                        width="65%"
                    />
                </Grid>
            </Grid>
        </Grid>
    );
};

export default CSSEC;
