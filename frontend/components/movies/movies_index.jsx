import React from "react";
import MoviesIndexItem from "./movies_index_item";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "swiper/components/navigation/navigation.scss";
// import "swiper/components/pagination/pagination.scss";
// import 'swiper/swiper-bundle.css';

import SwiperCore, { Pagination, Navigation } from "swiper/core";

SwiperCore.use([Pagination, Navigation]);

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies();
  }

  render() {
    return (
      <div className="browse-container">
        <h1 className="browse-header">Browse</h1>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          navigation={true}
          className="mySwiper"
        >
          <div className="row-wrapper">
            {this.props.movies.map((movie) => {
              return (
                <SwiperSlide>
                  <MoviesIndexItem movie={movie} key={movie.id} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
      </div>
    );
  }
}

export default MoviesIndex;
