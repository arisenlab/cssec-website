import React from "react";

import { useRouter } from "next/router";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { format } from "date-fns";

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
            <Grid container alignItems="center" style={{ padding: 10 }}>
                <Grid item xs={12} md={4}>
                    <img
                        src={
                            post.jetpack_featured_media_url !== ""
                                ? post.jetpack_featured_media_url
                                : "/logos/temp.jpg"
                        }
                        width="100%"
                    />
                </Grid>
                <Grid item xs={12} md={8} style={{ padding: 10 }}>
                    <Typography
                        variant="h4"
                        component="h2"
                        dangerouslySetInnerHTML={{ __html: renderedTitle }}
                    />
                    <Typography color="textSecondary">
                        {author
                            ? `${author} on ${format(
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
                        dangerouslySetInnerHTML={{ __html: renderedExcerpt }}
                    />
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "row-reverse",
                        }}
                    >
                        <ButtonBase
                            onClick={() => router.push(`/news/${post.slug}`)}
                        >
                            <Paper
                                style={{
                                    backgroundColor: "#622A55",
                                    color: "#fff",
                                    padding: 10,
                                }}
                            >
                                <Typography>Read More</Typography>
                            </Paper>
                        </ButtonBase>
                    </div>
                </Grid>
            </Grid>
        </Paper>
    );
};

export default NewsWideCard;
