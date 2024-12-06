import { useState } from "react";
import { movies } from "../movies";

import { Select } from "antd";
function Filter() {
  const [ourMovies, setOurmovies] = useState(movies);
  //to handle filtering pets by type
  const handleChange = (value) => {
    switch (value) {
      //filter for dogs of type male
      case "got":
        let filteredMovies = movies.filter((item) => item.title === value);
        setOurmovies(filteredMovies);
        break;
      //filter for dogs of type female
      case "dragon":
        filteredMovies = movies.filter((item) => item.title === value);
        setOurmovies(filteredMovies);
        break;
      default:
        break;
    }
  };
  //handle filtering by location
  const handleRating = (value) => {
    switch (value) {
      case "5 star":
        {
          filteredMovies = movies.filter((item) => item.rating === value);
          setOurmovies(filteredMovies);
        }
        break;
      //filter for dogs of type female
      case "4 star":
        {
          let filteredMovies = movies.filter((item) => item.rating === value);
          setOurmovies(filteredMovies);
        }
        break;
      case "3 star":
        {
          let filteredMovies = movies.filter((item) => item.rating === value);
          setOurmovies(filteredMovies);
        }
        break;
      case "2 star":
        {
          let filteredMovies = movies.filter((item) => item.rating === value);
          setOurmovies(filteredMovies);
        }
        break;
      case "1 star":
        {
          let filteredMovies = movies.filter((item) => item.rating === value);
          setOurmovies(filteredMovies);
        }
        break;

      default:
        break;
    }
  };

  return (
    <div>
      <Select
        placeholder="Select movie title"
        style={{
          width: 150,
        }}
        onChange={handleChange}
        options={[
          {
            value: "got",
            label: "got",
          },
          {
            value: "dragon",
            label: "dragon",
          },
        ]}
      />{" "}
      <Select
        placeholder="Select movie rating"
        style={{
          width: 150,
        }}
        onChange={handleRating}
        options={[
          {
            value: "5 star",
            label: "5 star",
          },
          {
            value: "4 star",
            label: "4 star",
          },
          {
            value: "3 star",
            label: "3 star",
          },
          {
            value: "2 star",
            label: "2 star",
          },
          {
            value: "1 star",
            label: "1 star",
          },
        ]}
      />
    </div>
  );
}

export default Filter;
