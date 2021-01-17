import React from "react";

import Image from "next/image";

import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import NewsCard from "../components/news/news-card";

import EventsListTwo from "../components/events/events-list-two";
import { isSameDay } from "date-fns";
import google_calendar from "../utils/google";
import { cdn_url } from "../utils/constants";

import Space from "../components/general/space";
import Banner from "../components/home/banner";
import WP from "../utils/wordpress";

const useStyles = makeStyles({
    slidePad: {
        height: "80vh",
        width: "100%",
        height: "30vw",
        paddingLeft: "20px",
        paddingRight: "20px",
    },
    bannerContainer: {
        height: "90vh",
        backgroundImage:
            "-webkit-linear-gradient(150deg, #814573 50%, #fff 50%)",
        //    "linear-gradient(280.39deg, #814573 48.4%, rgba(255, 255, 255, 0) 103.04%)",

        //backgroundImage: `url(${cdn_url}/it-week-2021/home_slide1.jpg)`,
        //backgroundRepeat: "no-repeat",
        //backgroundPosition: "leftcenter",
        //backgroundSize: "cover",
        /*backgroundAttachment: "fixed",*/
    },
    bannerContent: {
        position: "relative",
        float: "right",
        zIndex: 3,
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
    upperNews = [];
    return (
        <>
            <Banner />
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
                    <Grid item md={6} align="center">
                        <img
                            src={`${cdn_url}/it-week-2021/chammie-uni.png`}
                            width="65%"
                        />
                    </Grid>
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
                    <Grid item md={6} align="center">
                        <img
                            src={`${cdn_url}/it-week-2021/chammie-chan.png`}
                            width="65%"
                        />
                    </Grid>
                </Grid>
            </Grid>
            <Space />
            <Grid container spacing={3} className={classes.newsEventsContainer}>
                <Grid container item xs={12} md={8}>
                    <Typography variant="h3">News</Typography>
                    <Grid container item spacing={2}>
                        {upperNews.length > 0 ? (
                            <>
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
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} md={12} align="center">
                                    <Image
                                        src={`${cdn_url}/chammie-chan/sad-chammie-chan.png`}
                                        height={500}
                                        width={300}
                                    />
                                    <Typography variant="h4">
                                        No News Yet
                                    </Typography>
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <EventsListTwo day_events={dayEvents} />
                </Grid>
            </Grid>
        </>
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
