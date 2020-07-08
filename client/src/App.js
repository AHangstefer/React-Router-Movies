import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {Router, Route, Link } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';
import Movie from './Movies/Movie';

const App = () => {
  const [savedList, setSavedList] = useState([]);
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies')
        .then(response => {
          setMovieList(response.data);
        })
        .catch(error => {
          console.error('Server Error', error);
        });
    }
    getMovies();
  }, []);

  const addToSavedList = movie => {
    setSavedList([...savedList, movie]);
  };

  return (
    <div>
      <SavedList list={savedList} />
      <div>Replace this Div with your Routes. One route for / that loads 
        the MovieList component. This component will need the movies injected 
        into it via props.
        one route that will take an id parameter after/movies/
         (ex: /movies/2, /movies/3 where the id is dynamic). 
         This route should load the Movie component.
      </div>
      <Router>
        <Link to="/MovieList">MovieList</Link>
        <Link to="/Movie">Movies</Link>
        <Route path="/MovieList"> component = {MovieList}</Route>
        <Route path="/Movie"> component = {Movie} </Route>
      </Router>
    </div>
  );
};

export default App;
