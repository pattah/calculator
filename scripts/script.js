const calcDisplay = document.querySelector('.output');
calcDisplay.textContent = '0'

let num2 = ''

const add = (a, b) =>  a + b;
const subtract = (a, b) =>  a - b;
const multiply = (a, b) =>  a * b;
const divide = (a, b) => a / b;

//assigning calculator functions to operators' buttons //
  const buttonOperation = document.querySelectorAll('.keyButtonOperation').forEach(operator => {
    operator.addEventListener('click', () => {
      operator.classList.add('isDepressed');
      operator = operator.dataset.action;
      num2 = calcDisplay.textContent;
      if (operator === 'add') {
        return add;
      } if (operator === 'subtract') {
        return subtract;
      }
    
    
    
  });
  }) 


 //an event that make digits appear on the display // 
const buttons = document.querySelectorAll('.keyButton').forEach(button => {
button.addEventListener('click', () => {
  removeClass();
  num1 = button.textContent;
  displayedNum = calcDisplay.textContent;

    if (displayedNum === '0') {
      calcDisplay.textContent = num1;
  } else if (displayedNum === num2) {
      calcDisplay.textContent = num1
  } else  {
      calcDisplay.textContent = displayedNum + num1
  }
  
  });

});


const buttonEquals = document.querySelector('.keyButtonEquals');
buttonEquals.addEventListener('click', () => {
  num1 = calcDisplay.textContent;
  document.querySelectorAll('.keyButtonOperation').forEach(operator => {
  operator = operator.dataset.action
    if(operator === 'add') {
      calcDisplay.textContent = parseInt(num1) + parseInt(num2);
    } else if (operator === 'subtract') {
      calcDisplay.textContent = parseInt(num1) - parseInt(num2)
    }

  }); 
  });

   
  






// Clears the whole display with one click //
const buttonClear = document.querySelector('.keyButtonClear');
buttonClear.addEventListener('click', () => {
  calcDisplay.textContent = '0'
  // I will fill up the rest of the code here when I get done with the rest //
  
});

// Deletes a single number when you click a button //
function deleteInput() {
  const deleteButton = document.querySelector('.keyButtonDelete')
  deleteButton.addEventListener('click', () => {
    calcDisplay.textContent = calcDisplay.textContent.slice(0, -1);

  });
}
deleteInput()

//removes a selection of a operator after a second number is clicked //
function removeClass () {
  buttonRemove = document.querySelectorAll('.keyButtonOperation').forEach(button => {
  button.classList.remove('isDepressed')

  });
}