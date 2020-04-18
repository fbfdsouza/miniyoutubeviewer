import { useState, useEffect } from "react";
import YTSearch from "youtube-api-search";

const API_KEY = process.env.REACT_APP_API_KEY;

const useFetchYoutubeVideos = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [term, setTerm] = useState("");

  useEffect(() => {
    YTSearch({ key: API_KEY, term }, (videos) => {
      setVideos(videos);
      setSelectedVideo(videos[0]);
    });
  }, [term]);

  return {
    videos,
    setSelectedVideo,
    selectedVideo,
    setTerm,
  };
};

export default useFetchYoutubeVideos;
