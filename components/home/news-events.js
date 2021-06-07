import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NewsCard from "../news/news-card";
import EventListTwo from "../events/events-list-two";
import Space from "../general/space";
import { makeStyles } from "@material-ui/core/styles";
import { cdn_url } from "../../utils/constants";

const useStyles = makeStyles({
    adSection:{
        backgroundImage:"url(adfiller.png)",
        backgroundRepeat: "no-repeat",
        width:"100%",
        height:"100%",
    },
    marginSection:{
        marginTop:"5vh",
        marginBottom:"5vh"
    }
});

const NewsEvents = ({ posts, dayEvents, users }) => {
    const classes = useStyles();
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };

    return (
        <Grid container justify="space-evenly" className={classes.marginSection}>
            <Space height={70} />
            <Grid item xs={12} md={3}>
                <EventListTwo day_events={dayEvents} />
            </Grid>
            <Grid container item xs={12} md={3}>
                <Typography variant="h3">News</Typography>
                <Space height={70} />
                <Grid container item spacing={2}>
                    {posts.length > 0 ? (
                        <div
                            style={{
                                display: "flex",
                                flexWrap: "nowrap",
                                overflowX: "auto",
                            }}
                        >
                            {posts.map(news => {
                                return (
                                    <div
                                        key={news.id}
                                        style={{
                                            flex: "0 0 auto",
                                            width: "300px",
                                            marginLeft: 20,
                                            WebkitOverflowScrolling: "touch",
                                        }}
                                    >
                                        <NewsCard
                                            post={news}
                                            author={getAuthor(news.author)}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    ) : (
                        <>
                            <Grid item xs={12} md={12} align="center">
                                <img
                                    src={`${cdn_url}/chammie-chan/sad-chammie-chan.png`}
                                    width="25%"
                                />
                                <Typography variant="h4">
                                    No News Yet
                                </Typography>
                            </Grid>
                        </>
                    )}
                </Grid>
            </Grid>
            <Grid item xs={12} md={3}>
                <div className={classes.adSection}></div>
            </Grid>
        </Grid>
    );
};

export default NewsEvents;
