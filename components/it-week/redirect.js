import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({}));

const Redirect = ({ imgSrc, title }) => {
    return (
        <div>
            <img src={imgSrc} height="100px" width="100%" />
            <Paper style={{ marginTop: 10 }}>
                <Typography>{title}</Typography>
            </Paper>
        </div>
    );
};

export default Redirect;
