import { Component } from "react";
import { Col } from "react-bootstrap";

class MovieCard extends Component {
  render() {
    return (
      <Col className="d-flex justify-content-center">
        <div
          style={{
            maxHeight: 150,
            aspectRatio: "16/9",
          }}
          className="overflow-hidden text-center movie-card"
        >
          <img src={this.props.movie.Poster} alt="movie cover" className=" w-100" />
        </div>
      </Col>
    );
  }
}
export default MovieCard;
