import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Fab from "@material-ui/core/Fab";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import { makeStyles } from "@material-ui/core/styles";

import Space from "./space";

const useStyles = makeStyles(theme => ({
    scContainer: {
        marginTop: theme.spacing(1),
        display: "flex",
        alignContent: "center",
    },
    socialIcon: {
        backgroundColor: "#BA83B1",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#a874a0",
        },
    },
    partnersIcons: {
        display: "flex",
        alignContent: "center",
    },
    footer: {
        backgroundColor: "#3A1534",
        color: "#ffffff",
        paddingLeft: "10px",
    },
}));

const Footer = () => {
    const classes = useStyles();
    return (
        <>
            <Space />
            <Grid
                container
                spacing={1}
                alignItems="center"
                className={classes.footer}
            >
                <Grid item md={4}>
                    <dl>
                        <dt>
                            <Typography variant="body1">
                                <b>Contact Us</b>
                            </Typography>
                        </dt>
                        <dd>
                            <Typography variant="subtitle1">
                                cssec@addu.edu.ph
                            </Typography>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            <Typography variant="body1">
                                <b>Developed by:</b>
                            </Typography>
                        </dt>
                        <dd>
                            <Typography variant="subtitle1">
                                Computer Studies Student Executive Council Term
                                2020 - 2021
                            </Typography>

                            <Typography variant="subtitle1">
                                Ateneo de Davao Research in Information Systems
                                and Software Engineering Lab
                            </Typography>
                        </dd>
                    </dl>
                </Grid>

                <Grid item md={3}>
                    <dl>
                        <dt>
                            <Typography variant="body1">
                                <b>Follow Us</b>
                            </Typography>
                        </dt>
                        <dd>
                            <Typography variant="subtitle1">
                                Follow our Social Media accounts and we will
                                keep you updated
                            </Typography>
                            <div className={classes.scContainer}>
                                <Fab
                                    size="medium"
                                    color="secondary"
                                    aria-label="add"
                                    className={classes.socialIcon}
                                    onClick={() =>
                                        window.open(
                                            "https://www.facebook.com/addu.cs"
                                        )
                                    }
                                >
                                    <FacebookIcon />
                                </Fab>
                                <Fab
                                    size="medium"
                                    color="secondary"
                                    aria-label="add"
                                    className={classes.socialIcon}
                                    onClick={() =>
                                        window.open(
                                            "https://twitter.com/ADDU_CS"
                                        )
                                    }
                                    style={{ marginLeft: "10px" }}
                                >
                                    <TwitterIcon />
                                </Fab>
                                <Fab
                                    size="medium"
                                    color="secondary"
                                    aria-label="add"
                                    className={classes.socialIcon}
                                    onClick={() =>
                                        window.open(
                                            "https://www.instagram.com/addu_cs/"
                                        )
                                    }
                                    style={{ marginLeft: "10px" }}
                                >
                                    <InstagramIcon />
                                </Fab>
                            </div>
                        </dd>
                    </dl>
                </Grid>

                <Grid item md={4} align="center">
                    <div className={classes.partnersIcons}>
                        <img
                            src="./logos/addu_white_logo.png"
                            width="60px"
                            height="60px"
                        />
                    </div>
                </Grid>
            </Grid>
        </>
    );
};

export default Footer;
