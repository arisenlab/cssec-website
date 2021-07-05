import React from "react";

import { Grid, Paper, Typography } from "@material-ui/core";

import Faqs from "components/help-desk/faqs";
import Programs from "components/help-desk/programs";
import Dropbox from "components/help-desk/dropbox";
import ContactList from "components/help-desk/contact-list";
import Banners from "components/help-desk/banners";
import SectionHeader from "components/general/section-header";
import Space from "components/general/space";
import Layout from "components/general/layout";

import { TwitterTimelineEmbed, TwitterFollowButton } from "react-twitter-embed";

import WP from "utils/wordpress";

import { cdn_url } from "utils/constants";

const HeaderFaqs = ({ title }) => {
    return (
        <Typography variant="h5" color="primary">
            {title}
        </Typography>
    );
};

const HelpDesk = ({ enrollment, appeal, loa, contacts }) => {
    return (
        <>
            <Space height={50} />
            <Layout width="95%">
                <Banners
                    images={[
                        `${cdn_url}/banner/help-desk/CS.jpg`,
                        `${cdn_url}/banner/help-desk/DS.jpg`,
                        `${cdn_url}/banner/help-desk/IS.jpg`,
                        `${cdn_url}/banner/help-desk/IT.jpg`,
                    ]}
                />
            </Layout>

            <Space height={50} />
            <Layout width="95%">
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <SectionHeader
                            text="Frequently Ask Questions"
                            width="70%"
                        />
                        <HeaderFaqs title="Enrollment Concerns" />
                        <Faqs faqs={enrollment} />
                        <Space height={15} />
                        <HeaderFaqs title="Appeals and Shifting Process" />
                        <Faqs faqs={appeal} />
                        <Space height={15} />
                        <HeaderFaqs title="LOA and Reinstatement Processes" />
                        <Faqs faqs={loa} />
                    </Grid>
                    <Grid
                        container
                        xs={12}
                        item
                        md={4}
                        direction="column"
                        spacing={2}
                    >
                        <Grid item>
                            <Programs />
                        </Grid>
                        <Grid item>
                            <TwitterFollowButton screenName={"addu_cs"} />
                            <TwitterTimelineEmbed
                                sourceType="profile"
                                screenName="addu_cs"
                                options={{ height: 620 }}
                            />
                        </Grid>
                    </Grid>
                </Grid>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8}>
                        <SectionHeader text="Concerns Dropbox" width="70%" />

                        <Paper elevation={3} style={{ padding: 10 }}>
                            <Dropbox />
                        </Paper>
                    </Grid>
                    <Grid container item md={4} direction="column">
                        <ContactList contacts={contacts} />
                    </Grid>
                </Grid>
            </Layout>
        </>
    );
};

export async function getStaticProps() {
    try {
        let [faqs, contacts] = await Promise.all([
            WP.help_desk_faqs(),
            WP.contacts(),
        ]);

        let [enrollment, appeal, loa] = [
            faqs.filter(faq => faq.acf.concern === "Enrollment"),
            faqs.filter(faq => faq.acf.concern === "Appeals and Shifting"),
            faqs.filter(faq => faq.acf.concern === "LOA and Reinstatement"),
        ];

        return { props: { enrollment, appeal, loa, contacts }, revalidate: 10 };
    } catch (err) {
        console.log(err);
        return { props: { faqs: [], contacts: [] }, revalidate: 10 };
    }
}

export default HelpDesk;
