import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CarouselComponent.css'

const CarouselComponent = () => {
  const settings = {
    autoplay: true,
    autoplaySpeed: 2000,
    infinite: true,
    arrows: true,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  const renderSlides = () => {
    const slides = [
      {
        imageSrc: '/Aerospace.jpg',
        alt: 'Airplane',
        caption: 'Aerospace',
      },
      {
        imageSrc: '/Marine.jpg',
        alt: 'Navy',
        caption: 'Marine',
      },
      {
        imageSrc: '/INDUSTRIAL.jpg',
        alt: 'Industry',
        caption: 'Industrial',
      },
    ];

    return slides.map((slide, index) => (
      <div className="carousel-slide" key={index}>
        <img className="carousel-image" src={slide.imageSrc} alt={slide.alt} />
        <div className="carousel-caption">{slide.caption}</div>
      </div>
    ));
  };

  return (
    <Slider {...settings} className="carousel absolute w-full ">
      {renderSlides()}
    </Slider>
  );
};

export default CarouselComponent;
