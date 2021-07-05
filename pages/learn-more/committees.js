import React from "react";

import dynamic from "next/dynamic";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import Layout from "components/general/layout";
const CommitteeCard = dynamic(() =>
    import("components/committee/committee_card")
);

import WP from "utils/wordpress";

const Committees = ({ committees }) => {
    let output;

    if (committees != []) {
        output = (
            <>
                {committees.map(committee => {
                    return (
                        <Grid item md={4} key={committee.id}>
                            <CommitteeCard
                                imgSrc={committee.acf.logo}
                                title={committee.acf.committee_name}
                                description={committee.acf.description}
                            />
                        </Grid>
                    );
                })}
            </>
        );
    } else {
        output = (
            <Grid item xs={12} align="center" style={{ height: "70vh" }}>
                <Typography variant="h3">
                    Sorry we can't Connect to the server
                </Typography>
            </Grid>
        );
    }

    return (
        <Layout width="90%">
            <Grid container spacing={2} style={{ marginTop: 10 }}>
                {output}
            </Grid>
        </Layout>
    );
};

export async function getStaticProps() {
    try {
        let committees = await WP.cssec_committees();

        return { props: { committees }, revalidate: 10 };
    } catch (err) {
        return { props: { committees: [] }, revalidate: 10 };
    }
}

export default Committees;
