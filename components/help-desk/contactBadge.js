import React from "react";
import Image from "next/image";
import { Paper, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
    root: {
        padding: 5,
    },
    info: {
        width: "100%",
    },
    paper: {
        marginBottom: 5,
    },
}));

const ContactBadge = ({ logo, name, details }) => {
    const classes = useStyles();
    return (
        <Paper className={classes.paper} elevation={3}>
            <Grid container alignItems="center" className={classes.root}>
                <Grid item xs={3} align="center">
                    <Image
                        src={logo}
                        alt={`${name} - image`}
                        width={75}
                        height={75}
                    />
                </Grid>
                <Grid item xs={9}>
                    <Typography>
                        <b>{name}</b>
                    </Typography>
                    <div className={classes.info}>
                        <Typography
                            variant="caption"
                            dangerouslySetInnerHTML={{ __html: details }}
                        />
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default ContactBadge;
