import React from "react";
import YouTube from "react-youtube";

const Youtube = ({ videoId }) => {
    const opts = {
        height: "450",
        width: "100%",
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    };

    const _onReady = event => {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    };

    return (
        <YouTube
            videoId={videoId}
            opts={opts}
            onReady={event => _onReady(event)}
        />
    );
};

export default Youtube;
