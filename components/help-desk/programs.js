import React from "react";
import { Grid, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

import SectionHeader from "components/general/section-header";

const useStyles = makeStyles(() => ({
    button: {
        width: "100%",
        backgroundColor: "#a17f99",
        color: "#fff",
        borderRadius: "10px",
        "&:hover": {
            backgroundColor: "#8b6883",
        },
    },
}));

const Programs = () => {
    const classes = useStyles();
    return (
        <>
            <Grid container spacing={1} direction="column" alignItems="center">
                <Grid container item xs={12}>
                    <SectionHeader text="Program Outline" />
                </Grid>

                <Grid container item xs={12} spacing={1}>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() =>
                                window.open(
                                    "https://www.addu.edu.ph/wp-content/uploads/2020/06/Bachelor-of-Science-in-Computer-Science.pdf"
                                )
                            }
                        >
                            Computer Science
                        </Button>
                    </Grid>

                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() =>
                                window.open(
                                    "https://www.addu.edu.ph/wp-content/uploads/2020/06/Bachelor-of-Data-Science.pdf"
                                )
                            }
                        >
                            Data Science
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() =>
                                window.open(
                                    "https://www.addu.edu.ph/wp-content/uploads/2020/06/Bachelor-of-Science-in-Information-System.pdf"
                                )
                            }
                        >
                            Information System
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Button
                            variant="contained"
                            size="large"
                            className={classes.button}
                            onClick={() =>
                                window.open(
                                    "https://www.addu.edu.ph/wp-content/uploads/2020/06/Bachelor-of-Science-in-Information-Technolgy.pdf"
                                )
                            }
                        >
                            Information Technology
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
};

export default Programs;
