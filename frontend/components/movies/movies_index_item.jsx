import React from "react";
import { Link, Redirect } from "react-router-dom";
import MovieHover from "./movie_hover";
import MovieShow from "./movie_show";

class MoviesIndexItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      poster: null,
      video: null,
      isHovering: false,
    };
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.addToList = this.addToList.bind(this);
    this.deleteListItem = this.deleteListItem.bind(this);
  }

  addToList(e) {
    this.props.addToList({
      movie_id: this.props.movie.id,
      user_id: this.props.id,
    });
  }
  deleteListItem(e) {
    this.props.deleteFromList({
      movie_id: this.props.movie.id,
      user_id: this.props.id,
    });
  }

  handleMouseEnter(e) {
    e.preventDefault();
    this.setState({ isHovering: true });
  }

  handleMouseOut(e) {
    e.preventDefault();
    this.setState({ isHovering: false });
  }

  render() {
    const { movie } = this.props;
    return (
      <div className="wrapping-div">
        <div className="carousel-container">
          <span>
            <Link to={`/api/movies/${movie.id}`}>
              <i className="far fa-play-circle"></i>
            </Link>
          </span>
          <Link to={`/api/movies/${movie.id}`} className="item">
            <img
              src={movie.poster}
              onMouseEnter={(e) => this.handleMouseEnter(e)}
              onMouseOut={(e) => this.handleMouseOut(e)}
            />
          </Link>
          <div className="overlay d-flex align-items-center justify-content-center">
            <i
              onClick={this.deleteListItem}
              className="fas fa-minus-circle"
            ></i>

            <i onClick={this.addToList} className="fas fa-plus-circle"></i>
          </div>
        </div>
        <MovieHover movie={movie} isHovering={this.state.isHovering} />
      </div>
    );
  }
}

export default MoviesIndexItem;
