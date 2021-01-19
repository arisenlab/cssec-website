import React from "react";

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { cdn_url } from "../../utils/constants";

const Giveaway = ({ name, desc, link, imgSrc }) => {
    return (
        <div>
            <div>
                <img
                    src={`${cdn_url}${imgSrc}`}
                    style={{
                        objectFit: "cover",
                        width: "100%",
                        height: "200px",
                        borderRadius: "10px",
                    }}
                />
            </div>
            <div>
                <Typography variant="h6">{name}</Typography>
            </div>
            <div style={{ marginLeft: 15 }}>
                <Typography variant="subtitle1">{desc}</Typography>
            </div>
            <div align="right">
                <Button
                    variant="contained"
                    color="primary"
                    onClick={() => window.open(link)}
                >
                    Click Here
                </Button>
            </div>
        </div>
    );
};

export default Giveaway;
