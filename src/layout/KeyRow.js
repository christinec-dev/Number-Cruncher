import React from 'react';

//this layout component will display the number of rows that will be used by the keypad component
const KeyRow = (props) => (
  <div className="keypad__row">
    {/*Individual properties can be accessed via props.<name_of_property> while nested components are accessed via props.children property access expression.*/}
    {props.children}
  </div>
);

//exports the component to be used in other files
export default KeyRow;