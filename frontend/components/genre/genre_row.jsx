import React from "react";
import { Swiper, SwiperSlide } from "swiper/swiper-react";

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
    return (
      
    )
  }
}