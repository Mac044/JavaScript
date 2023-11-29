// 7. Check if a day is weekend day or a working day. Your script will take day as an input.

// ```sh
//     What is the day  today? Saturday
//     Saturday is a weekend.

//     What is the day today? saturDaY
//     Saturday is a weekend.

//     What is the day today? Friday
//     Friday is a working day.

//     What is the day today? FrIDAy
//     Friday is a working day.

const day = prompt("What is the day today");

const day1 = "Saturday";

const day2 = "saturDaY";

const week = "Friday";

const week1 = "frIDay";

let ans;

// using else if to check if the day is weekday or weekend

if ( (day) == (day1) || (day) == (day2)) {
    ans = "Saturday is a weekend"
} else if ( (day) == (week) || (day) == (week1)){
    ans = "Friday is a working day"
}

alert(ans)