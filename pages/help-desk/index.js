import React from "react";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { cdn_url } from "../../utils/constants";

const HelpDesk = () => {
    return (
        <Grid
            container
            direction="column"
            justify="center"
            align="center"
            style={{ height: "80vh" }}
        >
            <Grid item>
                <img
                    src={`${cdn_url}/chammie-chan/tear-chammie-chan.png`}
                    width="25%"
                />
            </Grid>
            <Grid item>
                <Typography variant="h4">Currently in Progress...</Typography>
            </Grid>
        </Grid>
    );
};

export default HelpDesk;
