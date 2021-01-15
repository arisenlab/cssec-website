import React from "react";

import { useRouter } from "next/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { format } from "date-fns";

const useStyles = makeStyles({
    root: {
        minWidth: 275,
    },
    bullet: {
        display: "inline-block",
        margin: "0 2px",
        transform: "scale(0.8)",
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 180,
    },
    cardActionsStyle: {
        display: "flex",
        flexDirection: "row-reverse",
    },
});

const NewsCard = ({ post, author }) => {
    const classes = useStyles();
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
        <Card className={classes.root} variant="outlined">
            {post.jetpack_featured_media_url !== "" ? (
                <CardMedia
                    className={classes.media}
                    image={post.jetpack_featured_media_url}
                    title={renderedTitle}
                />
            ) : null}
            <CardContent>
                <Typography
                    variant="h4"
                    component="h2"
                    dangerouslySetInnerHTML={{ __html: renderedTitle }}
                />
                <Typography className={classes.pos} color="textSecondary">
                    {`${author} on ${format(
                        new Date(post.date),
                        "MMM dd yyyy p"
                    )}`}
                </Typography>
                <Typography
                    variant="body1"
                    component="p"
                    dangerouslySetInnerHTML={{ __html: renderedExcerpt }}
                />
            </CardContent>
            <CardActions
                style={{ display: "flex", flexDirection: "row-reverse" }}
            >
                <Button
                    variant="outlined"
                    color="primary"
                    disableElevation
                    onClick={() => router.push(`/news/${post.slug}`)}
                >
                    Read More
                </Button>
            </CardActions>
        </Card>
    );
};

export default NewsCard;
