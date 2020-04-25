import React from 'react';
import Slider from "react-slick";

export default function Welcome() {
  const settings = {
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  const vids = [6, 7, 8, 10, 11, 12, 14, 20, 21, 33, 39, 56, 67, 76, 80];

  const renderCarouselImages = () => {
    const images = [];

    for (let i = 1; i < 94; i++) {
      let item;
      if (vids.includes(i)) {
        item = (
          <video autoPlay muted>
            <source src={`src/assets/photos/${i}.m4v`} type="video/mp4" />
            <source src={`src/assets/photos/${i}.webm`} type="video/webm" />
          </video>
        );
      } else {
        item = (
          <img className="carousel-img" src={`src/assets/photos/${i}.jpg`} />
        );
      }

      images.push(
        <div className="carousel-img-container" key={i}>
          {item}
        </div>
      );
    }

    return images;
  }

  return (
    <div className="mv-welcome">
      <div className="welcome">Welcome to Project Akash</div>
      <div className="covid-free">100% COVID-free</div>

      <div className="separator"></div>

      <div className="house-container">
        <img src="src/assets/images/house-drawing.png" alt="House" />
      </div>

      <div className='header-carousel'>
        <Slider {...settings}>
          {renderCarouselImages()}
        </Slider>
      </div>
    </div>
  );
}
