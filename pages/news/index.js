import React from "react";

import Image from "next/image";
import dynamic from "next/dynamic";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Space from "../../components/general/space";
import SectionHeader from "../../components/general/section-header";

const NewsCard = dynamic(() => import("../../components/news/news-card"));
const NewsWideCard = dynamic(() =>
    import("../../components/news/news-wide-card")
);

import { cdn_url } from "../../utils/constants";
import WP from "../../utils/wordpress";

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

            <SectionHeader text="New Top 3 Posts" />

            <Grid container spacing={2} className={classes.upperRoot}>
                {upperNews.length > 0 ? (
                    upperNews.map(news => {
                        return (
                            <Grid item xs={12} md={4} key={news.id}>
                                <NewsCard
                                    post={news}
                                    author={getAuthor(news.author)}
                                />
                            </Grid>
                        );
                    })
                ) : (
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={6} align="center">
                            <Typography variant="h3">
                                Patiently Waiting...
                            </Typography>
                        </Grid>
                        <Grid item xs={6} align="center">
                            <Image
                                src={`${cdn_url}/chammie-chan/determined-chammie-chan.png`}
                                height={500}
                                width={300}
                            />
                        </Grid>
                    </Grid>
                )}
            </Grid>

            <Space />

            <SectionHeader text="Remaining Posts" />

            <Space />

            <Grid container spacing={1} className={classes.upperRoot}>
                {lowerNews.length > 0 ? (
                    lowerNews.map(news => {
                        return (
                            <Grid item xs={12} key={news.id}>
                                <NewsWideCard
                                    post={news}
                                    author={getAuthor(news.author)}
                                />
                            </Grid>
                        );
                    })
                ) : (
                    <Grid container justify="center" alignItems="center">
                        <Grid item xs={6} align="center">
                            <Image
                                src={`${cdn_url}/chammie-chan/tear-chammie-chan.png`}
                                height={600}
                                width={400}
                            />
                        </Grid>
                        <Grid item xs={6} align="center">
                            <Typography variant="h3">
                                I hope there will be more news to come...
                            </Typography>
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </>
    );
};

export async function getStaticProps() {
    try {
        let [posts, users] = await Promise.all([
            WP.posts().categories(2).perPage(100).order("desc").orderby("date"),
            WP.users(),
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
