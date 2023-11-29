// Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

 let number = prompt("enter a number")

 let result = parseInt(number) % 2;

 let results;



//  check if the number is even
if(parseInt(number)% 2 == 0) {
    results = (number) + " is an even number"
} else if(parseInt(number) % 2 == 1){
    results = (number) + " is an odd number"
}

alert(results)