function firstNonRepeatingCharacter(string) {
  // Create an empty object to store character frequencies
  const charFrequencies = {};

  // Iterate over each character in the string and count their frequencies
  for (let char of string) {
    if (charFrequencies[char]) {
      charFrequencies[char]++;
    } else {
      charFrequencies[char] = 1;
    }
  }

  // Iterate over the string again to find the first non-repeating character
  for (let char of string) {
    if (charFrequencies[char] === 1) {
      return char;
    }
  }

  // If no non-repeating character is found, return null
  return null;
}

// Prompt the user to enter a string
const input = prompt("Enter a string");

// Call the function with theuser's input
const result = firstNonRepeatingCharacter(input);

// Display the result using an alert
alert(` ${result}`);