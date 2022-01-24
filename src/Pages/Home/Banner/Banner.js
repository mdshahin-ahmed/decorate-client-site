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
        <img
          className="d-block w-100 carouselImage"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h1 className="text-uppercase">Crafted designs with beauty</h1>
            <button className="mb-5">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem" interval={1500}>
        <img
          className="d-block w-100 carouselImage"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h1 className="text-uppercase">For the celebration of life</h1>
            <button className="mb-5">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item className="carouselItem" interval={1500}>
        <img
          className="d-block w-100 carouselImage"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <div className="carouselCaption">
            <h1 className="text-uppercase">redefine your home</h1>
            <button className="mb-5">Shop Now</button>
          </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
