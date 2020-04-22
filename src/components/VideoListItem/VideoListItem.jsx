import React from "react";

const VideoListItem = ({ video, onSelectVideo }) => {
  const {
    snippet: {
      thumbnails: {
        high: { url },
      },
      title,
    },
  } = video;

  return (
    <li onClick={() => onSelectVideo(video)}>
      <div className="ui card list-item">
        <div className="image">
          <img className="img-thumbnail" src={url} alt={title} />
        </div>
        <div className="content ">
          <div className="video-list-item-content">{`${title.slice(
            0,
            24
          )}...`}</div>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
