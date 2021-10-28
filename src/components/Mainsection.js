import React from 'react';
import Form from '../components/Form.js';


function Mainsection({bg}) {
  return (
    <section className="form-area pt-105 pb-120">
     <div className="form-bg" style={{ backgroundImage: `url(${bg})` }}></div>
        <div className="container">
          <div className="row">
          <Form 
            type={{
              type: "email",
              role: "tab",
              placeholder: "name",
            }}
            clasStyle="form-control"
            title="Working"
            description="working"
          />
          </div>
     </div>
   </section>
  );
}


export default Mainsection;
