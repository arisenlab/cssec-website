import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Flippy, { FrontSide, BackSide } from "react-flippy";

const useStyles = makeStyles(theme => ({
    cardContainer: {
        margin: 30,
        "&:hover": {
            cursor: "pointer",
        },
    },
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
        <div className={classes.cardContainer}>
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
