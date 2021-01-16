import React from "react";
import Image from "next/image";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

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
                    src={`${media_url}/2021/01/logo-cssec-purple.png`}
                    height={250}
                    width={250}
                />
            </Grid>
            <Grid item>
                <Typography variant="h4">Currently in Progress...</Typography>
            </Grid>
        </Grid>
    );
};

export default HelpDesk;
