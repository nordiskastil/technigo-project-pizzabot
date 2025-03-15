// Start here

// Step 1 - Welcome and introduction
// Your code goes here
alert(
  `Welcome to our Javascript Pizzeria. Ready to order? - Click 'OK' to proceed.`
)

let person = prompt("Please enter your name", "Harry Potter");

if (person != null) {
  document.getElementById("demo").innerHTML =
  "Hi " + person + "welcome!";
}

// Step 2 - Food choice
let text;
let orderFood = prompt("What would you like to eat?");
switch(orderFood) {
  case "Pasta carbonara with extra bacon":
    text = "Good choice!";
    break;
  case "Spagetti bolognese":
    text = "A specialty of the house!";
    break;
  case "Pizza margarita":
    text = "Simply good!";
    break;
}


// Step 3 - Subtype choice
// Your code goes here

// Step 4 - Age
// Your code goes here

// Step 5 - Order confirmation
// Your code goes here
