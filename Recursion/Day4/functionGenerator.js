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
    console.log(generator.next())
    
}
