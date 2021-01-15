import React from "react";

import { useRouter } from "next/router";
import Head from "next/head";
import DefaultErrorPage from "next/error";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import CircularProgress from "@material-ui/core/CircularProgress";

import Space from "../../components/general/space";

import { frontend_url } from "../../utils/constants";

import WP from "../../utils/wordpress";
import WPGBlocks from "react-gutenberg";

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        margin: "auto",
    },
    crop: {
        width: "100%",
        overflow: "hidden",
    },
    cropImg: {
        width: "100%",
        height: "400px",
    },
    centeredAndCropped: {
        objectFit: "cover",
        width: "100%",
        height: "300px",
    },
}));

const Slug = ({ post, author, recent }) => {
    const classes = useStyles();
    const router = useRouter();

    if (router.isFallback) {
        return (
            <div className={classes.root}>
                <Grid container direction="row" justify="center">
                    <CircularProgress
                        style={{ marginTop: 100, marginBottom: 100 }}
                    />
                </Grid>
            </div>
        );
    }

    if (!post) {
        return (
            <>
                <Head>
                    <meta name="robots" content="noindex" />
                </Head>
                <DefaultErrorPage statusCode={404} />
            </>
        );
    }

    return (
        <div className={classes.root}>
            <Head>
                <title>{post.title.rendered} - CSSEC Posts</title>
                <meta
                    name="description"
                    content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                />
                <meta name="twitter:card" value="summary" />
                <meta property="og:title" content={post.title.rendered} />
                <meta property="og:type" content="article" />
                {post.jetpack_featured_media_url ? (
                    <>
                        <meta
                            property="og:image"
                            content={post.jetpack_featured_media_url}
                        />
                        <meta
                            name="twitter:image"
                            content={post.jetpack_featured_media_url}
                        />
                    </>
                ) : (
                    <></>
                )}
                <meta
                    property="og:url"
                    content={`${frontend_url}/news/${post.slug}`}
                />
                <meta
                    property="og:description"
                    content={post.excerpt.rendered.replace(/<[^>]+>/g, "")}
                />
            </Head>
            <Space />
            <Grid container spacing={2}>
                <Grid item md={8}>
                    <Grid container>
                        <Grid item xs={12}>
                            {post.jetpack_featured_media_url ? (
                                <img
                                    src={post.jetpack_featured_media_url}
                                    className={classes.centeredAndCropped}
                                />
                            ) : null}
                        </Grid>
                        <Grid item xs={12}>
                            <Typography
                                variant="h3"
                                component="h4"
                                style={{ marginBottom: 20 }}
                            >
                                {post.title.rendered}
                            </Typography>

                            <Typography variant="subtitle2">
                                by{" "}
                                {`${author.name} on ${new Date(
                                    post.date
                                ).toDateString()}`}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography variant="body1" component="div">
                                <WPGBlocks blocks={post.blocks} />
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item md={4} style={{ minWidth: "300px" }}>
                    <Paper variant="outlined" style={{ padding: 20 }}>
                        <Typography variant="h6" component="h4">
                            Recent News
                        </Typography>
                        <List style={{ width: "100%" }}>
                            {recent.map(rec => (
                                <ListItem
                                    key={rec.id}
                                    button
                                    onClick={() =>
                                        router.push(`/news/${rec.slug}`)
                                    }
                                >
                                    <ListItemText
                                        primary={rec.title.rendered}
                                        secondary={new Date(
                                            rec.date
                                        ).toDateString()}
                                    />
                                </ListItem>
                            ))}
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            <Space />
        </div>
    );
};

export const getStaticPaths = async () => {
    let posts = [];
    try {
        posts = await WP.posts();
    } catch (err) {
        console.log(err);
    }

    let paths = [];

    for (let post of posts) {
        paths.push({
            params: { slug: post.slug },
        });
    }

    return { paths, fallback: true };
};

export const getStaticProps = async ctx => {
    let posts = [];

    try {
        posts = await WP.posts().slug(ctx.params.slug);
    } catch (err) {
        console.log(err);
    }

    if (posts.length > 0) {
        const [author, recent] = await Promise.all([
            WP.users().id(posts[0].author),
            WP.posts()
                .exclude(posts[0].id)
                .perPage(5)
                .page(1)
                .categories(posts[0].categories),
        ]);
        return { props: { post: posts[0], author, recent }, revalidate: 10 };
    }

    return { props: { post: null, author: null, recent: [] } };
};

export default Slug;
