const buttonNumber = document.querySelector('.number');
const operator = document.querySelector('.operand');
const dotButton = document.querySelector('.dot');
const resetButton = document.querySelector('.reset');
const resultButton = document.querySelector('.result');
const deleteButton = document.querySelector('.delete');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand'); 
const currentOperator = document.querySelector('.operator');


previousOperand.innerText = '0';
currentOperand.innerText = '0';
currentOperator.innerText = '+';