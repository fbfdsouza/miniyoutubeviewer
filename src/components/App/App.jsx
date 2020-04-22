import React from "react";
import _ from "lodash";
import SearchBar from "../SearchBar/";
import VideoList from "../VideoList/";
import VideoDetail from "../VideoDetail/";
import useFetchYoutubeVideo from "../../hooks/useFetchYoutubeVideos";
import "./../../styles/styles.css";

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

export default App;
