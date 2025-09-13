/* =============== PART 2: JavaScript Functions =============== */

// Global variable (accessible everywhere)
let globalMessage = "Hello from global scope!";

// Function with parameter + return value
function square(num) {
  // Local variable (only exists inside this function)
  let result = num * num;
  return result;
}

// Function that modifies DOM to display square
function showSquare(value) {
  let squared = square(value); // call reusable function
  document.getElementById("function-output").innerText =
    `The square of ${value} is ${squared}.`;
}

// Function with parameter (string) + no return
function showGreeting(name) {
  // Demonstrates use of global + local variable
  let localMessage = `Hello, ${name}!`; // local variable
  document.getElementById("function-output").innerText =
    `${localMessage} (${globalMessage})`;
}

/* =============== PART 3: Combining CSS + JavaScript =============== */

// Select button and box
const triggerBtn = document.getElementById("trigger-btn");
const triggerBox = document.getElementById("trigger-box");

// Reusable function to toggle animation
function toggleAnimation(element, className) {
  // If class already exists, remove it (reset animation)
  element.classList.remove(className);

  // Re-trigger animation by forcing reflow
  void element.offsetWidth;

  // Add animation class again
  element.classList.add(className);
}

// Attach event listener to button
triggerBtn.addEventListener("click", function () {
  toggleAnimation(triggerBox, "animate");
});
