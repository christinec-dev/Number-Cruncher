import React from 'react';

//this layout component will display the selected operators (inputs) upon computation by inhereting props (properties) from the parent (Calculator.js) component
const ComputeScreen = (props) => (
  <div className="compute-screen">
    {/*Individual properties can be accessed via props.<name_of_property> while nested components are accessed via props.children property access expression.*/}
    {props.children}
  </div>
);

//exports the component to be used in other files
export default ComputeScreen;