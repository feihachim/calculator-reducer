const SPLITTER = /(\d+(\.\d+)?)|([+x/-]+)/g;
const OPERATOR = /[+x/-]/;
const NUMBER = /\d/;

function filterExpression(expression) {
    const arrayCopy = expression.match(SPLITTER);
    for (let i = 0; i < arrayCopy.length; i += 1) {
        if (OPERATOR.test(arrayCopy[i]) && arrayCopy[i].length > 1 && !NUMBER.test(arrayCopy[i])) {
            if (arrayCopy[i].charAt(arrayCopy[i].length - 1) !== '-') {
                arrayCopy[i] = arrayCopy[i].charAt(arrayCopy[i].length - 1);
            } else {
                arrayCopy[i] = arrayCopy[i].substring(0, arrayCopy[i].length - 1);
                arrayCopy[i + 1] = `-${arrayCopy[i + 1]}`;
            }
        }
    }
    return arrayCopy.filter((element) => element !== '');
}

module.exports = filterExpression;
