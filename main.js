// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
let usersNumber = ""
let numInputString =  document.getElementById('numberInputHere')

const saveValue = (numInput) => {
  usersNumber = numInput.value

  console.log(usersNumber.toString());

}

const numberToStringSubmit =()=>{
  console.log('submitted')

  let numNowString = document.createElement('LI');

  numNowString.innerText = usersNumber

  numInputString.appendChild(numNowString)
}

// Write a JavaScript program to convert a string to the number.
let numberString = ""
let stringInput =  document.getElementById('stringInputHere')

const saveValueForString = (stringInp) => {
  usersNumberString = stringInp.value

  console.log(usersNumberString.toString());

}

const stringToNumber =()=>{
  console.log('submitted')

  let stringNowNum = document.createElement('LI');

  stringNowNum.innerText = usersNumberString

  stringInput.appendChild(stringNowNum)
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String
const oneVar = true
const twoVar = null
const threeVar= undefined
const fourVar=5
const fiveVar= NaN
const sixVar= "hi there"

const dataTypeFinder = (inputVar) => {
  console.log('typeof variable: ', typeof inputVar )
}

let dataInput = ""
let dataOutputElement =  document.getElementById('dataInputHere')

const saveData = (dataInp) => {
  usersDataInput = dataInp.value

  console.log('Variable Type: ', typeof usersDataInput);

}

const dataIdentify =()=>{
  console.log('submitted')

  let dataItem = document.createElement('LI');

  dataItem.innerText = usersDataInput + ` is a ${typeof usersDataInput}` ; 
  dataOutputElement.appendChild(dataItem);
}

// Write a JavaScript program that adds 2 numbers together.

let firstNum = null
let secondNum = null
let operation = null
const saveFirstNumber = (num) => {
  firstNum = parseInt(num)  
}
const saveSecondNumber = (num) => {
  // "parseInt" is a built in function in JS that converts a string/word into a number
  secondNum = parseInt(num)
}

const add = (numA, numB) => {
  const sum = numA + numB
  return sum
}

const changeOperation = (chosenOperation) => {
  operation = chosenOperation
  console.log(operation)
}

const putResultInElement = (operationResults) => {

  document.getElementById("result").innerHTML = "Results: " + operationResults
}
const equals = () => {
  switch (operation) {
    case "addition":  putResultInElement(add(firstNum, secondNum)) 
    break;
    case "subtraction": putResultInElement(subtract(firstNum, secondNum)) 
    break;
    default: "Choose an operation"
  }
}

// Write a JavaScript program that runs only when 2 things are true.


const truthSeeker =(arg1, arg2)=> {

if (arg1 && arg2 == true) {
  console.log("Both are TRUE")
}
else {
  console.log("At least one is FALSE")
}
}


// Write a JavaScript program that runs when 1 of 2 things are true.

const atLeastOneTruth =(arg1, arg2)=> {

  if (arg1 || arg2 == true) {
    console.log("One of these is TRUE")
  }
}

// Write a JavaScript program that runs when both things are not true.  
const lieFinder =(arg1, arg2)=> {

  if (arg1 && arg2 !== true) {
    console.log("Both are False")
  }}

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
