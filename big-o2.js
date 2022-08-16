//Summerize Start with 1 and 2, the 1st 10 terms are: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// using Fibornacci sequence, not to excee 4 million, sum the even valued numbers.
//Examples : ie. 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21 13+21=34....
//   Sum: 2+8+34=44
//Approach
// Approach 1.For Loop approach using the last two numbers
// Approach 2.Sum the multiples 
//Test

function getFirst(arr){
    console.log(arr[0])
}
function getAll(arr){
    let sum = 0;
    for(i=0;i<arr.length;i++){
        sum += arr[i];
    }
    return sum;
}
console.time()
test1=[null]
test2=[...Array(1000000)]

// console.time('fetFirst @ length 1')
// getAll(test1)
// console.timeEnd('getFirst @ length 1')

// console.time('fetFirst @ length 1 million')
// getAll(test2)
// console.timeEnd('getFirst @ length 1 million')

console.time('fetFirst @ length 1')
getAll(test1);
console.timeEnd('getFirst @ length 1')

console.time('fetFirst @ length 1 million')
getAll(test2);
console.timeEnd('getFirst @ length 1 million')