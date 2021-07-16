import React from 'react'
import MoviesIndexItem from './movies_index_item';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";



import SwiperCore, {
  Pagination,Navigation
} from 'swiper/core';

SwiperCore.use([Pagination,Navigation]);

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    this.props.fetchMovies()
  };

  render () {
    return (

      <div className="browse-container">
        <h1 className="browse-header">Browse</h1>
            <div className="row-wrapper">
              {
                this.props.movies.map((movie, id) => {
                  return (
                    <Swiper slidesPerView={3} spaceBetween={30} slidesPerGroup={3} loop={true} loopFillGroupWithBlank={true} pagination={{
                      "clickable": true
                    }} navigation={true} className="mySwiper" key={id}>
                    <MoviesIndexItem movie={movie} key={movie.id}/>
                    </Swiper>
                    ) 
                  })
                }  
            </div>
      </div>
    )
  }
};

export default MoviesIndex;