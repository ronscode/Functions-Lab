
// You are given a ​function​, that calculate the result of ​numOne * numTwo * numThree​ (the product) is negative​ or ​positive​.
// Try to do this ​WITHOUT​ multiplying the 3 numbers.
// The input comes as parameters named ​numOne,​ ​numTwo,​ ​numThree​.

function wrongResult( numOne, numTwo, numThree​) {
  if (numOne < 0 && numTwo < 0 && numThree < 0) {
    console.log("Negative");
  } else if (numOne < 0 && numTwo < 0 && numThree > 0) {
    console.log("Positive");
  }
}