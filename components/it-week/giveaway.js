import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const Giveaway = () => {
    return (
        <div>
            <div>
                <img
                    src="/logos/temp.jpg"
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div>
                <Typography variant="h6">
                    Computer Studies 20’ - 21’ Shirt
                </Typography>
            </div>
            <div>
                <Typography variant="body2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean ultrices accusman nibh itae malesuiada.
                </Typography>
            </div>
            <div align="right">
                <Button disableElevation variant="contained" color="primary">
                    Click Here
                </Button>
            </div>
        </div>
    );
};

export default Giveaway;
