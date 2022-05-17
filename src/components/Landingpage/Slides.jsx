import React from "react";
import { Carousel } from "react-bootstrap";
import darkKnight from "../../images/slider-dark-knight.jpg";
import leagueOfLegends from "../../images/slider-league-of-legends.jpg";
import sonyGames from "../../images/slider-sony-games.jpg";
import deadCells from "../../images/slider-dead-cells.jpg";

const Slides = () => {
  return (
    <>
      <div className="mt-0">
        <Carousel fade>
          <Carousel.Item>
            <img className="d-block w-100" src={darkKnight} alt="First slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={leagueOfLegends}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={sonyGames} alt="Third slide" />
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block w-100" src={deadCells} alt="Fourth slide" />
          </Carousel.Item>
        </Carousel>
      </div>
    </>
  );
};

export default Slides;
