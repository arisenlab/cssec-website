import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

import Ccard from "../../components/compCom/Ccard";

import WP from "../../utils/wordpress";

const useStyles = makeStyles(theme => ({
    root: {
        width: "90%",
        margin: "auto",
    },
}));

const Committees = ({ committees }) => {
    const classes = useStyles();
    let output;

    if (committees != []) {
        output = (
            <>
                {committees.map(committee => {
                    return (
                        <Grid item md={4} key={committee.id}>
                            <Ccard
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
        <div className={classes.root}>
            <Grid container spacing={2} style={{ marginTop: 10 }}>
                {output}
            </Grid>
        </div>
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
