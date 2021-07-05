import React from "react";

import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import SectionHeader from "components/general/section-header";

import ImageViewer from "react-simple-image-viewer";

import Layout from "components/general/layout";
import Space from "components/general/space";
import Banners from "components/help-desk/banners";

import { cdn_url } from "utils/constants";

const useStyles = makeStyles(() => ({
    itWeekDescription: {
        padding: "10px",
        textIndent: "30px",
        marginTop: 10,
    },
    description: {
        textAlign: "justify",
    },
    img: {
        "&:hover": {
            cursor: "pointer",
        },
    },
}));

const Highlights = () => {
    const classes = useStyles();
    const [currentImage, setCurrentImage] = React.useState(0);
    const [isViewerOpen, setIsViewerOpen] = React.useState(false);

    const images = [
        `${cdn_url}/highlights/cssec21-22-branding/cs-shirt-black.jpg`,
        `${cdn_url}/highlights/cssec21-22-branding/cs-shirt-white.jpg`,
        `${cdn_url}/highlights/cssec21-22-branding/cs-shirt-pastel.jpg`,
    ];

    const openImageViewer = React.useCallback(index => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const closeImageViewer = () => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <Layout width="95%">
            <Space />

            <Grid container spacing={2}>
                <Grid container item md={8}>
                    <Grid item xs={12}>
                        <img
                            src={`${cdn_url}/highlights/cssec21-22-branding/Highlights_Banner.png`}
                            width="100%"
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Paper className={classes.itWeekDescription}>
                            <Typography
                                variant="body1"
                                component="p"
                                className={classes.description}
                            >
                                AdDU Computer Studies Branding:{" "}
                                <b>
                                    Downloading Transcendence, Uploading the
                                    Future.{" "}
                                </b>
                                With the increasing reliance on computing
                                technologies, it is imperative for the aspirant
                                technology professionals of today to prepare
                                themselves for the world beyond the academe.
                                This way, we are better equipped to make
                                impactful marks on the world tomorrow. The
                                Computer Studies Cluster Chameleons, notorious
                                for adaptability and individuality, look toward
                                a brighter future for all through innovation,
                                inclusivity, and academic excellence. This year,
                                the CS Cluster Chameleons exceeds expectations
                                and elevates experiences through CS++; the
                                ultimate platform for growth and going beyond
                                what is known. The Computer Studies Cluster
                                Chameleons: Downloading Transcendence, Uploading
                                the Future
                            </Typography>
                        </Paper>
                    </Grid>
                </Grid>
                <Grid item xs={12} md={4}>
                    <Grid
                        container
                        direction="column"
                        spacing={2}
                        align="center"
                        justify="center"
                    >
                        <Grid item>
                            <img
                                src={`${cdn_url}/highlights/cssec21-22-branding/Highlights_Branding_Teaser.gif`}
                                width="90%"
                                style={{ borderRadius: 10 }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>

            <Space height={50} />

            <Grid container spacing={2}>
                <Grid item xs={12} md={4} align="center">
                    <img
                        src={`${cdn_url}/highlights/cssec21-22-branding/pubmat.jpg`}
                        width="90%"
                    />
                </Grid>
                <Grid item xs={12} md={8} align="center">
                    <SectionHeader text="CS Shirts" />
                    {images.map((src, index) => (
                        <img
                            src={src}
                            onClick={() => openImageViewer(index)}
                            width="300"
                            key={index}
                            style={{ margin: "2px" }}
                            alt={src}
                            className={classes.img}
                        />
                    ))}

                    {isViewerOpen && (
                        <ImageViewer
                            src={images}
                            currentIndex={currentImage}
                            onClose={closeImageViewer}
                        />
                    )}
                </Grid>
            </Grid>
            <Space height={25} />
        </Layout>
    );
};

export async function getStaticProps() {
    try {
        const events = (
            await google_calendar.events.list({
                calendarId: process.env.GOOGLE_CALENDAR_ID,
                orderBy: "startTime",
                singleEvents: true,
                timeMin: new Date(),
                maxResults: 10,
            })
        ).data.items;
        //const day_events = events;
        const day_events = events.filter(event =>
            isSameDay(new Date(event.start.dateTime), new Date())
        );
        return { props: { day_events }, revalidate: 10 };
    } catch (err) {
        return { props: { day_events: [] }, revalidate: 10 };
    }
}

export default Highlights;
