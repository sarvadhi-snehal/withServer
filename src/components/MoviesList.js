import React from 'react';

import Movie from './Movie';
import classes from './MoviesList.module.css';

const MovieList = (props) => {
  return (
    <ul className={classes['movies-list']}>
      {props.movies.map((movie) => (
        <Movie
          key={movie.id}
          title={movie.title}
<<<<<<< HEAD
          releaseDate={movie.release}
=======
          releaseDate={movie.releaseDate}
>>>>>>> 80a3c3ff6167ea766367904df829f1f541ebbde7
          openingText={movie.openingText}
        />
      ))}
    </ul>
  );
};

export default MovieList;
