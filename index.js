// Declare customerName in global scope
var customerName = "bob"; 

// Function to uppercase customerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// Function to set bestCustomer
function setBestCustomer() {
  bestCustomer = "not bob"; // Implicitly global (no `var`, `let`, or `const`)
}

// Function to overwrite bestCustomer
function overwriteBestCustomer() {
  bestCustomer = "maybe bob";
}

// Declare leastFavoriteCustomer as a constant
const leastFavoriteCustomer = "some initial value";

// Function to attempt changing leastFavoriteCustomer (should fail)
function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = "new value"; // This should cause an error
}
