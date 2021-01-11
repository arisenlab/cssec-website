import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const SectionHeader = () => {
    return (
        <Paper
            elevation={0}
            square={true}
            style={{ backgroundColor: "#9C7684", width: "60%" }}
        >
            <Typography variant="h4">News</Typography>
        </Paper>
    );
};

export default SectionHeader;
