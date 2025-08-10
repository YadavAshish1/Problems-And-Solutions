

// Print Name N times 

function printname(name,n){
    if(n <= 0){
        return
    }
    console.log(name)
    return printname(name,n-1)
}

printname("Ashish Yadav", 5)     // TC : O(n) , SC: O(n)


//print 1 to n 

function printOneToN(i,n){
    if(i>n){
        return
    }
    console.log(i)
    return printOneToN(i+1,n)
}

printOneToN(1,5)


//print 1 to n using backtracking do not do i+1
function printOneToNUsingBacktracking(i,n){
    if(i<1){
        return
    }

    printOneToNUsingBacktracking(i-1,n)
    console.log("Backtracking:",i)
}

printOneToNUsingBacktracking(5,5)