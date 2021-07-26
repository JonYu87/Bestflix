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
    console.log(this.props)
    this.props.fetchGenres();
  }

  render() {
    // if (!this.props.genres) {
    //   return null;
    // }
    return (
      <div>
        {this.props.genres.map((genre, i) => {
          return <h1 className="browse-header">{genre.genre}</h1>;
        })}
      </div>
    );
  }
}

export default GenreRow;