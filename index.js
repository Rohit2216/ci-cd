const str = "rohit"
console.log(str)

const str2="chauhan"

console.log(str + " " + str2)



// for 3rd assignment


function add(a, b) {
    return a + b;
  }
  
  function subtract(a, b) {
    return a - b;
  }
  
  function multiply(a, b) {
    return a * b;
  }
  
  function divide(a, b) {
    if (b === 0) {
      throw new Error("Cannot divide by zero!");
    }
    return a / b;
  }
  
  console.log(add(3,4),subtract(9,3),multiply(3,4),divide(6,2))

