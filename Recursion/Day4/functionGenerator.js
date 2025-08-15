//fibonacci series using function generator

function fib(n){
    if(n==0){
        return 0
    }
    if(n==1){
        return 1
    }
    let last = fib(n-1)
    let slast = fib(n-2)

    return last + slast
}

var fibGenerator = function*(){
   let i=0;
   while(true){
     yield fib(i)
     i++;
   }
}

let generator = fibGenerator()
for (let i = 0; i < 7; i++) {
    //console.log(generator.next())
    
}

//without using recursion
// yield : yield keyword is used to pause and resume the function

var fibGenerator = function*(){
   let i=0;
   let fib = [0,1]
   while(true){
     if(i==0){
        yield 0
     }
     else if(i==1){
        yield 1
     }else{

         let cur = fib[i-1] + fib[i - 2]
         fib[i] = cur
         yield cur
     }
     i++
   }
}

let generator1 = fibGenerator()
for (let i = 0; i < 7; i++) {
    console.log(generator1.next())
    
}
