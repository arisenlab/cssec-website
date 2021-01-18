import React from "react";

import dynamic from "next/dynamic";

const Banner = dynamic(() => import("../../../components/accss/banner"));
const About = dynamic(() => import("../../../components/accss/about"));
const NewsAndUpdates = dynamic(() =>
    import("../../../components/accss/news_events")
);
const Activities = dynamic(() =>
    import("../../../components/accss/activities")
);

import Space from "../../../components/general/space";

import WP from "../../../utils/wordpress";

import sort from "fast-sort";

const Accss = ({ accss_posts, users, accss_activities, media }) => {
    return (
        <>
            <Banner />

            <Space />

            <About />

            <Space />

            <NewsAndUpdates posts={accss_posts} users={users} media={media} />

            <Space />

            <Activities activities={accss_activities} />
        </>
    );
};

export async function getStaticProps() {
    try {
        let [accss_posts, users, accss_activities, media] = await Promise.all([
            WP.posts().categories(3).perPage(3).order("desc").orderby("date"),
            WP.users(),
            WP.accss_activities(),
            WP.media(),
        ]);

        sort(accss_activities).asc(activity => activity.acf.name);

        return {
            props: { accss_posts, users, accss_activities, media },
            revalidate: 10,
        };
    } catch (err) {
        console.log(err);
        return {
            props: {
                accss_posts: [],
                users: [],
                accss_activities: [],
                media: [],
            },
            revalidate: 10,
        };
    }
}

export default Accss;
