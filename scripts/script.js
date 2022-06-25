const calcDisplay = document.querySelector('.output');
calcDisplay.textContent = '0'
let num1 = ''
let num2 = ''
let operator = ''
const add = (a, b) =>  a + b;
const subtract = (a, b) =>  a - b;
const multiply = (a, b) =>  a * b;
const divide = (a, b) => a / b;

function operate(a, b) {
  buttonOperate = document.querySelectorAll('.keyButtonOperation').forEach(operator => {
  operator.addEventListener('click', () => {
  let action = operator.dataset.action

    switch(operator) {
      case(action = 'add'):
        return add(a, b)

      case(action = 'substract'):
        return subtract(a, b)

      case(action = 'multiply'):
        return multiply(a, b)

      case(action = 'divide'):
        return divide(a, b)
        
    }
    console.log(operator)
  });
  }); 
}

// Click events for every button on the calculator //
const buttons = document.querySelectorAll('.keyButton').forEach(button => {
button.addEventListener('click', () => {
  removeClass();
  operate();
  equals();
  num1 = button.textContent;
  num2 = button.textContent;
  displayedNum = calcDisplay.textContent;
  
  if (displayedNum === '0') {
    calcDisplay.textContent = num1;
    console.log(num1)
  } else {
    calcDisplay.textContent = displayedNum + num2;
  }

  });
});
 
// calculaction operation //
function equals() {
const buttonEquals = document.querySelector('.keyButtonEquals');
buttonEquals.addEventListener('click', () => {
  buttonOperate = document.querySelectorAll('.keyButtonOperation').forEach(operator => {
    let action = operator.dataset.action
    if(action)
    if(num1 + num2) {
      calcDisplay.textContent = add(num1, num2)
    }
  });
});
}


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

// Creates a selection of a operator after it was clicked //
const buttonOperation = document.querySelectorAll('.keyButtonOperation').forEach(button => {
 button.addEventListener('click', () => {
 button.classList.add('isDepressed')

 });
});

// Removes a operator's selection after a number is clicked //
function removeClass () {
  buttonRremove = document.querySelectorAll('.keyButtonOperation').forEach(button => {
  button.classList.remove('isDepressed')

  });
}


