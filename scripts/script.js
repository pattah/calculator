const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const calcDisplay = document.querySelector('.output');

calcDisplay.textContent = '0'


// Click events for every button on the calculator //
const buttonEquals = document.querySelector('.keyButtonEquals');
buttonEquals.addEventListener('click', () => {
  const action = buttonEquals.dataset.action;
  console.log(action)
});

const buttonClear = document.querySelector('.keyButtonClear');
buttonClear.addEventListener('click', () => {
  const action = buttonClear.dataset.action;
  console.log(action)
});
const deleteButton = document.querySelector('.keyButtonDelete')
deleteButton.addEventListener('click', () => {
  const action = deleteButton.dataset.action;
  buttons.removeChild(buttons)
  
});

const buttons = document.querySelectorAll('.keyButton').forEach(button => {
  button.addEventListener('click', () => {
   const action = button.dataset.action;
   const buttonContent = button.textContent;
   const displayedNum = calcDisplay.textContent;
   
  
   if (action) {
   if (displayedNum === "0") {
     calcDisplay.textContent = buttonContent;
    } else {
      calcDisplay.textContent = displayedNum + buttonContent;
      
   }
   
  }


  
  });
});



let buttonOperation = document.querySelectorAll('.keyButtonOperation').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    
   
  if (action === 'add' ||
  action === 'subtract' ||
  action === 'multiply' ||
  action === 'divide'
) {
  button.classList.add('isDepressed')


  
  
}
 console.log(button.classList)
});

});



