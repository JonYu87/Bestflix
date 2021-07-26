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
              {genre.movies.map(movie => {
                return <img src={movie.poster}></img>
              })}
            </div>
            )
          })} 
      </div>
    );
  }
}

export default GenreRow;