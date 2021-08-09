import React from "react";
import MoviesIndexItem from "./movies_index_item";
import { Swiper, SwiperSlide } from "swiper/react";
import GenreRow from "../genre/genre_row";
import "swiper/swiper.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/navigation/navigation.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/pagination/pagination.scss";
// import "./style.scss"

import SwiperCore, {
  Virtual,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Parallax,
  Zoom,
  Lazy,
  Controller,
  A11y,
  History,
  HashNavigation,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Thumbs,
} from "swiper";

SwiperCore.use([
  Virtual,
  Keyboard,
  Mousewheel,
  Navigation,
  Pagination,
  Scrollbar,
  Parallax,
  Zoom,
  Lazy,
  Controller,
  A11y,
  History,
  HashNavigation,
  Autoplay,
  EffectFade,
  EffectCube,
  EffectFlip,
  EffectCoverflow,
  Thumbs,
]);

class MoviesIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchMovies().then(() => this.props.fetchGenres());
    // this.props.fetchGenres();
  }

  render() {
    if (!this.props.movies || !this.props.genres || !this.props.genres.length) {
      return null;
    }

    const { movies, genres, fetchGenres } = this.props;
    return (
      <div className="browse-container" margin-top="2%">
        <div className="banner-wrapper">
          <div className="banner-video-wrapper">
            <video
              autoPlay
              muted
              loop
              src="https://app-bestflix-seeds.s3.us-west-1.amazonaws.com/dark_knight.mp4"
              width="100%"
              height="50%"
            ></video>
          </div>
          <div className="mute-button"></div>
          <div className="banner-details-container"></div>
        </div>
        <h1 className="browse-header">Browse</h1>
        <Swiper
          slidesPerView={5}
          loop={true}
          navigation={true}
          className="mySwiper"
        >
          <div className="row-wrapper">
            {movies.map((movie) => {
              return (
                <SwiperSlide key={movie.id}>
                  <MoviesIndexItem
                    movie={movie}
                    id={this.props.id}
                    addToList={this.props.addToList}
                    deleteFromList={this.props.deleteFromList}
                  />
                </SwiperSlide>
              );
            })}
          </div>
        </Swiper>
        <GenreRow fetchGenres={fetchGenres} genres={genres} />
      </div>
    );
  }
}

export default MoviesIndex;
