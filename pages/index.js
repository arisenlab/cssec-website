import React from "react";

import dynamic from "next/dynamic";

import { isSameDay } from "date-fns";
import google_calendar from "../utils/google";

import Space from "../components/general/space";

const CSSEC = dynamic(() => import("../components/home/cssec"));
const CSSECWebsite = dynamic(() => import("../components/home/cssec-website"));
const ITWeekBanner = dynamic(() => import("../components/home/itweek-banner"));
const NewsEvents = dynamic(() => import("../components/home/news-events"));

import WP from "../utils/wordpress";

// Nightmare,
const Home = ({ upperNews, users, dayEvents }) => {
    const getAuthor = author_id => {
        return users.find(user => user.id === author_id).name;
    };
    return (
        <>
            <ITWeekBanner />

            <CSSECWebsite />

            <CSSEC />

            <Space />

            <NewsEvents posts={upperNews} dayEvents={dayEvents} users={users} />
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
