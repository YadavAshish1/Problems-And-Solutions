// Reverse array using recursion

function reverseArray(arr, i =0, j = arr.length-1){
    if(i >= j){
        return arr
    }
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
   
   return reverseArray(arr, i+1, j-1)
}

let reversedArray = reverseArray([2,1,7,4,3,9,10,8])
console.log("Reversed Array:", reversedArray);

//check a string is palindrome or not

function palindrome(str, i=0){
    if(i>=str.length/2){
        return true
    }

    if(str[i] !== str[str.length-i-1]){
        return false
    }
    return palindrome(str, i+1)
}

let isPalindrome = palindrome("SASASS")
console.log("Is String palindrome",isPalindrome);

