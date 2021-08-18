import React from 'react';
import ResultScreen from './ResultScreen';
import ComputeScreen from './ComputeScreen';

//this layout component will display the calculator as a whole by embedding the Result and Compute Screen
const MainScreen = (props) => (
  <section className="main-screen">
    {/*Individual properties can be accessed via props.<name_of_property> while nested components are accessed via props.children property access expression.*/}
    <ResultScreen> {props.result} </ResultScreen>
    <ComputeScreen> {props.equation} </ComputeScreen>
  </section>
);

//exports the component to be used in other files
export default MainScreen;