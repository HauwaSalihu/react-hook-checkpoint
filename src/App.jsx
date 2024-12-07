import { useEffect, useState } from "react";
import MovieList from "./components/MovieList";
import { movies } from "./movies";
import AddMovies from "./components/AddMovies";
import Filter from "./components/Filter";
function App() {
  const [ourMovies, setOurmovies] = useState(movies);
  const [filteredMovies, setFilteredMovies] = useState([]);

  const handleAddNewmovies = (new_movies) => {
    let movies = JSON.parse(localStorage.getItem("movies"));
    localStorage.setItem("movies", JSON.stringify([...movies, new_movies]));
    setOurmovies([...movies, new_movies]);
    console.log(movies);
  };
  // console.log(ourMovies);
  useEffect(() => {
    let movieExist = localStorage.getItem("movies");
    // console.log(movieExist);

    if (movieExist === null) {
      localStorage.setItem("movies", JSON.stringify(ourMovies));
    } else {
      setOurmovies(JSON.parse(movieExist));
    }
  }, []);

  return (
    <>
      <Filter setOurmovies={setOurmovies} ourMovies={ourMovies} />
      <AddMovies
        ourMovies={ourMovies}
        handleAddNewmovies={handleAddNewmovies}
      />
      <MovieList moviesToDisplay={ourMovies} />
    </>
  );
}

export default App;
