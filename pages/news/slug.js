import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import Space from "../../components/general/space";

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        margin: "auto",
    },
}));

const Slug = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Space />
            <div className={classes.root}>
                <Grid container spacing={2}>
                    <Grid item md={8}>
                        <Typography
                            variant="h3"
                            component="h4"
                            style={{ marginBottom: 20 }}
                        >
                            {"TITLE"}
                        </Typography>

                        <Typography variant="subtitle2">
                            by {"AUTHOR ON DATE"}
                        </Typography>

                        <Typography variant="body1" component="div">
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in venenatis sapien.
                                Morbi auctor ante at nibh congue lacinia. Fusce
                                at molestie risus, et elementum purus. In orci
                                enim, vehicula a massa sed, molestie fringilla
                                odio. Vivamus blandit ultrices aliquet. In sit
                                amet orci condimentum, hendrerit nunc non,
                                pharetra diam. Nullam eleifend ipsum facilisis,
                                pharetra quam molestie, molestie nibh. Donec et
                                leo lacinia, ultricies neque sed, luctus sem.
                                Aliquam laoreet lacus in leo congue, vel viverra
                                turpis sagittis.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in venenatis sapien.
                                Morbi auctor ante at nibh congue lacinia. Fusce
                                at molestie risus, et elementum purus. In orci
                                enim, vehicula a massa sed, molestie fringilla
                                odio. Vivamus blandit ultrices aliquet. In sit
                                amet orci condimentum, hendrerit nunc non,
                                pharetra diam. Nullam eleifend ipsum facilisis,
                                pharetra quam molestie, molestie nibh. Donec et
                                leo lacinia, ultricies neque sed, luctus sem.
                                Aliquam laoreet lacus in leo congue, vel viverra
                                turpis sagittis.
                            </Typography>
                            <Typography variant="body1" gutterBottom>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit. Maecenas in venenatis sapien.
                                Morbi auctor ante at nibh congue lacinia. Fusce
                                at molestie risus, et elementum purus. In orci
                                enim, vehicula a massa sed, molestie fringilla
                                odio. Vivamus blandit ultrices aliquet. In sit
                                amet orci condimentum, hendrerit nunc non,
                                pharetra diam. Nullam eleifend ipsum facilisis,
                                pharetra quam molestie, molestie nibh. Donec et
                                leo lacinia, ultricies neque sed, luctus sem.
                                Aliquam laoreet lacus in leo congue, vel viverra
                                turpis sagittis.
                            </Typography>
                        </Typography>
                    </Grid>
                    <Grid item md={4} style={{ minWidth: "300px" }}>
                        <Paper variant="outlined" style={{ padding: 20 }}>
                            <Typography variant="h6" component="h4">
                                Recent News
                            </Typography>
                            <List style={{ width: "100%" }}>
                                <ListItem>
                                    <ListItemText
                                        primary={"TITLE"}
                                        secondary={"DATE/AUTHOR"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"TITLE"}
                                        secondary={"DATE/AUTHOR"}
                                    />
                                </ListItem>
                                <ListItem>
                                    <ListItemText
                                        primary={"TITLE"}
                                        secondary={"DATE/AUTHOR"}
                                    />
                                </ListItem>
                            </List>
                        </Paper>
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Slug;
