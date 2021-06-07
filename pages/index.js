import React from "react";

import dynamic from "next/dynamic";
import google_calendar from "../utils/google";

const CSSEC = dynamic(() => import("../components/home/cssec"));
const NewsEvents = dynamic(() => import("../components/home/news-events"));
const Banner = dynamic(() => import("../components/home/banner"));

import WP from "utils/wordpress";

const Home = ({ upperNews, users, dayEvents }) => {
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };
    return (
        <>
            <Banner />

            <NewsEvents posts={upperNews} dayEvents={dayEvents} users={users} />

            <CSSEC />
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
        ).data
            .items; /* 

        const day_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date())
        ); */

        return {
            props: { upperNews: posts, users: users, dayEvents: events },
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
