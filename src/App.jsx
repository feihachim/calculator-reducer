import { useReducer } from 'react';
import { StateContext, DispatchContext } from './hooks/contexts';
import {
    Clear,
    Decimal,
    Digit,
    Display,
    Equals,
    Operator,
    Zero,
} from './components';
import './App.css';
import { initialState, calculatorReducer } from './hooks/reducer';

function App() {
    const [state, dispatch] = useReducer(calculatorReducer, initialState);

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                <div className="App">
                    <header>
                        <h1>Calculator Reducer</h1>
                    </header>
                    <div className="calculator">
                        <Clear />
                        <Decimal />
                        <Digit id="one" value="1" />
                        <Digit id="two" value="2" />
                        <Digit id="three" value="3" />
                        <Digit id="four" value="4" />
                        <Digit id="five" value="5" />
                        <Digit id="six" value="6" />
                        <Digit id="seven" value="7" />
                        <Digit id="eight" value="8" />
                        <Digit id="nine" value="9" />
                        <Display />
                        <Equals />
                        <Operator id="add" value="+" />
                        <Operator id="subtract" value="-" />
                        <Operator id="multiply" value="x" />
                        <Operator id="divide" value="/" />
                        <Zero />
                    </div>
                </div>
                <footer>
                    <p>
                        Fait par&nbsp;
                        <a rel="noreferrer" href="https://youssoufa-hachim.netlify.app/" target="_blank">Hachim Youssoufa</a>
                    </p>
                    <p>
                        D&apos;après le design de&nbsp;
                        <a rel="noreferrer" href="https://javascript-calculator.freecodecamp.rocks/" target="_blank">freecodecamp</a>
                    </p>
                </footer>
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
}

export default App;
