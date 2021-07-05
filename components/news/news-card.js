import React from "react";

import { useRouter } from "next/router";

import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import MaterialButton from "@material-ui/core/Button";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

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

const MainCard = withStyles(theme => ({
    root: {
        minWidth: 275,
    },
}))(Card);

const useStyles = makeStyles({
    pos: {
        marginBottom: 12,
    },
    media: {
        height: 180,
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
        <MainCard variant="outlined">
            <CardMedia
                className={classes.media}
                image={
                    post.jetpack_featured_media_url
                        ? post.jetpack_featured_media_url
                        : "img/default_post_image.jpg"
                }
                title={renderedTitle}
            />
            <CardContent>
                <Typography
                    variant="h4"
                    component="h2"
                    dangerouslySetInnerHTML={{ __html: renderedTitle }}
                />
                <Typography
                    className={classes.pos}
                    color="textSecondary"
                    variant="subtitle2"
                >
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
                    variant="body2"
                    component="p"
                    dangerouslySetInnerHTML={{
                        __html: renderedExcerpt.substring(0, 250) + "...",
                    }}
                />
            </CardContent>
            <CardActions
                style={{ display: "flex", flexDirection: "row-reverse" }}
            >
                <CardButton
                    variant="contained"
                    color="secondary"
                    disableElevation
                    onClick={() => router.push(`/news/${post.slug}`)}
                >
                    <Typography>Read More</Typography>
                </CardButton>
            </CardActions>
        </MainCard>
    );
};

export default NewsCard;
