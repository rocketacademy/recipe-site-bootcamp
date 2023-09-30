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
