// 2. Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

let myAge = 26;

let yourAge = prompt("enter your age");

let age = (myAge) - parseInt(yourAge);

let age1 = parseInt(yourAge) - (myAge);

let age22;


if (myAge < yourAge ) {
    age22 = "you are " + age1 + " older than me";
} else if (myAge > yourAge) {
    age22 = "you're " + age + " younger than me"
}



alert(age22)
