import React, { Component } from "react";
import { connect } from "react-redux";
import ErrorPage from "./ErrorPage";
import MovieCard from "./MovieCard";
class MoviesContainer extends Component {
  render() {
    const { movies } = this.props;
    let content = "";
    content =
      movies.Response == "True" ? (
        movies.Search.map((movie, index) => (
          <MovieCard key={index} movie={movie} />
        ))
      ) : (
        <ErrorPage />
      );

    return <div className="row">{content}</div>;
  }
}

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
  text: state.movies.text,
});

export default connect(mapStateToProps)(MoviesContainer);
