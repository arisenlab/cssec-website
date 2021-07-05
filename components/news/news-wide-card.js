import React from "react";

import { useRouter } from "next/router";

import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MaterialButton from "@material-ui/core/Button";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { format } from "date-fns";

const CardButton = withStyles(theme => ({
    root: {
        backgroundColor: theme.palette.primary.main,
        color: "#fff",
        borderRadius: 20,
        "&:hover": {
            backgroundColor: "#56244A",
        },
    },
}))(MaterialButton);

const NewsWideCard = ({ post, author }) => {
    const router = useRouter();
    const [renderedExcerpt, setRenderedExcerpt] = React.useState("");
    const [renderedTitle, setRenderedTitle] = React.useState("");

    React.useEffect(() => {
        if ("rendered" in post.excerpt) {
            setRenderedExcerpt(post.excerpt.rendered);
        }
    }, [post.excerpt]);

    React.useEffect(() => {
        if ("rendered" in post.title) {
            setRenderedTitle(post.title.rendered);
        }
    }, [post.title]);

    return (
        <Paper>
            <Grid
                container
                justify="space-around"
                alignItems="center"
                style={{ padding: 10 }}
            >
                <Grid item xs={12} md={4}>
                    <img
                        src={
                            post.jetpack_featured_media_url !== ""
                                ? post.jetpack_featured_media_url
                                : "img/default_post_image.jpg"
                        }
                        width="100%"
                        style={{ borderRadius: 5 }}
                    />
                </Grid>
                <Grid item xs={12} md={8} style={{ padding: 10 }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        style={{ color: "#5D2252" }}
                        dangerouslySetInnerHTML={{ __html: renderedTitle }}
                    />
                    <Typography color="textSecondary">
                        {author
                            ? `${author.name} on ${format(
                                  new Date(post.date),
                                  "MMM dd yyyy p"
                              )}`
                            : `Unknown on ${format(
                                  new Date(post.date),
                                  "MMM dd yyyy p"
                              )}`}
                    </Typography>
                    <Typography
                        variant="body1"
                        component="p"
                        dangerouslySetInnerHTML={{
                            __html: renderedExcerpt.substring(0, 250) + "...",
                        }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                        }}
                    >
                        <CardButton
                            variant="contained"
                            color="primary"
                            onClick={() => router.push(`/news/${post.slug}`)}
                        >
                            <Typography>Read More</Typography>
                        </CardButton>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NewsWideCard;
