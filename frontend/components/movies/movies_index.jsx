import React from 'react'
import MoviesIndexItem from './movies_index_item';
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/pagination/pagination.scss"
import "swiper/components/navigation/navigation.scss"
// import 'swiper/swiper-bundle.css';

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
                <Swiper slidesPerView={5} spaceBetween={30} slidesPerGroup={1} loop={true} pagination={{
                  "clickable": true
                }} navigation={true} className="mySwiper">
                {this.props.movies.map(movie => {
                  return (
                    <SwiperSlide>
                    <MoviesIndexItem movie={movie} key={movie.id}/>
                    </SwiperSlide>
                    ) 
                  })}
                  </Swiper>
            </div>
      </div>
    )
  }
};

export default MoviesIndex;