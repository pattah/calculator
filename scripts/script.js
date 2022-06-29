const calcDisplay = document.querySelector('.output');
calcDisplay.textContent = '0'
let total = 0 
let oper = ''
let num1 = ''
let num2 = ''

const add = (a, b) =>  a + b;
const subtract = (a, b) =>  a - b;
const multiply = (a, b) =>  a * b;
const divide = (a, b) => a / b;

//assigning calculator functions to operators' buttons //
const buttons = document.querySelectorAll('.keyButton').forEach(button => {
  button.addEventListener('click', () => {
    removeClass()
  if (calcDisplay.textContent == '0' || (num2 == '' && oper != '')){
      calcDisplay.textContent = ''
  }
  if (oper == '' || num1 != ''){   //to allow for bigger then 9 numbers
      calcDisplay.textContent += button.textContent;
  }else{
      calcDisplay.textContent = button.textContent;
  }
      
  if (num1 == '' || oper == '') {
      num1 = calcDisplay.textContent; 
  } else {
      num2 = calcDisplay.textContent; 
  } 
  
  });

 });

    document.querySelectorAll('.keyButtonOperation').forEach(operator => {
        operator.addEventListener('click', () => {
        oper = operator.dataset.action
        operator.classList.add('isDepressed')
    });
    });
    const equalButton = document.querySelector('.keyButtonEquals')
        equalButton.addEventListener('click', () => {
        switch (oper){
          case 'add':
              total = parseInt(num1) + parseInt(num2);
              break;
          case 'subtract':
              total = parseInt(num1) - parseInt(num2);
              break;
          case 'multiply':
              total = parseInt(num1) * parseInt(num2);
              break;
          case 'divide':
              total = parseInt(num1) / parseInt(num2);
              break;
        }
        calcDisplay.textContent = total;
        oper = ''
        num2 = '';
        num1 = total;
      });





// Clears the whole display with one click //
const buttonClear = document.querySelector('.keyButtonClear');
buttonClear.addEventListener('click', () => {
  calcDisplay.textContent = '0'
  num2 = ''
  num1 = ''
  oper = ''

  
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