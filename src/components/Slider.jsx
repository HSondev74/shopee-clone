import React from "react";
import "../App.scss";
import {
     carousel_1,
     carousel_2,
     carousel_4,
     carousel_5,
     carousel_vid,
} from "../images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const HeaderSlider = () => {
     let settings = {
          autoplay: true,
          autoplaySpeed: 3000,
          arrows: false,
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
     };

     return (
          <div className="slider">
               <div className="container">
                    <div className="slider-content overflow-x-hidden">
                         <Slider {...settings}>
                              <div className="slider-item">
                                   <img src={carousel_1} alt="Carousel POR" />
                              </div>
                              <div className="slider-item">
                                   <img src={carousel_2} alt="Carousel POR" />
                              </div>
                              <div className="slider-item">
                                   <img src={carousel_5} alt="Carousel POR" />
                              </div>
                              <div className="slider-item">
                                   <img src={carousel_4} alt="Carousel POR" />
                              </div>
                              <div className="slider-item">
                                   <video autoPlay muted="muted">
                                        <source
                                             src={carousel_vid}
                                             type="video/mp4"
                                        />
                                   </video>
                              </div>
                         </Slider>
                    </div>
               </div>
          </div>
     );
};

export default HeaderSlider;
