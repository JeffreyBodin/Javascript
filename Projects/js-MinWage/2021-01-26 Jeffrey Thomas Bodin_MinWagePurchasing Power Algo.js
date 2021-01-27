// 2021-01-26_2203 
// Jeffrey Thomas Bodin
// https://github.com/JeffreyBodin

// ---> MinWagePurchasing Power Algo <--- //

// Sources: 
  // BLS United States of America - I
    // https://download.bls.gov/pub/time.series/cu/cu.data.0.Current
    
    // https://download.bls.gov/pub/time.series/cu/



const { log } = require("console")
const fs = require("fs")
fs.readFile('https://download.bls.gov/pub/time.series/cu/cu.data.0.Current', callback(console.log(this) && console.log([this].entries), [this].filter() {return})

importScripts {}

fsync()


var MinimumWageCurrentValue = ' ' 
  // current MINIMUM WAGE ---> ^ GOES HERE 
  // actualized && in effect NOW
  // ie prior to proposed changes 
  var NumCurrent = Number(MinimumWageCurrentValue)
var MinimumWageProposedValue = ' '
  // future MINIMUM WAGE   ---> ^ GOES HERE
  // will be as proposed actualized && in effect FUTURE
  var NumProposed = Number(MinimumWageProposedValue)



nWage = () => {
  var medianWage = 'minimum wage'
  var inflationVarVal = ''
  var diffCheckFunc = () => {if (NumCurrent > NumProposed){return NumCurrent} else return NumProposed}
  var diffCheckFuncInverse = () => {if (NumCurrent > NumProposed){return NumProposed} else return NumCurrent}
  var rateOfChange = diffCheckFunc() - diffCheckFuncInverse()
  var inflationVar = () => {
    let inflationVar = inflationVarVal >= rateOfChange
    return inflationVar
  }
  var inflationVarBooleanConversionFunc = () => {
    let xFunc = () => {if (inflationVar() !== true){return 0} else return 1}
    let yFunc = () => {return xFunc()}
    let convertedToNumVal = yFunc() * [this]
    return convertedToNumVal
  }
  var floorWageCalcFunc = (floorValNum) => {
    var floor = floorValNum
    [this] === floor
    let xFunc = () => {if (floor <= inflationVarBooleanConversionFunc()){return medianWage + '++'} else {return medianWage + '--'}}
    return xFunc()
  }
  return floorWageCalcFunc
};



/*
jsMinWage - MinWagePurchasing Power Algo.js
2021-01-26
v.0.0.1-pre_alpha.1.0.0

MIT License

Copyright (c) 2021 Jeffrey Bodin
*/