import React from "react";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

const Redirect = ({ imgSrc, title, labelLogoSrc }) => {
    return (
        <>
            <div
                style={{
                    background: `url(${imgSrc})`,
                    height: 150,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <Typography>SAMPLE</Typography>
            </div>
            <div
                style={{
                    marginTop: 10,
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Button variant="outlined" color="primary" disableElevation>
                    <Typography>{title}</Typography>
                </Button>
            </div>
        </>
    );
};

export default Redirect;
