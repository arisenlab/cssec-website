import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";

import NewsCard from "../../components/news/news-card";
import NewsWideCard from "../../components/news/news-wide-card";
import Space from "../../components/general/space";
import SectionHeader from "../../components/news/section-header";

import WP from "../../utils/wordpress";

import sort from "fast-sort";

const useStyles = makeStyles({
    upperRoot: {
        width: "85%",
        margin: "auto",
    },
    seeMore: {
        width: "85%",
        margin: "auto",
        display: "flex",
        justifyContent: "center",
    },
});

const News = ({ upperNews, lowerNews, users }) => {
    const classes = useStyles();

    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };

    return (
        <>
            <Space />

            <SectionHeader />

            <Grid container spacing={2} className={classes.upperRoot}>
                {upperNews.map(news => {
                    return (
                        <Grid item xs={12} md={4}>
                            <NewsCard
                                post={news}
                                author={getAuthor(news.author)}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <div className={classes.seeMore}>
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    size="medium"
                >
                    See More
                </Button>
            </div>

            <Space />

            <SectionHeader />

            <Space />

            <Grid container spacing={1} className={classes.upperRoot}>
                {lowerNews.map(news => {
                    return (
                        <Grid item xs={12}>
                            <NewsWideCard
                                post={news}
                                author={getAuthor(news.author)}
                            />
                        </Grid>
                    );
                })}
            </Grid>

            <div className={classes.seeMore}>
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    size="medium"
                >
                    See More
                </Button>
            </div>
        </>
    );
};

export async function getStaticProps() {
    try {
        let [posts, users] = await Promise.all([
            WP.posts().categories(2).perPage(100).order("desc").orderby("date"),
            WP.users(),
        ]);

        //sort(posts).desc(post => post.date);

        let upperNews = posts.slice(0, 3);
        let lowerNews = posts.slice(3, posts.length);

        return {
            props: { upperNews: upperNews, lowerNews: lowerNews, users: users },
            revalidate: 10,
        };
    } catch (err) {
        console.log(err);
        return {
            props: { upperNews: [], lowerNews: [], users: [] },
            revalidate: 10,
        };
    }
}

export default News;
