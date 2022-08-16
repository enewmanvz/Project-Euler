//write a recursive function that sums all items in an array of integers
//the array may or may not contain nested arrays of integers

//Example:
let arr1 = [-9, 2, 3, -5, 20]; // => 11
let arr2 = [1,2,[3,4,[5]],6]; // =>21

function multiArraySum(arr) {
    let total = 0;
    for(i=0;i<arr.length;i++){
        total += arr[i];
    }
    return total
}

let test1 =multiArraySum(arr1);
console.log(test1)