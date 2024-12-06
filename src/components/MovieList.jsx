import MovieCard from "./MovieCard";

function MovieList(props) {
  return (
    <div>
      <h1>Our Movies</h1>
      <div
        className="grid
       grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 container mx-auto"
      >
        {props.moviesToDisplay.map((item) => {
          return (
            <MovieCard
              key={item.id}
              title={item.title}
              rating={item.rating}
              description={item.description}
              posterUrl={item.posterUrl}
            />
          );
        })}
      </div>
    </div>
  );
}

export default MovieList;
