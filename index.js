// Code your solution in this file!
const returnFirstTwoDrivers = (function(drivers){
  let arr =  [];
  arr.push(drivers[0]);
  arr.push(drivers[1]);
  return arr;
})

const returnLastTwoDrivers = (function(drivers){
  let arr = [];
  arr.push(drivers[drivers.length-2]);
  arr.push(drivers[drivers.length-1]);
  return arr;
})


const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = (function(term1){
  return function(term2){
    return term1 * term2;
  }
})

const fareDoubler = (function(num){
  return num * 2;
})

const fareTripler = (function(num){
  return num * 3;
})

const fetchSpecifiedDrivers = (function(arrayofDrivers, function2){
  return function2(arrayofDrivers);
})
