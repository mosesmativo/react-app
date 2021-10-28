import React from 'react';
import FormControl from 'react-bootstrap/FormControl';


function Custominputs({stylename, id, type, required, name}) {
  return (
    <div className="form-label-group">
    <FormControl id={id} {...type} 
    {...name}
    {...stylename} 
    {...required} 
    data-error="Staff ID No is required." 
    />
    <div className="help-block with-errors"></div>
  </div>
  );
}


export default Custominputs;
