import React from "react";
import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

import { cdn_url } from "../../utils/constants";

const HelpDesk = () => {
    return (
        <Grid
            container
            direction="column"
            spacing={2}
            justify="center"
            align="center"
            style={{ height: "100vh" }}
        >
            <Grid item>
                <Image
                    src={`${cdn_url}/chammie-chan/tear-chammie-chan.png`}
                    height={400}
                    width={300}
                />
            </Grid>
            <Grid item>
                <Typography variant="h4">Currently in Progress...</Typography>
            </Grid>
        </Grid>
    );
};

export default HelpDesk;
