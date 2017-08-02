// Conditional (ternary) Operatertor example
// ternary operators used as a shorcut for if statements
// condition ? expression1:expression2;

function getInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var integerR = getInt(1, 100);

// Value = 100. Checks integerR for greater than 100. Logs result.
function checkMoreThanValue(value) {(value > 100) ? console.log('More than 100'):console.log('Less than 100');}

// Value = 50. Checks intergerR for less than 50. Logs result.
function checkLessThanValue(value) {(value < 50) ? console.log('Less than 50'):console.log('More than 50');}

checkMoreThanValue(integerR);
checkLessThanValue(integerR);