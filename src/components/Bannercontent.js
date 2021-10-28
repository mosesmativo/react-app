import React from 'react';
import Banner from '../images/tools.jpg';
import Carousel from 'react-bootstrap/Carousel';

function Bannercontent({content, subcontent}){
  return(
    <div className="mainwrapper">
    <section className="section topintro-info">
    <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mx-auto text-center">
              <p>{content}</p>
              <p>{subcontent}</p>
            </div>
          </div>
        </div>
      </section>
      </div>

  );
}

export default Bannercontent;
