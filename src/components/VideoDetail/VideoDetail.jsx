import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) return <div>Loading...</div>;

  const {
    id: { videoId },
    snippet: { title, description },
  } = video;

  const yUrl = `https://www.youtube.com/embed/${videoId}`;
  return (
    <div className="ui card">
      <div className="image">
        <iframe title="youtube_viwer" src={yUrl}></iframe>
      </div>
      <div className="content">
        <div className="header">{title}</div>
        <div className="description">{description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
