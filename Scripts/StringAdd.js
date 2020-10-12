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

var exportobject = {
  stringAdd: stringAdd
}
module.exports =  exportobject;