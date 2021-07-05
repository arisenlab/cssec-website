import React from "react";

import dynamic from "next/dynamic";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Space from "components/general/space";
import SectionHeader from "components/general/section-header";

const NewsCard = dynamic(() => import("components/news/news-card"));
const NewsWideCard = dynamic(() => import("components/news/news-wide-card"));

import { cdn_url } from "utils/constants";
import WP from "utils/wordpress";
import Layout from "components/general/layout";

const useStyles = makeStyles({
    progressContent: {
        height: "80vh",
        width: "100%",
    },
});

const News = ({ upperNews, lowerNews, users }) => {
    const classes = useStyles();

    const getAuthor = author_id => {
        return users.find(user => user.id === author_id);
    };

    return (
        <>
            {upperNews.length > 0 ? (
                <>
                    <Space />
                    <Layout width="85%">
                        <SectionHeader text="New Top 3 Posts" />

                        <Grid container spacing={2}>
                            {upperNews.map(news => {
                                return (
                                    <Grid item xs={12} key={news.id}>
                                        <Grid item xs={12} md={4} key={news.id}>
                                            <NewsCard
                                                post={news}
                                                author={getAuthor(news.author)}
                                            />
                                        </Grid>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Layout>
                </>
            ) : (
                <Grid
                    container
                    justify="center"
                    alignItems="center"
                    className={classes.progressContent}
                >
                    <Grid item xs={12} align="center">
                        <img
                            src={`${cdn_url}/chammie-chan/determined-chammie-chan.png`}
                            width="25%"
                        />
                        <Typography variant="h3">
                            Currently in Progress....
                        </Typography>
                    </Grid>
                </Grid>
            )}

            {upperNews.length > 3 ? (
                <>
                    <Space />
                    <SectionHeader text="Remaining Posts" />
                    <Space />
                </>
            ) : null}

            {lowerNews.length > 0 ? (
                <Layout width="85%">
                    <Grid container spacing={1}>
                        {lowerNews.map(news => {
                            return (
                                <Grid item xs={12} key={news.id}>
                                    <NewsWideCard
                                        post={news}
                                        author={getAuthor(news.author)}
                                    />
                                </Grid>
                            );
                        })}
                    </Grid>
                </Layout>
            ) : null}
            <Space />
        </>
    );
};

export async function getStaticProps() {
    try {
        let [posts, users] = await Promise.all([
            WP.posts().categories(2).perPage(100).order("desc").orderby("date"),
            WP.users().perPage(100),
        ]);

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
