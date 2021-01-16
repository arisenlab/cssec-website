import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Hidden from "@material-ui/core/Hidden";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/news/news-card";

import EventsListTwo from "../components/events/events-list-two";
import { isSameDay } from "date-fns";
import google_calendar from "../utils/google";

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
        width: "100%",
        height: "50vw",
        backgroundImage:
            "url(https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/home_slide1-scaled.jpg)",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "leftcenter",
        backgroundSize: "cover",
        /*backgroundAttachment: "fixed",*/
    },
    cssecSection: {
        width: "100%",
        backgroundColor: "#e0e0e0",
        padding: 20,
    },
    cssecSectionContent: {
        width: "90%",
        margin: "auto",
    },
    cssecWebsiteSection: {
        width: "100%",
        backgroundColor: "rgba(186, 131, 180, 0.29)",
        padding: 20,
    },
    newsEventsContainer: { width: "95%", margin: "auto" },
    chammieContainer: {
        width: "95%",
        margin: "auto",
        position: "relative",
    },
    itweekButton: {
        marginTop: "30%",
        marginLeft: "25%",
    },
});
// Nightmare,
const Home = ({ upperNews, users, dayEvents }) => {
    const classes = useStyles();
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };
    return (
        <div className={classes.root}>
            <Grid container className={classes.imageBG}>
                <Box width={1}>
                    <Button
                        color="primary"
                        href="/it-week"
                        className={classes.itweekButton}
                    >
                        View More
                    </Button>
                </Box>
            </Grid>
            <Grid
                container
                alignItems="center"
                className={classes.cssecWebsiteSection}
            >
                <Grid
                    container
                    item
                    alignItems="center"
                    justify="center"
                    spacing={2}
                    className={classes.cssecSectionContent}
                >
                    <Hidden smDown>
                        <Grid item md={6} align="center">
                            <img
                                src="https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/home_slide2.png"
                                width="65%"
                            />
                        </Grid>
                    </Hidden>
                    <Grid item md={6}>
                        <Typography variant="h3" gutterBottom>
                            About CSSEC Website
                        </Typography>
                        <Typography variant="body1">
                            The CSSEC Website creates within a portal of
                            information available to the Computer Studies
                            Cluster, made possible by the cluster's own great
                            student developers and designers. Relevant events,
                            news and updates are accessible in the website as
                            well as details of the Computer Studies Student
                            Executive Council core officers and committees. This
                            also ensures a convenient experience for the users
                            and serve its main purpose of delivering service to
                            the whole CS community.
                        </Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid
                container
                alignItems="center"
                className={classes.cssecSection}
            >
                <Grid
                    container
                    item
                    alignItems="center"
                    justify="center"
                    spacing={2}
                    className={classes.cssecSectionContent}
                >
                    <Grid item md={6}>
                        <Typography variant="h3" gutterBottom>
                            Join the Computer Studies Student Executive Council!
                        </Typography>
                        <Typography variant="body1">
                            The Computer Studies Student Executive Council
                            (CSSEC) is an organization of student leaders
                            coordinating with the cluster's faculty and
                            administrators to provide means for student
                            assistance in academic and non-academic affairs. For
                            over the years, CSSEC continues to provide
                            opportunities for student experience in personal
                            development. We also serve as a bridge of
                            information and relevant issues within the whole
                            body. We, CSSEC, humble ourselves as representatives
                            of the Computer Studies cluster and are equipped
                            with competence and passion capable to create
                            impact.
                        </Typography>
                    </Grid>
                    <Hidden smDown>
                        <Grid item md={6} align="center">
                            <img
                                src="https://cssec-api.addu.edu.ph/wp-content/uploads/2021/01/home_slide2.png"
                                width="65%"
                            />
                        </Grid>
                    </Hidden>
                </Grid>
            </Grid>
            <Space />
            <Grid
                container
                spacing={2}
                className={classes.newsEventsContainer}
                alignItems="center"
            >
                <Grid container item xs={12} md={8}>
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
                <Grid item xs={12} md={4}>
                    <EventsListTwo day_events={dayEvents} />
                </Grid>
            </Grid>
        </div>
    );
};
export async function getStaticProps() {
    try {
        let [posts, users] = await Promise.all([
            WP.posts().categories(2).perPage(3).order("desc").orderby("date"),
            WP.users(),
        ]);

        const events = (
            await google_calendar.events.list({
                calendarId: process.env.GOOGLE_CALENDAR_ID,
                orderBy: "startTime",
                singleEvents: true,
                timeMin: new Date(),
                maxResults: 10,
            })
        ).data.items;

        const day_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date())
        );

        return {
            props: { upperNews: posts, users: users, dayEvents: day_events },
            revalidate: 10,
        };
    } catch (err) {
        console.log(err);
        return {
            props: { upperNews: [], users: [], dayEvents: [] },
            revalidate: 10,
        };
    }
}

export default Home;
