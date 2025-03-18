
// Welcome and introduction
alert(
  `Welcome to our Javascript Pizzeria. Ready to order? - Click 'OK' to proceed.`
)

let name = prompt("What is your name?")

alert(
  "Hi " + name + " welcome!"
)

// Food choice
// Display a prompt with a menu of options
let orderFood = prompt("Please choose your food:\n1. Pizza\n2. Pasta\n3. Salad\n Enter the number of your choice:");

// Convert the user's input into an integer, number
orderFood = parseInt(orderFood);

// Determine which food the user choses and display a message
if (orderFood === 1) {
  alert("You have chosen: Pizza");
} else if (orderFood === 2) {
  alert("You have chosen: Pasta");
} else if (orderFood === 3) {
  alert("You have chosen: Salad");
} else {
  alert("Invalid choice. Please refresh and choose a valid option.");
}

// Subtype choice
let subTypeChoice;
let chosenFood = "";

if (orderFood === 1) {
  subTypeChoice = prompt("Please select a pizza:\n1. Pizza Margarita\n2. Pizza Fungi\n3. Pizza Hawaii\n Enter the number of your choice:");
  subTypeChoice = parseInt(subTypeChoice);
  chosenFood = subTypeChoice === 1 ? "Pizza Margarita" : subTypeChoice === 2 ? "Pizza Fungi" : subTypeChoice === 3 ? "Pizza Hawaii" : "";
} else if (orderFood === 2) {
  subTypeChoice = prompt("Please select a pasta:\n1. Pasta Carbonara\n2. Pasta Bolognaise\n3. Pasta Arabiata\n Enter the number of your choice:");
  subTypeChoice = parseInt(subTypeChoice);
  chosenFood = subTypeChoice === 1 ? "Pasta Carbonara" : subTypeChoice === 2 ? "Pasta Bolognaise" : subTypeChoice === 3 ? "Pasta Arabiata\n Enter the number of your choice:" : "";
} else if (orderFood === 3) {
  subTypeChoice = prompt("Please select a salad:\n1. Caesar Salad\n2. Green Salad\n3. Tuna Salad \n Enter the number of your choice:");
  subTypeChoice = parseInt(subTypeChoice);
  chosenFood = subTypeChoice === 1 ? "Caesar Salad" : subTypeChoice === 2 ? "Green Salad" : subTypeChoice === 3 ? "Tuna Salad" : "";
}

// Confirm chosen food
if (chosenFood) {
  alert(`You have chosen: ${chosenFood}`);
} else {
  alert("Invalid choice. Please refresh and choose a valid option.");
}

// Age & Pricing
let age = prompt("What is your age?");
let price;

if (age >= 18) {
  price = 16;
} else {
  price = 9;
}

// Confirmation
let confirmation = prompt(`One ${age >= 18 ? "adult" : "child"} size portion of ${chosenFood} will be prepared. That will be $${price}.\n\n To confirm, type "1 for Yes" or "2 for No"`);

if (confirmation === "1") {
  alert(`Thank you, ${name}! Your ${chosenFood} will be prepared shortly.`);
} else {
  alert(`No order today, ${name}. We hope to see you again soon!`);
}
