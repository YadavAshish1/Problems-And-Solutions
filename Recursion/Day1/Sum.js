// Find the sum of first n number using parameterized recursion
//parameterized sum: when we use extra parameter in function to get result using recursion that is called parameterized recursion


function sumUsingParameterizedRecursion(n, sum = 0){
     if(n<1){
        console.log("Sum By Parameterized Recursion",sum);
        return 
     }
    return sumUsingParameterizedRecursion(n-1, sum+n)
}
sumUsingParameterizedRecursion(6)

function sumUsingFunctionalRecursion(n){
       if(n == 0){
        return 0
       }

       return n + sumUsingFunctionalRecursion(n-1)
}

let sum = sumUsingFunctionalRecursion(6)

console.log("Sum By Functional Recursion",sum);


