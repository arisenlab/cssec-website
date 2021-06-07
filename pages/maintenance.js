import React from "react";

import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Link from "next/link";

import { cdn_url } from "utils/constants";

const useStyles = makeStyles(theme => ({
    root: {
        backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(cssec-logo-orig.png)`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "60vh 60vh",
        height: "65vh",
    },
    chamWarning: {
        backgroundImage: "url(under_maintenance.png)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
        width: "40vh",
        height: "40vh",
    },
    textColor: {
        color: "#531444",
        textShadow: "1px 1px 1px #000000",
    },
    spaceMan: {
        margin: "10px",
    },
}));

const Maintenance = () => {
    const classes = useStyles();

    return (
        <div>
            <Grid
                container
                direction="column"
                justify="center"
                alignItems="center"
            >
                {/* <div className={classes.chamWarning}></div> */}
                <Image
                    src={`${cdn_url}/chammie-chan/under_maintenance.png`}
                    height={500}
                    width={500}
                />
                <Typography className={classes.textColor} variant="h2">
                    This page is under construction
                </Typography>
                <Typography
                    className={classes.textColor}
                    variant="h6"
                    gutterBottom
                >
                    Please bear with us as we continue to improve this website.
                </Typography>
                <Link href="/">
                    <Button variant="contained" color="primary">
                        BACK TO HOME
                    </Button>
                </Link>
            </Grid>
        </div>
    );
};

export default Maintenance;
