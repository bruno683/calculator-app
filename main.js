$(() => {
  
});

const key = document.getElementsByClassName('key');
const del = document.querySelector('del');
const result = document.querySelector('result');
const reset = document.querySelector('reset');
const output = document.getElementsByClassName('screen');
const dot = document.querySelector('dot');
const 

function displayNumber(){
  key.addEventListenner('click', function (e){
    value = e.target.value;
    output.innertext = value;
      //affiche la valeur de la touche sur l'écran
  });
};