import React from "react";

import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";

import NewsCard from "../news/news-card";
import EventListTwo from "../events/events-list-two";
import Space from "../general/space";

import { cdn_url } from "../../utils/constants";

const NewsEvents = ({ posts, dayEvents, users }) => {
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };

    return (
        <Grid container spacing={3} style={{ width: "95%", margin: "auto" }}>
            <Grid container item xs={12} md={8}>
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
            <Grid item xs={12} md={4}>
                <EventListTwo day_events={dayEvents} />
            </Grid>
        </Grid>
    );
};

export default NewsEvents;
