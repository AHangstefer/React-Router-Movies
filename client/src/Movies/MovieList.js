import React from 'react';
import MovieCard from "./MovieCard";
import {Link} from "react-router-dom";

const MovieList = props => {
  return (
    <div className="movie-list">
      {props.movies.map(movie => (
        <MovieDetails key={movie.id} movie={movie} />
      ))}
    </div>
  );
}

function MovieDetails({ movie }) {
  return(
    <Link to ={`/Movies/${movie.id}`}><MovieCard movie={movie}
     
    /></Link>
  )
}

export default MovieList;
