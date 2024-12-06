import { useState } from "react";
import MovieList from "./components/MovieList";
import { movies } from "./movies";
import AddMovies from "./components/AddMovies";
import Filter from "./components/Filter";
function App() {
  const [ourMovies, setOurmovies] = useState(movies);
  const handleAddNewmovies = (new_movies) => {
    setOurmovies([...ourMovies, new_movies]);
  };
  return (
    <>
      <Filter />
      <AddMovies handleAddNewmovies={handleAddNewmovies} />
      <MovieList moviesToDisplay={ourMovies} />
    </>
  );
}

export default App;
