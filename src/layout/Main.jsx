import React from "react";
import Movies from "../components/Movies";
import Search from "../components/Search";
import Preloader from "../components/Preloader";
import RadioBtn from "../components/RadioBtn";

const API_KEY = process.env.REACT_APP_API_KEY;

class Main extends React.Component {
  state = {
    DBMovies: [],
    typeFilter: "",
    loading: false,
  };

  getDBMovies = async (film) => {
    this.setState({ loading: true });
    if (film) {
      await fetch(
        `http://www.omdbapi.com/?apikey=${API_KEY}&s=${film}&type=${this.state.typeFilter}`
      )
        .then((response) => response.json())
        .then((data) => {
          this.setState({ DBMovies: data.Search });
        });
    }
    this.setState({ loading: false });
  };

  setFilter = (type) => {
    this.setState({ typeFilter: type });
  };

  // Render =================================
  render() {
    const { DBMovies, loading } = this.state;
    return (
      <main className="container content">
        <Search getDBMovies={this.getDBMovies} />
        <RadioBtn setFilter={this.setFilter} />
        {loading ? <Preloader /> : <Movies DBMovies={DBMovies} />}
      </main>
    );
  }
}
export { Main };
