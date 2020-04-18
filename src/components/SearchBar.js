import React from "react";

class SearchBar extends React.Component {
  constructor(props) {
    super(props);

    this.state = { term: "" };
  }

  onInputChange = (e) => {
    this.setState({ term: e.target.value });
    this.props.onSearch(e.target.value);
  };

  render() {
    return (
      <div className="ui input search-bar" onClick={(e) => e.stopPropagation()}>
        <input
          className="ui input"
          value={this.state.term}
          onChange={this.onInputChange}
          type="text"
        />
      </div>
    );
  }
}

export default SearchBar;
