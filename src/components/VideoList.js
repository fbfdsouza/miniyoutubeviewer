import React from "react";
import VideoListItem from "./VideoListItem";

const VideoList = ({ videos, onSelectVideo }) => {
  const videoItems = videos.map((video) => (
    <VideoListItem
      key={video.id.videoId}
      video={video}
      onSelectVideo={onSelectVideo}
    />
  ));

  return (
    <div className="three wide column">
      <ul>{videoItems}</ul>
    </div>
  );
};

export default VideoList;
