//If function call itshelf twice or more then it is called multiple recursion

//Fibonacci series

function Fibonacci(n){
    if(n<=1){
        return n
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}

let nthTerm = Fibonacci(5)
console.log(nthTerm);

//series
for (let i = 0; i <= 5; i++) {
   let nthTerm =  Fibonacci(i)
   console.log(nthTerm);
   
}
