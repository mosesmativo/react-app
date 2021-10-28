
import React from 'react';
import '../App.css';
import Mainsection from '../components/Mainsection.js';
import Bannercontent from '../components/Bannercontent.js';
import background from "../images/tools.jpg";
import Slider from '../components/Slider';
import Carousel from 'react-bootstrap/Carousel';


function Home(){
  return (
    <>
    
    <Slider 
    sliderimage={background} 
    slidertitle="Musa To sleep" 
    slidercaption="Good day Tommorow"/>
   
    <Bannercontent content="Musa Success is near here!" subcontent="My sub Content is here"/>
    <Mainsection bg={background}/>
    </>
  );
}



export default Home;
