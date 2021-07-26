import React from "react";
import MoviesIndexItem from "./movies_index_item";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import GenreRow from "../genre/genre_row";
import "swiper/swiper.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/navigation/navigation.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/pagination/pagination.scss";
// import "./style.scss"

import SwiperCore, { Pagination, Navigation } from "swiper";

SwiperCore.use([Navigation, Pagination]);

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies().then(() => this.props.fetchGenres());
    // this.props.fetchGenres();
  }

  render() {
    if (!this.props.movies || !this.props.genres || !this.props.genres.length){
      return null;
    }

    
    return (
      <div className="browse-container">
        <div className="banner-movie-container">
          {/* <video src=""></video> will have banner video here*/}
        </div>
        <h1 className="browse-header">Browse</h1>
        <div className="swiper-button-prev">&lt;</div>
        <div className="swiper-button-next">&gt;</div>
        <Swiper
          slidesPerView={5}
          spaceBetween={30}
          slidesPerGroup={3}
          loop={true}
          navigation={{
            nextEl: ".swiper-button-prev",
            prevEl: ".swiper-button-next",
          }}
          className="mySwiper"
        >
          <div className="row-wrapper">
            {this.props.movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MoviesIndexItem movie={movie} />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
       <GenreRow 
       fetchGenres={this.props.fetchGenres}
       genres={this.props.genres}/>
        
      </div>
    );
  }
}

export default MoviesIndex;
