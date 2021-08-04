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
    </React.Fragment>
  );
}

export default App;
