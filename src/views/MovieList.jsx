import { Component } from "react";
import MovieController from "../controllers/MovieController";
import MovieItemFirstPoster from "./MovieItemFirstPoster";
import MovieItemNews from "./MovieItemNews";
import MovieCategories from "./MovieCategories";
const categories = [
  { title: "Movies", startIndex: 0, endIndex: 6 },
  { title: "Series", startIndex: 6, endIndex: 12 },
  { title: "Action", startIndex: 12, endIndex: 18 },
  { title: "SuperHero", startIndex: 3, endIndex: 9 },
];

let FirstPoster = [
  {
    id: 1,
    poster_path:
      "https://s3-alpha-sig.figma.com/img/5cc2/2206/646e04a4e67b588bb4403e9de9c16477?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GDiSrEOL~Oxi7ksjFBaGAbzAEcOneDk8rnqBl2pY4NjSmO5A1z7m8EWY~3zAwOPZ2XUlWZieYEH1cBEn7m0QhGc4Ps-eKyU02S6y45uYbLyZa7p5HWcpkor~DcPMx9YWGT1rEgSaMiTxZN-57Aq9QET-~Ub7rQlTDhDsGTQZqL7JmYUfBdCIpkjqU36MgUJ0UTsRT224YpqAGgir-THbVsD6EjiGFzQYybNa8w9c0Zso0f9VWiyIeKhYjZUY9bnwnPjMzkg8tHm-ux3FN7Qs7bRhMeizo~~-PK0-epgZQIUdWkZ9exNIy00RX9wmtP561HHfcHHFs96AeogFztcVJw__",
    title: "Black Adam",
    type: "Action",
  },
];

class MovieList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const movies = await MovieController.fetchMovies();
      this.setState({ movies, loading: false });
      console.log("Fetched movies:", movies);
    } catch (err) {
      console.error("Error fetching movies:", err);
      this.setState({ error: "Failed to fetch movies", loading: false });
    }
  };

  render() {
    const { movies, loading, error } = this.state;
    if (error) {
      return <h1>{error}</h1>;
    }
    if (loading) {
      return <h1>{loading}</h1>;
    }
    return (
      <div>
        <div className="movie-list">
          <MovieItemFirstPoster key={FirstPoster[0].id} Firstposter={FirstPoster[0]} />
        </div>
        {categories.map((category, index) => (
          <MovieCategories
            key={`${category.title}-${index}`}
            movies={movies}
            title={category.title}
            startIndex={category.startIndex}
            endIndex={category.endIndex}
          />
        ))}
        <MovieItemNews key={movies[0].id} movies={movies} title="News" startIndex={0} endIndex={4} />
      </div>
    );
  }
}

export default MovieList;
