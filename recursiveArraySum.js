//write a recursive function that sums all items in an array of integers
//the array may or may not contain nested arrays of integers

//Example:
let arr0 =[]
let arr1 = [-9, 2, 3, -5, 20]; // => 11
let arr2 = [1,2,[3,4,[5]],6]; // =>21

function multiArraySum(arr, total=0){


    if(arr.length<=0){
        return total
    }

    //recurssive case
    let last = arr.pop()

    if(typeof last =="number"){
        console.log(`Adding ${last} to ${total}`)
        total += last
        return multiArraySum(arr,total)
    }
    else {
        console.log(`Recussively accessing the arrary ${last}`)
        total += multiArraySum(last)
        return multiArraySum(arr,total)
    }
}

let test0 =multiArraySum(arr0);
console.log(test0);

let test1 =multiArraySum(arr1);
console.log(test1)

let test2 =multiArraySum(arr2);
console.log(test2)