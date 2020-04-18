import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./styles/styles.css";
import useFetchYoutubeVideo from "./hooks/useFetchYoutubeVideos";

const App = () => {
  const {
    videos,
    selectedVideo,
    setSelectedVideo,
    setTerm,
  } = useFetchYoutubeVideo();

  const videoSearchDebounce = _.debounce((term) => setTerm(term), 300);

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
