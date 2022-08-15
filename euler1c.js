// S -sum of multiples of 3 or 5 between 0 and 1000 non-inclusive

// E - sum of multiples of 3 or 5 below 10: [3,5,6.9] sum = 23
// sum of multiples of 3 or 5 below 20: [3,5,6,9,10,12,15,18] sum = 78

// A - Create an array with every number in the range
// reduce array, summing all multiples of 3 or 5

var sum = 0;
for (var x = 0; x < 1000; x++)
{
    if (x % 3 === 0 || x % 5 === 0)
    {
       sum += x;
    }
}
console.log(sum);


//T compare output to test cases
sum_multiples_of_3_or_5(10);
sum_multiples_of_3_or_5(20);
sum_multiples_of_3_or_5(1000);