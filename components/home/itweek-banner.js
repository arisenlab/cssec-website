import React from "react";

import { cdn_url } from "../../utils/constants";

const ITWeekBanner = () => {
    return (
        <div style={{ width: "100%" }}>
            <div
                style={{
                    backgroundImage: `url(${cdn_url}/it-week-2021/home_slide1.jpg)`,
                    width: "100%",
                    height: "50vw",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "leftcenter",
                    backgroundSize: "cover",
                }}
            />
        </div>
    );
};

export default ITWeekBanner;
