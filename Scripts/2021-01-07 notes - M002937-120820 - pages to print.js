// 2021-01-07 notes - M002937-120820 - pages to print
// Listings + Pages to find them

var pPartCurrentScope = (scope, vals) => {
  // returns scope (page num)
  let scope = scope;
  let val = vals;
  let x = scope[val];
  return x;
};
var pPartCurrentRefs = (vals) => {
  let x = vals;
  return x;
}
var pPartOne = 'Page' + ' ' + pPartCurrentScope(MCNAINSURANCECOMPANY, [n]) + ' ' + '52';


// Servicing Prov //
  // this is the provider
  
  // format
  'num' + 'PROVIDER ALL CAPS'
  
  // correct num is:
    4 || 6
    // ie '1234'
    // ie '123456'
  // incorrect num is:
  '9999999' + 'ERROR PROVIDER'


// MCNA INSURANCE COMPANY
const MCNAINSURANCECOMPANY = {
  // "page num" + 'refs to Servicing Prov per page'
  1: 2,
  2: 2,
  4: 1,
  5: 1,
  6: 6,
  13: 1,
  15: 1,
  17: 1,
  20: 1,
  21: 1,
  22: 1,
  23: 2,
  30: 2,
  31: 1,
  32: 1,
  35: 2,
  36: 1,
  38: 2,
  39: 1,
  40: 1,
  41: 3,
  42: 3,
  44: 3,
  45: 6,
  46: 3,
  47: 2,
  49: 2,
  51: 2,
};

var test1 = ' ' + pPartCurrentScope(MCNAINSURANCECOMPANY, 1);