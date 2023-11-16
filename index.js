// Prompt the user for a list of integers separated by commas.
const userInputString = prompt(
    "Please enter some integers separated by commas.",
    "vanilla,vanilla,vanilla,strawberry,coffee,coffee"
  );
  //
  function FroyoFlavors(userInput) {
    // Split the user input by comma
    const flavorsArray = userInput.split(",");
  
    // Remove any whitespace from the flavors
    const trimmedFlavorsArray = flavorsArray.map((flavor) => flavor.trim());
  
    return trimmedFlavorsArray;
  }
  
  // Example usage
  const userInput = "vanilla,vanilla,vanilla,strawberry,coffee,coffee";
  const flavorsArray = FroyoFlavors(userInput);
  console.log("Parsed froyo flavors:", flavorsArray);
  const observedFlavors = {};

// Function to add a flavor to the observed flavors object
function addObservedFlavor(flavor) {
  if (!observedFlavors[flavor]) {
    observedFlavors[flavor] = 0;
  }
  observedFlavors[flavor]++;
}

// Example usage
addObservedFlavor('vanilla');
addObservedFlavor('vanilla');
addObservedFlavor('strawberry');
addObservedFlavor('coffee');
addObservedFlavor('coffee');

console.log(observedFlavors);
