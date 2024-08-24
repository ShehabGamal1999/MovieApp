class MovieModel {
  constructor(id, title, poster_path, vote_average, backdrop_path, overview) {
    this.id = id;
    this.title = title;
    this.poster_path = poster_path;
    this.vote_average = vote_average;
    this.backdrop_path = backdrop_path;
    this.overview = overview;
  }
}
export default MovieModel;
