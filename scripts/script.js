const add = (num1, num2) => num1 + num2;
const subtract = (num1, num2) => num1 - num2;
const multiply = (num1, num2) => num1 * num2;
const divide = (num1, num2) => num1 / num2;


const calcDisplay = document.querySelector('.output');

calcDisplay.textContent = '0'
let num1;
let num2;
let operator



function operate () {
  let result;
if (operator === add) {
   result = num1 + num2;
} else if (operator === subtract) {
  result = num1 - num2;
} else if (operator === multiply) {
  result = num1 * num2;
} else if (operator === divide) {
  result = num1 / num2;
}
return result
}




// Click events for every button on the calculator //
function equals() {
const buttonEquals = document.querySelector('.keyButtonEquals');
buttonEquals.addEventListener('click', () => {
   if (num1 + num2) {
     return operate ()
   }
  
  });
   
}

equals();

const buttonClear = document.querySelector('.keyButtonClear');
buttonClear.addEventListener('click', () => {
  calcDisplay.textContent = '0'
  
});







const buttons = document.querySelectorAll('.keyButton').forEach(button => {
  button.addEventListener('click', () => {
   removeClass();
   const action = button.dataset.action;
   num1 = button.textContent;
   num2 = button.textContent;
   const displayedNum = calcDisplay.textContent;
   
   
   if (displayedNum === "0") {
     calcDisplay.textContent = num1;
    } else {
      calcDisplay.textContent = displayedNum + num1;  
   }
   
  });
  
  });
function deleteInput() {
const deleteButton = document.querySelector('.keyButtonDelete')
deleteButton.addEventListener('click', () => {
  
  calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);
});
  
}


const buttonOperation = document.querySelectorAll('.keyButtonOperation').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;

  if (action === 'add' && add ||
  action === 'subtract' && subtract ||
  action === 'multiply' && multiply ||
  action === 'divide' && divide
) {
  button.classList.add('isDepressed')
}
  });

});


function removeClass () {
  buttonRremove = document.querySelectorAll('.keyButtonOperation').forEach(button => {
    button.classList.remove('isDepressed')

  });
}


