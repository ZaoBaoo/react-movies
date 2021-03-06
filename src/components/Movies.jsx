import React from "react";
import Movie from "./Movie";

function Movies(props) {
  const { DBMovies = [] } = props;
  return (
    <div className="movies">
      {DBMovies.map((movie) => (
        <Movie key={movie.imdbID} {...movie} />
      ))}
    </div>
  );
}

export default Movies;
