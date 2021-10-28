import React from 'react';
import Custominputs from './CustomInput';
import Button from 'react-bootstrap/Button'

function Form({type, clasStyle, title, description}) {
  return (
     <div className="col-xl-4 col-lg-6 col-md-8 mx-auto">
       <div className="formarea-block text-left">
         <h2>{title}</h2>
         <h3>{description}</h3>
         <form className="contact-form">
           <div className="messages"></div>
            <div className="controls">
            <div className="row gx-4">
              <div className="col-md-12">
                <Custominputs
                  stylename={{
                      className: "form-control",
                    }}
                    id="My-id"
                    type={
                      {
                        type: "text",
                        placeholder: "Me next great thing",
                      }
                    }
                    name={{
                      multiline: true,
                      rows: 5,
                    }}
                    required="required"
                />
                 <Custominputs
                  stylename={{
                      className: "form-control",
                    }}
                    id="My-id2"
                    type={
                      {
                        as: "textarea",
                        multiline: true,
                        rows: 5,
                        placeholder: "Me next Pro Level sasa",
                      }
                    }
                    name={{
                      name: "power",
                    }}
                    required="required"
                />
                  <Custominputs
                  stylename={{
                      className: "form-control",
                    }}
                    id="basic-url"
                    type={
                      {
                        ariaDescribedby: "basic-addon3",
                        placeholder: "@musa.com",
                      }
                    }
                    name={{
                      name: "power",
                    }}
                    required="required"
                />
              </div>
              <div className="col-12 text-left">
                <Button type="submit" className="btn main-btn" value="Submit">submit</ Button>
              </div>
            </div>
            </div>
         </form>
       </div>
     </div>
  );
}


export default Form;
