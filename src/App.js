import './App.css';
import './Test.js';
import images from './images/tools.jpg';
import logo from './images/customer-obsession-logo.png';
import background from "./images/customer-bg.jpg";

import React from 'react';

function Header(props) {
  return (
    <div className='container'>
    <header className='row'>
    <div className='col-sm-6'>
	     <h1>Main Heading Is Here {props.name}</h1>
    </div>
    <div className='col-sm-6'>
        <h1>{props.name} Was Is Here </h1>
    </div>
    </header>
    </div>
  );
}

function MainHeader(props) {
  return (
    <header className="co-header">
      <div className="menu-area">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="logo-area text-right"> <a href="index.html"><img src={props.logo} alt="logo" /></a> </div>
            </div>
            <div className="col-lg-6 text-left">
              <div className="co-menu-area">
                <ul>
                    <li><a href="terms.html" className="main-btn">Terms & Conditions</a></li>
                  </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

function Bannercontent(){
  return(
    <div className="mainwrapper">
    <section className="section topintro-info">
    <div className="container">
        <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-12 mx-auto text-center">
              <p>For some time now, we have been accustomed to <strong>“Customer Obsession”</strong> as a way of service but now we are making it a way of life- a club of like-minded professionals that we can be proud of</p>
              <p>A club with one mission:<br></br><strong>Giving our all, in all we do.</strong></p>
            </div>
          </div>
        </div>
      </section>
      </div>

  );
}

function Mainsection() {
  return (
    <section className="form-area pt-105 pb-120">
     <div className="form-bg" style={{ backgroundImage: `url(${background})` }}></div>
        <div className="container">
          <div className="row">
            <Form />
          </div>
     </div>
   </section>
  );
}
function Form() {
  return (
     <div className="col-xl-4 col-lg-6 col-md-8 mx-auto">
       <div class="formarea-block text-left">
         <h2>ARE YOU IN 100%?</h2>
         <h3>Please fill in the form below:</h3>
         <form className="contact-form">
           <div className="messages"></div>
            <div className="controls">
            <div class="row gx-4">
              <div class="col-md-12">
                <div class="form-label-group">
                  <input id="form_name" type="text" name="name" class="form-control" placeholder="Name" required="required" data-error="First Name is required." />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-label-group">
                  <input id="form_name" type="text" name="name" class="form-control" placeholder="Staff ID No." required="required" data-error="Staff ID No is required." />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-md-12">
                <div class="form-label-group">
                  <input id="form_name" type="text" name="name" class="form-control" placeholder="Division" required="required" data-error="Division is required." />
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-12">
                <div class="form-label-group">
                  <textarea id="form_message" name="message" class="form-control" placeholder="Briefly explain what you will do different" rows="5" required="required" data-error="Message is required."></textarea>
                  <div class="help-block with-errors"></div>
                </div>
              </div>
              <div class="col-12 text-left">
                <input type="submit" class="btn main-btn" value="Submit" />
              </div>
            </div>
            </div>
         </form>
       </div>
     </div>
  );
}

function Footer(props){
	return(
		<footer>
			<ul>
			 <li>Footer 1</li>
			<li>Footer 2</li>
			<li>Footer {props.year}</li>
			</ul>
		</footer>
	)
}




function App(){
  return (
    <div className="App">
    <MainHeader  logo={logo} />
    <Bannercontent />
    <Mainsection />
    </div>
  );
}



export default App;
