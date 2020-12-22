let multiplesOf3And5 = [];
let numberToCompute = 1000;

for (var i = 0; i < numberToCompute; i++) {
    if (Number.isInteger(i/3) || Number.isInteger(i/5)) {
        multiplesOf3And5.push(i);
    }
}

console.log("Multiples of 3 and 5: ", multiplesOf3And5);

console.log(
    "Sum of multiples: ",
    multiplesOf3And5.reduce((a, b) => a + b, 0)
  )