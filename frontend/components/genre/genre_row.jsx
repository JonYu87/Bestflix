import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/navigation/navigation.scss";
import "/home/jon/Bestflix/node_modules/swiper/components/pagination/pagination.scss";
import SwiperCore, { Virtual,Keyboard,Mousewheel,Navigation,Pagination,Scrollbar,Parallax,Zoom,Lazy,Controller,A11y,History,HashNavigation,Autoplay,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs} from "swiper"
SwiperCore.use([Virtual,Keyboard,Mousewheel,Navigation,Pagination,Scrollbar,Parallax,Zoom,Lazy,Controller,A11y,History,HashNavigation,Autoplay,EffectFade,EffectCube,EffectFlip,EffectCoverflow,Thumbs])
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
              {/* <div className="genre-swiper-button-prev">&lt;</div>
              <div className="genre-swiper-button-next">&gt;</div> */}
              <Swiper
                slidesPerView={5}
                loop={true}
                // navigation={{
                //   nextEl: ".genre-swiper-button-prev",
                //   prevEl: ".genre-swiper-button-next",
                // }}
                navigation={true}
                className="mySwiperGenre"
              >
                <div>
                  {genre.movies.map((movie, i) => {
                    return (
                      <SwiperSlide key={i}>
                        <Link to={`/api/movies/${movie.id}`}>
                          <img src={movie.poster} />
                        </Link>
                      </SwiperSlide>
                    );
                  })}
                </div>
              </Swiper>
            </div>
          );
        })}
      </div>
    );
  }
}

export default GenreRow;
