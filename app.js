//console.log("Hello World!\n==========\n");
//console.log(
"Follow the steps in the README.md file to complete the exercises:\n==========\n";

// Exercise 1

let favNumber = 10;
let min = 1;
let max = 11;

let answer = prompt(`What is my favorite number between ${min} and ${max}?`);

answer = parseInt(answer);

if (isNaN(answer) || answer < 1 || answer > 11) {
  console.log(`You didn't give me a valid number between ${min} and ${max}.`);
} else {
  if (answer < favNumber) {
    console.log("too low");
  } else if (answer > favNumber) {
    console.log("too high");
  } else {
    console.log("Congratulations!");
  }
}

// Exercise 2

let birthMonth = prompt("What is your birth month?");

switch (birthMonth.toLowerCase()) {
  case "december":
  case "janaury":
  case "february":
    console.log("Winter");
    break;
  case "march":
  case "april":
  case "may":
    console.log("Spring");
    break;
  case "june":
  case "july":
  case "august":
    console.log("Summer");
    break;
  case "september":
  case "october":
  case "november":
    console.log("Fall");
    break;
  default:
    console.log("I don't recognize that month.");
}

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank Top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BL":
    color = "Black";
    break;
  case "BU":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
