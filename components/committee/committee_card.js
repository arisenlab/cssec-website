import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Flippy, { FrontSide, BackSide } from 'react-flippy';

const useStyles = makeStyles(theme => ({
    marginAutoContainer: {
        width: 100 + "%",
        height: 100 + "%",
        display: "flex",
    },
    marginAutoItem: {
        margin: "auto",
    },
    marginDescription: {
        marginLeft: 10 + "px",
        marginRight: 10 + "px",
    },
}));

const CommitteeCard = ({ imgSrc, title, description }) => {
    const classes = useStyles();
    return (
        <div style={{ margin: 30 }}>
            <Flippy>
                <FrontSide>
                    <div className={classes.marginAutoContainer}>
                        <img
                            className={classes.marginAutoItem}
                            src={imgSrc}
                            width="80%"
                        />
                    </div>
                    <Typography variant="h4" align="center">
                        {title}
                     </Typography>
                </FrontSide>
                <BackSide>
                    <Typography
                        className={classes.marginDescription}
                        variant="subtitle1"
                    >
                        {description}
                    </Typography>
                </BackSide>
            </Flippy>
        </div>
    );
};

export default CommitteeCard;
