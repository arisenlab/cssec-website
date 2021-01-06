import React from "react";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import Ccard from "../../components/compCom/Ccard";

import committees from "../../data/committees";

const useStyles = makeStyles(theme => ({
    root: {
        width: "98%",
        margin: "auto",
    },
    redirects: {
        display: "flex",
        flexWrap: "wrap",
    },
}));

const Committees = () => {
    const classes = useStyles();
    return <div>
         <Grid container spacing={2} style={{ marginTop: 10 }}>
            {committees.map(image => {
                return (
                    <Grid item xs={4}>
                        <Ccard
                            imgSrc={image.url}
                            title={image.title}
                            description={image.description}
                        />
                    </Grid>
                );
             })}
        </Grid>       
    </div>;
};

export default Committees;
