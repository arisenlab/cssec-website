import React from "react";

import { useRouter } from "next/router";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import EventListTwo from "components/events/events-list-two";
import { cdn_url } from "utils/constants";
import NewsMiniCard from "components/news/news-mini-card";
import { Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    adSection: {
        backgroundImage: "url(adfiller.png)",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
    },
    marginSection: {
        [theme.breakpoints.down("md")]: {
            padding: 15,
        },
        margin: "5vh 0 5vh 0",
        width: "100%",
    },
}));

const NewsEvents = ({ posts, dayEvents, users }) => {
    const router = useRouter();
    const classes = useStyles();
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id);
    };

    return (
        <Grid
            container
            justify="center"
            spacing={3}
            className={classes.marginSection}
        >
            <Grid item xs={12} md={4}>
                <EventListTwo day_events={dayEvents} />
            </Grid>
            <Grid container direction="column" item xs={12} md={4} spacing={2}>
                <Grid item>
                    <Typography variant="h4">News</Typography>
                </Grid>

                {posts.length > 0 ? (
                    <>
                        {posts.map((news, i) => {
                            return (
                                <Grid
                                    key={news.id}
                                    item
                                    style={{
                                        backgroundColor:
                                            i % 2 === 0
                                                ? "rgb(242, 242, 242)"
                                                : "white",
                                        padding: 0,
                                    }}
                                >
                                    <NewsMiniCard
                                        post={news}
                                        author={getAuthor(news.author)}
                                    />
                                </Grid>
                            );
                        })}
                        {posts.length > 3 ? (
                            <Grid item align="center">
                                <Button
                                    variant="contained"
                                    color="secondary"
                                    onClick={() => router.push("/news")}
                                >
                                    See More
                                </Button>
                            </Grid>
                        ) : null}
                    </>
                ) : (
                    <>
                        <Grid item xs={12} md={12} align="center">
                            <img
                                src={`${cdn_url}/chammie-chan/sad-chammie-chan.png`}
                                width="25%"
                            />
                            <Typography variant="h4">No News Yet</Typography>
                        </Grid>
                    </>
                )}
            </Grid>
            <Grid item xs={12} md={3} align="center">
                <img src={`${cdn_url}/ads/pcbuilders-1.png`} width="100%" />
            </Grid>
        </Grid>
    );
};

export default NewsEvents;
