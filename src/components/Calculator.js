import React from 'react';
import MainScreen from '../layout/MainScreen';
import KeyPad from '../layout/Keypad';

//We use a Stateful (Class) Component because we are switching between states, ie. a calculator has an equation state which denotes the result state
class Calculator extends React.Component {

    //We set the initial state of the calculator to be clear && 0, ie it will display no inputs (computations) or results
    state = {
        equation: '',
        result: 0
      }

      //We declare the onBtnPressed Function that is to be used by the Button and Keypad Component. We use an arrow (=>) function to preserve binding
      onBtnPressed = evt => {
            //We define our equation state and the target of our pressed buttons which will be triggered upon an event execution
            let equation = this.state.equation;
            const btnPressed = evt.target.innerHTML;

            //If the clear (button with 'C' operator) button is pressed, the results screen will clear
            if(btnPressed === 'C') 
                return this.clear();
            
            //If a number button is pressed, the number will be added to the computation
            else if ((btnPressed >= '0' && btnPressed <= '9') || btnPressed === '.')  
                equation += btnPressed;

            //If an operator button is pressed, the operator will be added to the computation
            else if (['+', '-', '*', '/', '%'].indexOf(btnPressed) !== -1)
                equation += '' + btnPressed + '';

            //When the = operator is clicked, it will first check if the equation is valid via the try/catch block and if it is, it will then compute the result of the equation 
            else if (btnPressed === '=') {
                try {
                    //never use eval, I just couldn't get it to work with the newer alternatives so always replace it! :(
                    /* WILL REPLACE eval IN FUTURE WITH BETTER ALTERNATIVE!!! */ const evalResult = eval(equation);
                    const result = Number.isInteger(evalResult) ? evalResult : evalResult.toFixed(2);
                    this.setState({result});
                } 
                catch (error) {
                    alert('Invalid Mathematical Operation');
                }
            } 
            
            //We join everything together to compute final result
            else {
                equation = equation.trim();
                equation = equation.substr(0, equation.length -1);;
            }

            //When the calculation is complete and valid, we will then display the updated state of the results (equation)
            this.setState({equation : equation});
      }
      
      //When the calculation is not and valid, we will clear the screen
      clear() {
          this.setState({equation: '', result: 0});
      }
      
      //we return the screen results based on the computation by updating the state of the equation, screen, and binding the onBtnPressed function to the keypad
      render() {
        return (
            <main className="calculator">
                <MainScreen 
                    equation={this.state.equation} 
                    result={this.state.result}
                />
                <KeyPad onBtnPressed={this.onBtnPressed}/>
            </main>
        );
    }
}

//exports the component to be used in other files
export default Calculator;