import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "slick-carousel/slick/slick.css"; // Import slick carousel CSS
import "slick-carousel/slick/slick-theme.css"; // Import slick carousel theme
import './pagesfinance.css';
import React from "react";
import Slider from "react-slick";

const SimpleSlider = () => {

      
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    nextArrow: null,  // This removes the next button
    prevArrow: null,  // If you want to remove the previous button as well
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  
  

  return (
    <Slider {...settings}>
      <div className="slider-item">
        <div className="card cd">
          <img src="./images/img-4.jpg" className="d-block w-500" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Behind the word mountains</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card cd">
          <img src="./images/img-3.jpg" className="d-block w-500" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Behind the word mountains</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card cd">
          <img src="./images/img-2.jpg" className="d-block w-500" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Behind the word mountains</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card cd">
        <img src="./images/img-4.jpg" className="d-block w-500" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Behind the word mountains</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card cd">
        <img src="./images/img-6.jpeg" className="d-block w-500" alt="..." />
        
          <div className="card-body">
            <h5 className="card-title">Behind the word mountains</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
      <div className="slider-item">
        <div className="card cd">
          <img src="./images/img_9.jpg" className="d-block w-500" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Behind the word mountains</h5>
            <p>
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
              Far far away, behind the word mountains, far from the countries
              Vokalia and Consonantia, there live the blind texts.
            </p>
          </div>
        </div>
      </div>
    </Slider>
  );
};

export default SimpleSlider;
