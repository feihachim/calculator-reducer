import calculatorModule from '../utils/calculatorModule';

const initialState = {
    output: '0',
    fullOperation: '',
};

function calculatorReducer(state, action) {
    switch (action.type) {
    case 'CLEAR':
        return calculatorModule.clearDisplay(state);
    case 'DECIMAL':
        return calculatorModule.printDecimal(state, action);
    case 'DIGIT':
        return calculatorModule.printDigit(state, action);
    case 'EQUALS':
        return calculatorModule.printTotal(state);
    case 'OPERATOR':
        return calculatorModule.printOperator(state, action);
    case 'ZERO':
        return calculatorModule.printZero(state, action);
    default:
        return state;
    }
}

export { initialState, calculatorReducer };
