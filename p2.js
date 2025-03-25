 * @param {string} str - The input string to be reversed
 * @returns {string} The reversed string
 */
function reverseString(str) {
    return str.split('').reverse().join('');
}

/**
 * Counts the number of characters in a string
 * @param {string} str - The input string
 * @returns {number} The number of characters in the string
 */
function countCharacters(str) {
    return str.length;
}

/**
 * Capitalizes the first letter of each word in a sentence
 * @param {string} sentence - The input sentence
 * @returns {string} The sentence with each word capitalized
 */
function capitalizeWords(sentence) {
    return sentence.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

// Array Functions

/**
 * Finds the maximum value in an array of numbers
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The maximum value in the array
 */
function findMaximum(arr) {
    return Math.max(...arr);
}

/**
 * Finds the minimum value in an array of numbers
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The minimum value in the array
 */
function findMinimum(arr) {
    return Math.min(...arr);
}

/**
 * Calculates the sum of all elements in an array
 * @param {number[]} arr - The input array of numbers
 * @returns {number} The sum of all elements
 */
function sumArray(arr) {
    return arr.reduce((sum, current) => sum + current, 0);
}

/**
 * Filters an array based on a given condition
 * @param {any[]} arr - The input array
 * @param {function} condition - The filtering condition
 * @returns {any[]} The filtered array
 */
function filterArray(arr, condition) {
    return arr.filter(condition);
}

// Mathematical Functions

/**
 * Calculates the factorial of a given number
 * @param {number} n - The input number
 * @returns {number} The factorial of the input number
 */
function calculateFactorial(n) {
    if (n < 0) return undefined;
    if (n === 0 || n === 1) return 1;
    return n * calculateFactorial(n - 1);
}

/**
 * Checks if a number is prime
 * @param {number} num - The number to check
 * @returns {boolean} True if the number is prime, false otherwise
 */
function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

/**
 * Generates Fibonacci sequence up to a given number of terms
 * @param {number} n - The number of terms to generate
 * @returns {number[]} An array of Fibonacci sequence terms
 */
function generateFibonacciSequence(n) {
    if (n <= 0) return [];
    if (n === 1) return [0];
    if (n === 2) return [0, 1];

    const sequence = [0, 1];
    while (sequence.length < n) {
        const nextTerm = sequence[sequence.length - 1] + sequence[sequence.length - 2];
        sequence.push(nextTerm);
    }
    return sequence;
}

// Example Usage and Testing
console.log("String Manipulation Tests:");
console.log(reverseString("hello")); // Should output: "olleh"
console.log(countCharacters("JavaScript")); // Should output: 10
console.log(capitalizeWords("hello world")); // Should output: "Hello World"

console.log("\nArray Function Tests:");
const numbers = [5, 2, 8, 1, 9];
console.log(findMaximum(numbers)); // Should output: 9
console.log(findMinimum(numbers)); // Should output: 1
console.log(sumArray(numbers)); // Should output: 25
console.log(filterArray(numbers, num => num > 5)); // Should output: [8, 9]

console.log("\nMathematical Function Tests:");
console.log(calculateFactorial(5)); // Should output: 120
console.log(isPrime(7)); // Should output: true
console.log(isPrime(10)); // Should output: false
console.log(generateFibonacciSequence(8)); // Should output: [0, 1, 1, 2, 3, 5, 8, 13]
