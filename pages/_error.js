import React from "react";
import { useRouter } from "next/router";
import { Grid, Typography, Button } from "@material-ui/core";

const CSSEC404 = () => {
    const router = useRouter();
    return (
        <div
            style={{
                marginTop: 20,
                marginBottom: 20,
                height: "60vh",
                width: "80%",
                margin: "auto",
            }}
        >
            <Grid
                container
                direction="column"
                style={{ height: "100%" }}
                alignItems="center"
                justify="center"
                spacing={1}
            >
                <Grid item>
                    <Typography variant="h1" color="primary" align="center">
                        Oops!
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h4" color="primary" align="center">
                        404 - PAGE NOT FOUND
                    </Typography>
                </Grid>
                <Grid item>
                    <Typography variant="h6" color="primary" align="center">
                        Maybe the page has been removed or not yet created,
                        Sorry for the inconvenience
                    </Typography>
                </Grid>
                <Grid item>
                    <Button
                        variant="contained"
                        color="secondary"
                        onClick={() => router.push("/")}
                    >
                        Back to Home
                    </Button>
                </Grid>
            </Grid>
        </div>
    );
};

export default CSSEC404;
