
<JavaScript src= Scripts\StringAdd.js>

<JavaScript sync="" src= Scripts\StringAdd.js>

<src= Scripts\StringAdd.js>



// Example Script

```js
var stringAdd = (outPutVariableNames, inputStrings) => {
  let varsName = outPutVariableNames;
  let newString = inputStrings;
  let nameVar = () => {
    let var1 = varsName;
    return var1
  }
  let varX = nameVar();
  let stringsSum = varX += newString;
  return stringsSum;
}
console.log('1' + ' ' + stringAdd)
console.log('2' + ' ' + stringAdd())

console.log('2' + ' ' + stringAdd('Longform Discord Message: \n', 'helpppppp'));
```