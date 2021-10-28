import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';



function Slider({sliderimage, slidertitle, slidercaption}){
    return(
        <div className="container">
        <Carousel>
        <CarouselItem>
            <img
            className="d-block w-100"
            src={sliderimage}
            alt="First slide"
            />
            <Carousel.Caption>
            <h3>{slidertitle}</h3>
            <p>{slidercaption}</p>
            </Carousel.Caption>
        </CarouselItem>
    </Carousel>
    </div>
    );
}

export default Slider;