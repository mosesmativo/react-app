import React from "react";
import Form from '../components/Form.js';
import Bannercontent from '../components/Bannercontent.js';

let latestcontent = 'For some time now, we have been accustomed to Customer Obsession as a way of service but now we are making it a way of life- a club of like-minded professionals that we can be proud of';

let description = 'A club with one mission: Giving our all, in all we do';

function About() {
  return(
  <>
    <Bannercontent content={latestcontent} subcontent={description}/>
    <Form></Form>
  </>
  )};

export default About;
