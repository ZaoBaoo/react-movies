import React, { useState, useEffect } from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";
import RadioBtn from "../components/RadioBtn";

const API_KEY = process.env.REACT_APP_API_KEY;

const Main = () => {
  const [DBMovies, setDBMovies] = useState([]);
  const [typeFilter, setTypeFilter] = useState("");
  const [loading, setLoading] = useState(false);

  const getDBMovies = async (film) => {
    setLoading(true);
    if (film) {
      await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&s=${film}&type=${typeFilter}`
      )
        .then((response) => response.json())
        .then((data) => setDBMovies(data.Search))
        .catch((err) => console.log(err));
    }
    setLoading(false);
  };

  const setFilter = (type) => {
    setTypeFilter(type);
  };

  // useEffect(() => {
  //   getDBMovies();
  // }, []);

  // ==========================================
  return (
    <main className="container content">
      <Search getDBMovies={getDBMovies} />
      <RadioBtn setFilter={setFilter} />
      {loading ? <Preloader /> : <Movies DBMovies={DBMovies} />}
    </main>
  );
};
export { Main };
