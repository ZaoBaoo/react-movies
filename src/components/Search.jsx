import React, { useState } from "react";

const Search = (props) => {
  const { getDBMovies = Function.prototype } = props;

  const [search, setSearch] = useState("");

  const handleKey = (e) => {
    if (e.code === "Enter" && search !== "") {
      getDBMovies(search);
    }
  };

  return (
    <div className="row">
      <div className="input-field col s12">
        <input
          placeholder="search"
          type="search"
          className="validate"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyDown={handleKey}
        />
        <button
          className="waves-effect waves-light btn search-btn"
          onClick={() => getDBMovies(search)}
        >
          search
        </button>
      </div>
    </div>
  );
};

export default Search;
