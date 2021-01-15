import React from "react";

const EsportsLiveVideo = ({ videoObject, videoLink }) => {
    return (
        <>
            {videoObject}
            <div
                style={{
                    position: "relative",
                    overflow: "hidden",
                    width:
                        "100%" /* 16:9 Aspect Ratio (divide 9 by 16 = 0.5625) */,
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        top: 0,
                        left: 0,
                        bottom: 0,
                        right: 0,
                        width: "100%",
                        height: "100%",
                    }}
                    dangerouslySetInnerHTML={{
                        __html: videoLink,
                    }}
                />
            </div>
        </>
    );
};

export default EsportsLiveVideo;
