import React, { useState } from "react";

const SearchBar = (props) => {
  const [term, setTerm] = useState("");

  const onInputChange = (e) => {
    setTerm(e.target.value);
    props.onSearch(e.target.value);
  };

  return (
    <div className="ui input search-bar" onClick={(e) => e.stopPropagation()}>
      <input
        className="ui input"
        value={term}
        onChange={onInputChange}
        type="text"
      />
    </div>
  );
};

export default SearchBar;
