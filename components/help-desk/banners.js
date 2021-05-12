import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const useStyles = makeStyles(theme => ({
    container: {
        width: "90%",
        margin: "auto",
    },
}));

const Banners = () => {
    const classes = useStyles();

    const fadeImages = [
        "https://image.freepik.com/free-vector/stylish-red-modern-wide-banner-elegant-design_1017-25708.jpg",
        "https://image.freepik.com/free-vector/abstract-gray-banner-with-blue-halftone-design_1017-27338.jpg",
        "https://image.freepik.com/free-vector/abstract-yellow-black-wide-banner-design_1017-30890.jpg",
    ];

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <IconButton
                style={{ marginRight: "-35px", color: "#fff" }}
                size="medium"
            >
                <NavigateBeforeIcon fontSize="large" color="primary" />
            </IconButton>
        ),
        nextArrow: (
            <IconButton
                style={{ marginLeft: "-35px", color: "#fff" }}
                size="medium"
            >
                <NavigateNextIcon fontSize="large" color="primary" />
            </IconButton>
        ),
    };

    return (
        <div className={classes.container}>
            <div className="slide-container">
                <Fade {...properties}>
                    <div className="each-fade" align="center">
                        <div>
                            <img src={fadeImages[0]} />
                        </div>
                    </div>
                    <div className="each-fade" align="center">
                        <div>
                            <img src={fadeImages[0]} />
                        </div>
                    </div>
                    <div className="each-fade" align="center">
                        <div>
                            <img src={fadeImages[0]} />
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
};

export default Banners;
