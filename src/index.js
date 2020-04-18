import React from "react";
import ReactDOM from "react-dom";
import _ from "lodash";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/SearchBar";
import VideoList from "./components/VideoList";
import VideoDetail from "./components/VideoDetail";
import "./styles/styles.css";

export const API_KEY = process.env.REACT_APP_API_KEY;

console.log(process.env.API_KEY);

class App extends React.Component {
  state = { videos: [], selectedVideo: null };

  constructor(props) {
    super(props);

    this.onSearch("");
  }

  onSearch = (term) => {
    console.log(process.env.API_KEY);
    YTSearch({ key: API_KEY, term }, (videos) => {
      this.setState({ videos, selectedVideo: videos[0] });
    });
  };

  videoSearchDebounce = _.debounce((term) => this.onSearch(term), 300);

  onSelectVideo = (video) => {
    this.setState({ selectedVideo: video });
  };

  render() {
    const { videos, selectedVideo } = this.state;
    return (
      <div className="ui grid stackable center aligned container">
        <div className="ten wide column ">
          <SearchBar onSearch={this.videoSearchDebounce} />
          <VideoDetail video={selectedVideo} />
        </div>
        <VideoList videos={videos} onSelectVideo={this.onSelectVideo} />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
