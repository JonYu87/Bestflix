import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/navigation/navigation.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/pagination/pagination.scss";
import SwiperCore, { Pagination, Navigation } from "swiper";
SwiperCore.use([Navigation, Pagination]);
class GenreRow extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchGenres();
  }

  render() {
    if (!this.props.genres) {
      return null;
    }
    const { genres } = this.props;
    return (
      <div>
        {genres.map((genre, i) => {
          return (
            <div>
              <h1 className="browse-header">{genre.genre}</h1>
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
                {genre.movies.map((movie) => {
                  return (
                    <SwiperSlide key={movie.id}>
                      <img src={movie.poster}></img>
                    </SwiperSlide>
                  )
                })}
              </Swiper>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GenreRow;
