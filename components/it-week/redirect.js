import React from "react";
import ComputerIcon from "@material-ui/icons/Computer";
import Paper from "@material-ui/core/Paper";

const Redirect = ({ imgSrc, title, labelLogoSrc }) => {
    return (
        <div
            style={{
                background: `url(${imgSrc})`,
                backgroundSize: "auto",
                borderRadius: "5px",
                height: "150px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}
        >
            <div style={{ width: "100%" }}>
                <div
                    style={{
                        display: "flex",
                        justifyContent: "center",
                    }}
                >
                    <ComputerIcon style={{ color: "#949494", fontSize: 80 }} />
                </div>
                <div style={{ marginTop: 15 }}>
                    <img src={labelLogoSrc} alt={title} width="100%" />
                </div>
            </div>
        </div>
    );
};

export default Redirect;
