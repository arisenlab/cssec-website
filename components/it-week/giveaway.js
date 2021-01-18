import React from "react";

import Typography from "@material-ui/core/Typography";
import ButtonBase from "@material-ui/core/ButtonBase";

import { cdn_url } from "../../utils/constants";

const Giveaway = ({ name, desc, link, imgSrc }) => {
    return (
        <div>
            <div>
                <ButtonBase
                    style={{ width: "100%" }}
                    onClick={() => window.open(link)}
                >
                    <img
                        src={`${cdn_url}${imgSrc}`}
                        style={{
                            objectFit: "cover",
                            width: "100%",
                            height: "200px",
                            borderRadius: "10px",
                        }}
                    />
                </ButtonBase>
            </div>
            <div>
                <Typography variant="h6">{name}</Typography>
            </div>
            <div style={{ marginLeft: 15 }}>
                <Typography variant="subtitle1">{desc}</Typography>
            </div>
        </div>
    );
};

export default Giveaway;
