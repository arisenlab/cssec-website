import React from "react";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import NewsCard from "../news/news-card";

const useStyles = makeStyles(theme => ({
    root: {
        width: "85%",
        margin: "auto",
    },
}));

const NewsAndEvents = ({ posts, users, media }) => {
    const classes = useStyles();

    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };

    return (
        <Grid container spacing={2} className={classes.root}>
            {posts.map(post => {
                return (
                    <Grid item xs={12} md={4} key={post.id}>
                        <NewsCard post={post} author={getAuthor(post.author)} />
                    </Grid>
                );
            })}
        </Grid>
    );
};

export default NewsAndEvents;
