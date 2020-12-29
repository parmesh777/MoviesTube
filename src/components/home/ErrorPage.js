import React from "react";
import { connect } from "react-redux";

const ErrorPage = (props) => {
  return (
    <div>
      {props.movies.Error == "Movie not found!" ? (
        <h4 className="container text-center">No movies or Series Found</h4>
      ) : (
        <h4 className="container text-center">Search for movies or Series </h4>
      )}
    </div>
  );
};
const mapStateToProps = (state) => ({
  text: state.movies.text,
  movies: state.movies.movies,
});
export default connect(mapStateToProps)(ErrorPage);
