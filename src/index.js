import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./styles/styles.css";

const API_KEY = process.env.REACT_APP_API_KEY;

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onSearch("");
  }, []);

  const onSearch = (term) => {
    YTSearch({ key: API_KEY, term }, (videos) => {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    });
  };

  const videoSearchDebounce = _.debounce((term) => onSearch(term), 300);

  const onSelectVideo = (video) => {
    setSelectedVideo(video);
  };

  return (
    <div className="ui grid stackable center aligned container">
      <div className="ten wide column ">
        <SearchBar onSearch={videoSearchDebounce} />
        <VideoDetail video={selectedVideo} />
      </div>
      <VideoList videos={videos} onSelectVideo={onSelectVideo} />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));
