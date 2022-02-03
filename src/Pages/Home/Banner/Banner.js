import React from "react";
import { Carousel } from "react-bootstrap";
import img1 from "../../../images/1.jpg";
import img2 from "../../../images/2.jpg";
import img3 from "../../../images/3.jpg";
import "./Banner.css";

const Banner = () => {
  return (
    <Carousel className="">
      <Carousel.Item className="carouselItem" interval={1500}>
        <div className="d-block w-100 carouselImage carouselImage1"></div>
        <Carousel.Caption>
          <div className="carouselCaption">
            <div>
              <h1 className="text-uppercase">Crafted designs with beauty</h1>
              <button className="carouselButton">Shop Now</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem" interval={1500}>
        <div className="d-block w-100 carouselImage carouselImage2"></div>
        <Carousel.Caption>
          <div className="carouselCaption">
            <div>
              <h1 className="text-uppercase">For the celebration of life</h1>
              <button className="carouselButton">Shop Now</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem" interval={1500}>
        <div className="d-block w-100 carouselImage carouselImage3"></div>
        <Carousel.Caption>
          <div className="carouselCaption">
            <div>
              <h1 className="text-uppercase">redefine your home</h1>
              <button className="carouselButton">Shop Now</button>
            </div>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
