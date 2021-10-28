import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import CarouselItem from 'react-bootstrap/CarouselItem';
import Img from 'react-bootstrap/Image';


function SliderItems({sliderimage, slidertitle, slidercaption}){
    return(
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

    );
}

export default SliderItems;