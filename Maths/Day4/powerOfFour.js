// Given an integer n, return true if it is a power of four. Otherwise, return false.

// An integer n is a power of four, if there exists an integer x such that n == 4x.

 

// Example 1:

// Input: n = 16
// Output: true
// Example 2:

// Input: n = 5
// Output: false
// Example 3:

// Input: n = 1
// Output: true

//using recursion

function powerOfFour(n){
  if(n == 1){
    return true
  }
  n = n/4
  if(!Number.isInteger(n)){
    
    return false
  }
  
  return powerOfFour(n)
}

let result = powerOfFour(256)
console.log(result)

//using bit manupulation
function powerOfFourUsingBit(n){
    return n>0 && (n & (n-1)) === 0 && (n & 0x55555555) !==0  // 1. check number is greater than 0 , 2. check number is power of two , 3. check 1 is at odd position after binary conversion
    // return n>0 && (n & (n-1) === 0) && (n & 0xAAAAAAAA) ===0 
}

let res = powerOfFourUsingBit(16)
console.log(res);


