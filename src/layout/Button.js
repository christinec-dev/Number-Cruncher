import React from 'react';

//this button component will enable the onClick={props.onBtnPressed} function to work with the ui, as well as inheret props (properties) from the parent (Calculator.js) component
const button = (props) => {
    return (
      //Individual properties can be accessed via props.<name_of_property> while nested components are accessed via props.children property access expression.
      <button className="btn" onClick={props.onBtnPressed}>
            {props.children}
      </button>
  );
}

//exports the component to be used in other files
export default button;