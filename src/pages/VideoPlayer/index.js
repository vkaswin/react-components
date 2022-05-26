import React from "react";
import { VideoPlayer } from "components";
// import TestVideo from "assets/video/test-video.mp4";

const VideoPlayerPage = () => {
  return (
    <div>
      <VideoPlayer
        // url={TestVideo}
        url="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4"
        posterUrl="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg"
      />
    </div>
  );
};

export default VideoPlayerPage;
