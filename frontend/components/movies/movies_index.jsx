import React from 'react'
import MoviesIndexItem from './movies_index_item';

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMovies()
  };

  render () {
    return (

      <div>
      <ul>
        {
          this.props.movies.map(movie => {
            return <MoviesIndexItem movie={movie} key={movie.id}/>
          })
        }
      </ul>
    </div>
    )
  }
};

export default MoviesIndex;