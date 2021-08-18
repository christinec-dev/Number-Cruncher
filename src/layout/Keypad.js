import React from 'react';
import KeyRow from './KeyRow'
import Button from './Button';

//this layout component will display the keypad for the calculator, as well as enable the buttons to be used via the Button & Calculator components
const KeyPad = (props) => (
  <section className="keypad">
    <KeyRow className="col-12">  
        {/* The onBtnPressed={props.onBtnPressed} enables the buttons to be used via the Button & Calculator components*/}
        <Button onBtnPressed={props.onBtnPressed}>C</Button>      
        <Button onBtnPressed={props.onBtnPressed}>&larr;</Button>
        <Button onBtnPressed={props.onBtnPressed}>%</Button>
        <Button onBtnPressed={props.onBtnPressed}>/</Button>
    </KeyRow>

    <KeyRow className="col-12">  
        {/* The onBtnPressed={props.onBtnPressed} enables the buttons to be used via the Button & Calculator components*/}
        <Button onBtnPressed={props.onBtnPressed}>9</Button>
        <Button onBtnPressed={props.onBtnPressed}>8</Button>
        <Button onBtnPressed={props.onBtnPressed}>7</Button>
        <Button onBtnPressed={props.onBtnPressed}>*</Button>
    </KeyRow>

    <KeyRow className="col-12">   
        {/* The onBtnPressed={props.onBtnPressed} enables the buttons to be used via the Button & Calculator components*/}
        <Button onBtnPressed={props.onBtnPressed}v>6</Button>
        <Button onBtnPressed={props.onBtnPressed}>5</Button>
        <Button onBtnPressed={props.onBtnPressed}>4</Button>
        <Button onBtnPressed={props.onBtnPressed}>-</Button>
    </KeyRow>

    <KeyRow>  
        {/* The onBtnPressed={props.onBtnPressed} enables the buttons to be used via the Button & Calculator components*/}
        <Button onBtnPressed={props.onBtnPressed}>3</Button>
        <Button onBtnPressed={props.onBtnPressed}>2</Button>
        <Button onBtnPressed={props.onBtnPressed}>1</Button>
        <Button onBtnPressed={props.onBtnPressed}>+</Button>
    </KeyRow>

    <KeyRow>  
        {/* The onBtnPressed={props.onBtnPressed} enables the buttons to be used via the Button & Calculator components*/}
        <Button onBtnPressed={props.onBtnPressed}>0</Button>
        <Button onBtnPressed={props.onBtnPressed}>.</Button>
        <Button onBtnPressed={props.onBtnPressed}>=</Button>
        <Button><strong>ON</strong></Button>
    </KeyRow>
  </section>
);

//exports the component to be used in other files
export default KeyPad;