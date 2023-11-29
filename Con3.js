// 3. If a is greater than b return 'a is greater than b' else 'a is less than b'.
const a = prompt("enter a number")

const b = 3;

let c;

// checking if a is greater than b

if ( parseInt(a) > b) { 
    c = (a) + " is greater than " + (b)
} else if ( parseInt(a) < b ) {
    c = (b) + " is greater than " + (a);
} else {
    c = parseInt(a)+ " is equal to " + (b);
}
alert(c)