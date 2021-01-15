import React from "react";
import Paper from "@material-ui/core/Paper";
import Card from "@material-ui/core/Card";
import { CardMedia } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/news/news-card";
import Space from "../components/general/space";
import WP from "../utils/wordpress";
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 180,
    },
    cardWidth: {
        minWidth: 275,
    },
    slidePad: {
        width: "100vw",
        height: "30vw",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    imageBG: {
        width: "100vw",
        height: "50vw",
        backgroundImage:
            "url(https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/home_slide1-scaled.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "leftcenter",
        backgroundSize: "cover",
        /*backgroundAttachment: "fixed",*/
    },
    chammieBG: {
        width: "100vw",
        height: "60vw",
        backgroundColor: "#e0e0e0",
        backgroundImage:
            "url(https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/home_slide2.png)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "right bottom",
        backgroundSize: "30%",
    },
    chammieContainer: {
        margin: "auto",
    },
    itweekButton: {
        marginTop: "30%",
        marginLeft: "25%",
    },
});
// Nightmare,
const Home = ({ upperNews, users }) => {
    const classes = useStyles();
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };
    return (
        <div className={classes.root}>
            <Grid container direction="column" alignItems="stretch">
                <Grid container xs={12} className={classes.imageBG}>
                    <Box width={1} height="100%">
                        <Button
                            color="primary"
                            href="/it-week"
                            className={classes.itweekButton}
                        >
                            View More
                        </Button>
                    </Box>
                </Grid>
                <Grid container xs={12} className={classes.chammieBG}>
                    <Grid item container sm={8}>
                        <Box width={1}>
                            <Typography
                                variant="h3"
                                style={{ paddingLeft: "5%", paddingTop: "5%" }}
                            >
                                Join the Computer Studies Student Executive
                                Council!
                            </Typography>
                            <Grid
                                container
                                justify="flex-start"
                                alignItems="center"
                                className={classes.chammieContainer}
                                spacing={5}
                            >
                                <Grid item xs={12} sm={5}>
                                    <Card className={classes.cardWidth}>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/go_7.jpg"
                                            title="CSSEC Pic"
                                        />
                                        <CardContent>
                                            <Typography variant="h4">
                                                {" "}
                                                Card Title
                                            </Typography>
                                            <Typography variant="body1">
                                                {" "}
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Aenean tempus interdum leo at
                                                lacinia. Sed augue nunc, auctor
                                                in magna ac, laoreet fermentum
                                                nulla. Cras ac purus id nibh
                                                consequat rutrum sed vitae orci.
                                                Suspendisse nisl justo,
                                                condimentum eget ornare sit
                                                amet, placerat sit amet justo.
                                                Nullam vehicula purus nec
                                                elementum tincidunt. Nam sed
                                                nibh eu lacus varius auctor.
                                                Duis non orci ut arcu
                                                ullamcorper vestibulum quis non
                                                arcu. Fusce consectetur sit amet
                                                justo in eleifend. Vestibulum
                                                sed dui ut justo cursus
                                                eleifend.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Card className={classes.cardWidth}>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/go_7.jpg"
                                            title="CSSEC Pic"
                                        />
                                        <CardContent>
                                            <Typography variant="h4">
                                                {" "}
                                                Card Title
                                            </Typography>
                                            <Typography variant="body1">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Aenean tempus interdum leo at
                                                lacinia. Sed augue nunc, auctor
                                                in magna ac, laoreet fermentum
                                                nulla. Cras ac purus id nibh
                                                consequat rutrum sed vitae orci.
                                                Suspendisse nisl justo,
                                                condimentum eget ornare sit
                                                amet, placerat sit amet justo.
                                                Nullam vehicula purus nec
                                                elementum tincidunt. Nam sed
                                                nibh eu lacus varius auctor.
                                                Duis non orci ut arcu
                                                ullamcorper vestibulum quis non
                                                arcu. Fusce consectetur sit amet
                                                justo in eleifend. Vestibulum
                                                sed dui ut justo cursus
                                                eleifend.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Card className={classes.cardWidth}>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/go_7.jpg"
                                            title="CSSEC Pic"
                                        />
                                        <CardContent>
                                            <Typography variant="h4">
                                                {" "}
                                                Card Title
                                            </Typography>
                                            <Typography variant="body1">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Aenean tempus interdum leo at
                                                lacinia. Sed augue nunc, auctor
                                                in magna ac, laoreet fermentum
                                                nulla. Cras ac purus id nibh
                                                consequat rutrum sed vitae orci.
                                                Suspendisse nisl justo,
                                                condimentum eget ornare sit
                                                amet, placerat sit amet justo.
                                                Nullam vehicula purus nec
                                                elementum tincidunt. Nam sed
                                                nibh eu lacus varius auctor.
                                                Duis non orci ut arcu
                                                ullamcorper vestibulum quis non
                                                arcu. Fusce consectetur sit amet
                                                justo in eleifend. Vestibulum
                                                sed dui ut justo cursus
                                                eleifend.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                                <Grid item xs={12} sm={5}>
                                    <Card className={classes.cardWidth}>
                                        <CardMedia
                                            className={classes.media}
                                            image="https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/go_7.jpg"
                                            title="CSSEC Pic"
                                        />
                                        <CardContent>
                                            <Typography variant="h4">
                                                {" "}
                                                Card Title
                                            </Typography>
                                            <Typography variant="body1">
                                                Lorem ipsum dolor sit amet,
                                                consectetur adipiscing elit.
                                                Aenean tempus interdum leo at
                                                lacinia. Sed augue nunc, auctor
                                                in magna ac, laoreet fermentum
                                                nulla. Cras ac purus id nibh
                                                consequat rutrum sed vitae orci.
                                                Suspendisse nisl justo,
                                                condimentum eget ornare sit
                                                amet, placerat sit amet justo.
                                                Nullam vehicula purus nec
                                                elementum tincidunt. Nam sed
                                                nibh eu lacus varius auctor.
                                                Duis non orci ut arcu
                                                ullamcorper vestibulum quis non
                                                arcu. Fusce consectetur sit amet
                                                justo in eleifend. Vestibulum
                                                sed dui ut justo cursus
                                                eleifend.
                                            </Typography>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
                <Space />
                <Grid
                    container
                    xs={12}
                    spacing={3}
                    className={classes.slidePad}
                >
                    <Grid container sm={8}>
                        <Typography variant="h3">News</Typography>
                        <Grid container spacing={2}>
                            {upperNews.map(news => {
                                return (
                                    <Grid item xs={12} md={4} key={news.id}>
                                        <NewsCard
                                            post={news}
                                            author={getAuthor(news.author)}
                                        />
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>
                    <Grid container xs={12} sm={3}>
                        <Typography variant="h3">Events</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    );
};
export async function getStaticProps() {
    try {
        let [posts, users] = await Promise.all([
            WP.posts().categories(2).perPage(100).order("desc").orderby("date"),
            WP.users(),
        ]);
        let upperNews = posts.slice(0, 3);
        return {
            props: { upperNews: upperNews, users: users },
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

export default Home;
