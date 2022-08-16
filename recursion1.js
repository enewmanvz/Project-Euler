// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

//sumNums(3); // => 6 (3 + 2 + 1)
//Summerize:
// funtion that takes a value and returns the summ of all number from 1 to the indicated value

//Example
sumNumsEx(3); // => 6 (3 + 2 + 1)
sumNumsEx(10); // => 55 (10 + 9 + 8 + 7 + 6 + 5 + 4 + 3 + 2 +1)
sumNumsEx(12); // => 78 (12 + 11 + 10 + 9 + 8 + 7 +6 +5 +4 + 3 + 2 + 1)

//Approach
function sumNumsEx(num, total=0){
    //base case: num is 0 or 1
    if(num <=1) {
        console.log (num)
        return num;
    }
    // recursive case: num must get closer to 0 or 1
    total = num + sumNumsEx(num-1);
    console.log (num)
    return total;
 
}

let baseTest0 = sumNumsEx(0);
console.log ("Total Sum:", baseTest0);

let test0 = sumNumsEx(3);
console.log ("Total Sum:", test0);

let test1 = sumNumsEx(10);
console.log ("Total Sum:", test1);

let test2 = sumNumsEx(12);
console.log ("Total Sum:", test2);