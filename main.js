

const del = document.querySelector('.del');
const result = document.querySelector('.result');
const reset = document.querySelector('.reset');
const output = document.querySelector('.screen');
const buttons = document.querySelectorAll('button');
const current = document.querySelector('.current-operand');

let display = '';
let previous = 0;
let operator = null;
current.innerText = 0;


window.onload = () => {
  for (button of buttons){
    button.addEventListener('click', manageKey);
  }
}

function manageKey(){
  let button = this.innerText;
  
  if(parseInt(button) >= 0 || button === '.'){
    console.log(button)
    display = (display === '') ? button.toString() : display + button.toString();
    current.innerText = display;
  }else{
    switch(button){
      case 'RESET':
        display = '';
        previous = 0;
        operator = null;
        current.innerText = 0;
        break;
      case 'DEL':
        
        break;
      case '+':
      case '-':
      case '*':
      case '/':
        previous = (previous === 0) ? parseFloat(display):  calculate(previous, parseFloat(display),operator);
          current.innerText = previous;
          operator = button;
          display = '';
        break;
      case '=':
        previous = (previous === 0) ? parseFloat(display):  calculate(previous, parseFloat(display),operator);
          current.innerText = previous;
          display = previous;
          previous = 0;
          display = '';
        break;
    }
  }
}
/**
 * 
 * @param {number} nb1
 * @param {number} nb2
 * @param {string} operator
 * @returns number
 */
function calculate(nb1, nb2, operator){
  nb1 = parseFloat(nb1);
  nb2 = parseFloat(nb2);
  if(operator === '+') return nb1 + nb2;
  if(operator === '*') return nb1 * nb2; 
  if(operator === '-') return nb1 - nb2;
  if(operator === '/') return nb1 / nb2; 
}


