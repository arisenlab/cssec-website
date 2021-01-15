import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";

const SectionHeader = ({ text }) => {
    return (
        <Paper
            elevation={0}
            square={true}
            style={{
                backgroundColor: "#9C7684",
                width: "60%",
                paddingTop: 10,
                paddingBottom: 10,
                paddingLeft: 10,
            }}
        >
            <Typography variant="h4">{text}</Typography>
        </Paper>
    );
};

export default SectionHeader;
