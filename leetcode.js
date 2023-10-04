// ALWAYS MAKE NOTES DURING INTERVIEW USING THE // COMMENTS!!
var fizzBuzz = function (n) {
  let array = [];

  for (let i = 1; i < n + 1; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      array.push("FizzBuzz");
    } else if (i % 3 === 0) {
      array.push("Fizz");
    } else if (i % 5 === 0) {
      array.push("Buzz");
    } else {
      array.push(i.toString());
    }
  }
  return array;
};

var test = fizzBuzz(15);
console.log(test);

// Minimum and Maximum Number in an Array of 5 elements using 4 out of the 5 elements

function minMaxSum(arr) {
  // initialising minSum and maxSum to extreme values to ensure the for loop updates them based on the arr elements
  let minSum = Infinity; // the first iteration of the for loop will always update minSum with the first minSum of arr
  let maxSum = -Infinity;
  let totalSum = 0;

  // Calculate the total sum of all elements in the array
  for (let i = 0; i < arr.length; i++) {
    totalSum += arr[i];
  }

  // Iterate through the array to find the minimum and maximum sums
  for (let i = 0; i < arr.length; i++) {
    const currentSum = totalSum - arr[i];
    minSum = Math.min(minSum, currentSum);
    maxSum = Math.max(maxSum, currentSum);
  }

  console.log(minSum, maxSum);
}

const test2 = minMaxSum([1, 3, 5, 7, 9]);

// Time Conversion
function timeConversion(s) {
  // Write your code here
  if (s.includes("P")) {
    const [time, toDelete, toDelete2] = s.split("PM");
    let output = [time, toDelete, toDelete2];
    output.pop();
    output.pop();
    let finalOutput = output;

    let finalOutput2 = finalOutput[0];
    let [hours, minutes, seconds] = finalOutput2.split(":").map(Number);

    var finalOutput3 = [hours, minutes, seconds];
    if (finalOutput3[0] !== 12) {
      var test111 = Number(finalOutput3[0]) + 12;
    } else {
      var test111 = Number(finalOutput3[0]);
    }
    finalOutput3[0] = test111;

    // Use array destructuring and join with a colon
    const [first, second, third] = finalOutput3;
    var finalAnswer = `${String(first).padStart(2, "0")}:${String(
      second
    ).padStart(2, "0")}:${String(third).padStart(2, "0")}`;

    /** string.padStart(targetLength, padString) method to add leading zero, 0, to the element if it is single digit
     * @param string: The original string you want to pad
     * @param targetLength: The length you want the resulting string to be after padding
     * @param padString: The character you want to use for padding
     * String(first).padStart(2, "0"):
     1. String(first) converts the number 'first' to a string
     2. padStart(2, "0") then pads this string with leading zeros ("0") until the resulting string is 2 characters long
     */
  } else {
    const [time, toDelete, toDelete2] = s.split("AM");
    let output = [time, toDelete, toDelete2];
    output.pop();
    output.pop();
    let finalOutput = output;

    let finalOutput2 = finalOutput[0];
    let [hours, minutes, seconds] = finalOutput2.split(":").map(Number);

    var finalOutput3 = [hours, minutes, seconds];
    if (finalOutput3[0] !== 12) {
      var test111 = Number(finalOutput3[0]);
    } else {
      var test111 = Number(finalOutput3[0]) - 12;
    }
    finalOutput3[0] = test111;

    // Use array destructuring and join with a colon
    const [first, second, third] = finalOutput3;
    var finalAnswer = `${String(first).padStart(2, "0")}:${String(
      second
    ).padStart(2, "0")}:${String(third).padStart(2, "0")}`;
  }
  console.log(finalAnswer);
}

const test3 = timeConversion("12:05:45PM"); // Output should be 13:05:45
const test4 = timeConversion("12:05:45AM");

const test5 = timeConversion("12:00:00AM");
const test6 = timeConversion("12:45:54PM");

// Running Sum of 1D Array
