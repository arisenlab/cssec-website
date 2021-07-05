import React from "react";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const useStyles = makeStyles(theme => ({
    container: {
        width: "90%",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            width: "100%",
        },
    },
    image: {
        backgroundPosition: "center",
        backgroundSize: "contain",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "70vh",
        margin: "auto",
        [theme.breakpoints.down("md")]: {
            height: "30vh",
        },
    },
}));

const Banners = ({ images }) => {
    const classes = useStyles();

    const fadeImages = images;

    const properties = {
        duration: 5000,
        transitionDuration: 500,
        infinite: true,
        prevArrow: (
            <IconButton style={{ color: "#fff", zIndex: 0 }} size="medium">
                <NavigateBeforeIcon fontSize="large" color="primary" />
            </IconButton>
        ),
        nextArrow: (
            <IconButton style={{ color: "#fff", zIndex: 0 }} size="medium">
                <NavigateNextIcon fontSize="large" color="primary" />
            </IconButton>
        ),
    };

    return (
        <div className={classes.container}>
            <div className="slide-container">
                <Slide {...properties} indicators easing="ease">
                    {fadeImages.map((image, i) => (
                        <div
                            style={{ backgroundImage: `url(${image})` }}
                            className={`each-fade ${classes.image}`}
                        />
                    ))}
                </Slide>
            </div>
        </div>
    );
};

export default Banners;
