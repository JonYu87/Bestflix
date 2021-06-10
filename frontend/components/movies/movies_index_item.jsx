import React from 'react';
import { Link } from 'react-router-dom'
import MovieShow from './movie_show';

class MoviesIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      poster: null,
      video: null
    }
  }

  render () {
    return (
      <div className="wrapping-div">
        <div className="carousel-container">
          <Link to={`/api/movies/${this.props.movie.id}`} className="item">
            <img src={this.props.movie.poster}/>
          </Link>
        </div>
      </div>
    )
  }
};

export default MoviesIndexItem;