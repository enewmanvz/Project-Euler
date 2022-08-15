//Summerize Start with 1 and 2, the 1st 10 terms are: 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, ...
// using Fibornacci sequence, not to excee 4 million, sum the even valued numbers.
//Examples : ie. 1+2=3, 2+3=5, 3+5=8, 5+8=13, 8+13=21 13+21=34....
//   Sum: 2+8+34=44
//Approach
// Approach 1.For Loop approach using the last two numbers
// Approach 2.Sum the multiples 
//Test

// function fibsSum(n) {
//     if ( n === 1 ) {
//         return 1;
//     }
//     if (n === 2 ) {
//         return 2;
//     }
//     let sum = fibsSum(n-1) + n;
//     return sum;
// }


// const fibonacci = n =>
//   Array.from({ length: n }).reduce(
//     (acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i),
//     []
//   );
// console.log(fibonacci(2)); 
// console.log(fibonacci(3)); 
// console.log(fibonacci(6));

// <script>

// Javascript program to find the sum of all the even-valued terms in
// the Fibonacci sequence which do not exceed
// given limit.

	// Returns sum of even Fibonacci numbers which are
	// less than or equal to given limit.
	function evenFibSum(limit)
	{
		if (limit < 2)
			return 0;
	
		// Initialize first two even Fibonacci numbers
		// and their sum
		let ef1 = 0, ef2 = 2;
		let sum = ef1 + ef2;
	
		// calculating sum of even Fibonacci value
		while (ef2 <= limit)
		{
			// get next even value of Fibonacci sequence
			let ef3 = 4 * ef2 + ef1;
	
			// If we go beyond limit, we break loop
			if (ef3 > limit)
				break;
	
			// Move to next even number and update sum
			ef1 = ef2;
			ef2 = ef3;
			sum += ef2;
		}
	
		return sum;
	}
	
// Function call
	
		let limit = 400;
		document.write(evenFibSum(limit));
	
// </script>
