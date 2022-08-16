// // forloop version
// function countdow(num) {

//         for(let i= num; i>0; i--){
//             console.log(i)

//         }
    
// }

// countdown(5)


// //Recurssive version
// function countdown(num){
//     //base case - does not call itself
//     console.log(num)
//     //recursive case - calls itself
//     return countdown(num-1)
// }
// countdown(5)


//Refactored countdown to be a recurssive function version
function countdown(num){
    //console log - because that's what this function does
    console.log(num)
    //bse case - doe not call itselfrecursive case - calls itself
    if(num<=1){
        return 0
    }else {
        //recursive case - calls itself ie. return function countdown
        return countdown(num-1)
    }

}
countdown(5)
countdown(-2)