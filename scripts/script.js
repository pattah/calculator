const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;


const calcDisplay = document.querySelector('.output');

calcDisplay.textContent = '0'


// Click events for every button on the calculator //
function equals() {
const buttonEquals = document.querySelector('.keyButtonEquals');
buttonEquals.addEventListener('click', () => {
  const buttons = document.querySelectorAll('.keyButton').forEach(button => {
   const buttonContent = button.textContent;
   const displayedNum = calcDisplay.textContent; 
  
  });
   

  
  


  });
}



const buttonClear = document.querySelector('.keyButtonClear');
buttonClear.addEventListener('click', () => {
  calcDisplay.textContent = '0'
  
});







const buttons = document.querySelectorAll('.keyButton').forEach(button => {
  button.addEventListener('click', () => {
   removeClass();
   
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

const deleteButton = document.querySelector('.keyButtonDelete')
deleteButton.addEventListener('click', () => {
  
  calcDisplay.textContent.slice(0, -1);
});
  

const buttonOperation = document.querySelectorAll('.keyButtonOperation').forEach(button => {
  button.addEventListener('click', () => {
    const action = button.dataset.action;
    const buttonContent = button.textContent;
   const displayedNum = calcDisplay.textContent;
    
   
  if (action === 'add' && add ||
  action === 'subtract' && subtract ||
  action === 'multiply' && multiply ||
  action === 'divide' && divide
) {
  button.classList.add('isDepressed')
  
}





  });

});
console.log (buttonOperation)

function removeClass () {
  buttonRremove = document.querySelectorAll('.keyButtonOperation').forEach(button => {
    button.classList.remove('isDepressed')

  });
}


