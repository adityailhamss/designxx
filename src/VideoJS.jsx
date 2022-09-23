import React, { useEffect, useRef } from "react";
import videojs from "video.js";
import 'video.js/dist/video-js.css';
import '@videojs/themes/dist/city/index.css';


const VideoJS = ({ options, themeName='city'}) => {
    const videoRef = useRef(null);
    const playerReff = useRef(null);

    useEffect (() => {
        const player = playerReff.current;

        if(!player){
            const videoElement = videoRef.current;
            if (!videoElement) return;
            
            playerReff.current = videojs(videoElement, options);
        };

        return () => {
            if (player) {
                player.dispose();
                playerReff.current = null;
            }
        };

    }, [options, videoRef, playerReff]);

    return(
        <div data-vjs-player>
            <video ref={videoRef} className={`video-js vjs-big-play-centered md:w-[100px] vjs-theme-${themeName}`}/>
        </div>
    );
}

export default VideoJS;