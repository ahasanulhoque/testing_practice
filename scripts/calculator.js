const Calculator = (a, b) => {
    const add = () => {
        return a + b;
    }

    const subtract = () => {
        return a - b;
    }

    const multiply = () => {
        return a * b;
    }

    const divide = () => {
        return a / b;
    }

    return { add, subtract, multiply, divide }
}

module.exports = Calculator;