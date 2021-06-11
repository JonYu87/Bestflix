import React from 'react';
import { Link } from 'react-router-dom'
import MovieHover from './movie_hover';
import MovieShow from './movie_show';

class MoviesIndexItem extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      poster: null,
      video: null,
      isHovering: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }


  handleMouseEnter (e) {
    e.preventDefault();
    this.setState({isHovering: true})
  }

  handleMouseOut (e) {
    e.preventDefault();
    this.setState({isHovering: false})
  }

  render () {
    const {movie} =this.props
    return (
      <div className="wrapping-div">
        <div className="carousel-container">
          <Link to={`/api/movies/${movie.id}`} className="item">
            <img src={movie.poster} 
            onMouseEnter={e => this.handleMouseEnter(e)}
            onMouseOut={e => this.handleMouseOut(e)}
            />
          </Link>
        </div>
          <MovieHover movie={movie} isHovering={this.state.isHovering}/>
      </div>
    )
  }
};

export default MoviesIndexItem;