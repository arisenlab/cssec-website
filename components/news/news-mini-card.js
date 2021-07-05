import { CardActionArea, Grid, Typography } from "@material-ui/core";

import React from "react";
import { useRouter } from "next/router";

import { format } from "date-fns";

const NewsMiniCard = ({ post, author }) => {
    const router = useRouter();
    const [renderedTitle, setRenderedTitle] = React.useState("");
    const [renderedExcerpt, setRenderedExcerpt] = React.useState("");

    React.useEffect(() => {
        if ("rendered" in post.title) {
            setRenderedTitle(post.title.rendered);
        }
    }, [post.title]);

    React.useEffect(() => {
        if ("rendered" in post.excerpt) {
            setRenderedExcerpt(post.excerpt.rendered);
        }
    }, [post.excerpt]);

    return (
        <CardActionArea onClick={() => router.push(`/news/${post.slug}`)}>
            <Grid container direction="column" style={{ padding: 10 }}>
                <Grid item>
                    <Typography variant="h5">
                        <b>{renderedTitle}</b>
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography
                        dangerouslySetInnerHTML={{
                            __html: renderedExcerpt.substring(0, 100) + "...",
                        }}
                    />
                </Grid>
                <Grid item>
                    <Typography variant="subtitle2">
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
                </Grid>
            </Grid>
        </CardActionArea>
    );
};

export default NewsMiniCard;
