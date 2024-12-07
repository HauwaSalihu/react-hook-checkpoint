import { useState } from "react";
import { movies } from "../movies";

import { Select, Input } from "antd";
function Filter({ setOurmovies, ourMovies }) {
  const [titleFilter, setTitleFilter] = useState(""); // Text input filter
  // const [ourMovies, setOurmovies] = useState(movies);

  // get movies from local storage

  function getMoviesFromLocalStorage() {
    let movies = localStorage.getItem("movies");
    return JSON.parse(movies);
  }

  //to handle filtering movies by title
  // Filter by title
  const handleTitleChange = (e) => {
    // console.log("hello");

    const value = e.target.value.toLowerCase();
    // setTitleFilter(value);
    const filtered = getMoviesFromLocalStorage().filter((movie) =>
      movie.title.toLowerCase().includes(value)
    );
    setOurmovies(filtered);
  };
  //handle filtering by location
  const handleRating = (value) => {
    // console.log(value);

    switch (value) {
      case "5 stars":
        {
          let filteredMovies = getMoviesFromLocalStorage().filter(
            (item) => item.rating === value
          );
          setOurmovies(filteredMovies);
        }
        break;
      //filter for dogs of type female
      case "4 stars":
        {
          let filteredMovies = getMoviesFromLocalStorage().filter(
            (item) => item.rating === value
          );
          setOurmovies(filteredMovies);
        }
        break;
      case "3 stars":
        {
          let filteredMovies = getMoviesFromLocalStorage().filter(
            (item) => item.rating === value
          );
          setOurmovies(filteredMovies);
        }
        break;
      case "2 stars":
        {
          let filteredMovies = getMoviesFromLocalStorage().filter(
            (item) => item.rating === value
          );
          setOurmovies(filteredMovies);
        }
        break;
      case "1 stars":
        {
          let filteredMovies = getMoviesFromLocalStorage().filter(
            (item) => item.rating === value
          );
          setOurmovies(filteredMovies);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Input
        placeholder="Search by title"
        onChange={handleTitleChange}
        style={{ width: 200, marginRight: 10 }}
      />{" "}
      <Select
        placeholder="Select movie rating"
        style={{
          width: 150,
        }}
        onChange={handleRating}
        options={[
          {
            value: "5 stars",
            label: "5 stars",
          },
          {
            value: "4 stars",
            label: "4 stars",
          },
          {
            value: "3 stars",
            label: "3 stars",
          },
          {
            value: "2 stars",
            label: "2 stars",
          },
          {
            value: "1 stars",
            label: "1 stars",
          },
        ]}
      />
    </div>
  );
}

export default Filter;
