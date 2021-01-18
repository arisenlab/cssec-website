import React from "react";

const FacebookVideo = ({ link }) => {
    return (
        <iframe
            src="https://www.facebook.com/plugins/video.php?href=https%3A%2F%2Fwww.facebook.com%2Faddu.cs%2Fvideos%2F838675613363644%2F&show_text=0"
            width="100%"
            height="100%"
            style={{ border: "none", overflow: "hidden" }}
            scrolling="no"
            allowFullScreen={true}
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        ></iframe>
    );
};

export default FacebookVideo;
