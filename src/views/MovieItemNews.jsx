const MovieItemNews = ({ movies ,title ,startIndex, endIndex }) => {
  return (
    <div>
      <div className="movie-list-title">
        <span className="title">{title}</span>
        <span className="see-all">See All</span>
      </div>
      <div className="movie-list-news">
        {movies.slice(startIndex, endIndex).map((movie) => (
          <div className="movie-item-news">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`} alt="poster" />
            <div className="movie-description">
              <p>{movie.overview}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MovieItemNews;
