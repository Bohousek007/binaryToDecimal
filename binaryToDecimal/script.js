function binaryToDecimal(binaryString) {
  // Initialize decimal value and binary exponent
  let decimalValue = 0;
  let binaryExponent = 0;

  // Iterate through the binary string in reverse order
  for (let i = binaryString.length - 1; i >= 0; i--) {
      // Parse the binary digit
      const binaryDigit = parseInt(binaryString[i]);

      // Check if the binary digit is valid (0 or 1)
      if (binaryDigit === 0 || binaryDigit === 1) {
          // Calculate decimal value by adding the binary digit times 2 raised to the power of the binary exponent
          decimalValue += binaryDigit * Math.pow(2, binaryExponent);
          // Increment binary exponent
          binaryExponent++;
      } else {
          // Display error message for invalid binary digit
          console.error("Invalid binary digit found. Only 0 and 1 are allowed.");
          // Exit the function
          return;
      }
  }

  return decimalValue;
}

// Příklad použití
const dtoInput = "01012101"; // Zde je úmyslně chyba (číslo 2)
const dtoOutput = binaryToDecimal(dtoInput)

console.log(dtoOutput)