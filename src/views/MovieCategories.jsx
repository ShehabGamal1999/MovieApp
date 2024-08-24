import MovieItem from "./MovieItem";

const MovieCategories = ({ movies, title, startIndex, endIndex }) => {
  return (
    <div>
      <div className="movie-list-title">
        <span className="title">{title}</span>
        <span className="see-all">See All</span>
      </div>
      <div className="movie-list">
        {movies.slice(startIndex, endIndex).map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};
export default MovieCategories;
