import { Component } from "react";
import { Row } from "react-bootstrap";
import MovieCard from "./MovieCard";
import LoadingCols from "./LoadingCols";

class Gallery extends Component {
  state = {
    movies: [],
    isLoaded: false,
  };
  fetchMovies = async () => {
    this.setState({ isLoaded: false });
    try {
      const response = await fetch(`http://www.omdbapi.com/?apikey=db0a967d&movie&s=${this.props.saga}`);
      if (response.ok) {
        this.props.setOk(true);
        const { Search } = await response.json();
        this.setState({ movies: Search });
      } else {
        this.props.setOk(response.ok);
        this.props.setStatus(response.status);
      }
    } catch (err) {
      console.log(err);
    } finally {
      this.setState({ isLoaded: true });
    }
  };
  componentDidMount() {
    this.fetchMovies();
  }
  render() {
    return (
      <>
        {this.state.isLoaded ? (
          <h4>{this.props.title}</h4>
        ) : (
          <div style={{ width: "200px", height: "24px" }} className="loading-card mb-2"></div>
        )}

        <Row xs={1} sm={2} md={4} xl={6} className="g-2 mb-4">
          {this.state.isLoaded ? (
            this.state.movies.map((movie, index) => {
              return index < 6 && <MovieCard key={movie.imdbID} movie={movie} />;
            })
          ) : (
            <LoadingCols />
          )}
        </Row>
      </>
    );
  }
}
export default Gallery;
