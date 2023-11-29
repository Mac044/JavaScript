// Write a code which can give grades to students according to their scores:

// - 80-100, A
// - 70-89, B
// - 60-69, C
// - 50-59, D
// - 0-49, F

const total = 100;

const score = prompt("enter your score");

const data = parseInt(score) - total;

let yourScore;

// writing code to give grade

if ( parseInt(score) > 79 ) {
    yourScore = "A"
} else if ( parseInt(score) > 69 ) {
    yourScore = "B"
}  else if (parseInt(score) > 59 ) {
    yourScore = "C"
} else if ( parseInt(score) > 49 ) {
    yourScore = "D"
} else if ( parseInt(score) > 0 ) {
    yourScore = "F"
}

alert(yourScore)
