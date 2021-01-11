import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";

import { media_url } from "../../utils/constants";

const useStyles = makeStyles(theme => ({
    root: {
        width: "85%",
        margin: "auto",
    },
}));

const About = () => {
    const classes = useStyles();

    return (
        <Grid
            container
            spacing={1}
            alignItems="center"
            className={classes.root}
        >
            <Grid item md={7}>
                <Typography variant="h4">
                    Ateneo Circle of Computer Studies Students
                </Typography>
                <Typography variant="body1">
                    ACCSS is an academic club of the Computer Studies Cluster
                    that caters to the interests and IT-related skills of the
                    students. It aims to teach Computer Studies students on the
                    value and importance of having digital literacy, technical
                    skills, and the importance of IT to be an effective member
                    of society, even outside the university. ACCSS continuously
                    strives to reach this vision through workshops and other
                    engaging activities.
                </Typography>
            </Grid>
            <Hidden smDown>
                <Grid item md={5} align="center">
                    <img
                        src={`${media_url}/2021/01/logo_accss.png`}
                        width="60%"
                    />
                </Grid>
            </Hidden>
        </Grid>
    );
};

export default About;
