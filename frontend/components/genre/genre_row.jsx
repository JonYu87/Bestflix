import React from "react";
import { Link } from "react-router-dom"
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
                {genre.movies.map((movie, i) => {
                  return (
                    <SwiperSlide key={i}>
                      <Link to={`/api/movies/${movie.id}`}>
                      <img src={movie.poster}/>
                      </Link>
                    </SwiperSlide>
                  );
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
