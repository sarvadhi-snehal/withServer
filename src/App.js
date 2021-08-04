<<<<<<< HEAD
import React, { useState, useEffect, useCallback } from 'react';

import MoviesList from './components/MoviesList';
import AddMovie from './components/AddMovie';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch('https://swapi.dev/api/films/');
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();

      const transformedMovies = data.results.map((movieData) => {
        return {
          id: movieData.episode_id,
          title: movieData.title,
          openingText: movieData.opening_crawl,
          releaseDate: movieData.release_date,
        };
      });
      setMovies(transformedMovies);
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

  function addMovieHandler(movie) {
    console.log(movie);
  }

  let content = <p>Found no movies.</p>;

  if (movies.length > 0) {
    content = <MoviesList movies={movies} />;
  }

  if (error) {
    content = <p>{error}</p>;
  }

  if (isLoading) {
    content = <p>Loading...</p>;
  }

  return (
    <React.Fragment>
      <section>
        <AddMovie onAddMovie={addMovieHandler} />
      </section>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>{content}</section>
=======
import React,{useState, useEffect, useCallback} from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [moviesList,setMovieList] = useState([]);
  const [isLoading,setIsLoading] = useState(false);
  const [error,setError] = useState(null)
  const fetchMOvieHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      let response = await fetch('https://swapi.dev/api/films')
      if(!response.ok){
        throw new Error("something went wrong")
      }
      let data = await response.json()

        let movieList = data.results.map(movie =>{
          return {
            id: movie.episode_id,
            title: movie.title,
            releaseDate: movie.release_date,
            openingText: movie.opening_crawl,
        }
    
        })
        setMovieList(movieList)
      
    }
    catch(error){
        setError(error.message)
   

    }
    setIsLoading(false)

  },[])
   let content = <h1>Click on button to get movies list.</h1>
    if(moviesList.length !== 0 ) content = <MoviesList movies={moviesList} />
   if(error) content = <h1>{error}</h1>
  if( isLoading) content = <h1>Loading...</h1>
  
useEffect(() => {
  fetchMOvieHandler()

},[fetchMOvieHandler])
  return (
    <React.Fragment>
      <section>
        <button onClick={fetchMOvieHandler}>Fetch Movies</button>
      </section>
      <section>
        {content}
      </section>
>>>>>>> 80a3c3ff6167ea766367904df829f1f541ebbde7
    </React.Fragment>
  );
}

export default App;
