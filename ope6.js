// 6. Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
//    4 > 3 && 10 < 12 true
//    4 > 3 && 10 > 12 false
//    4 > 3 || 10 < 12 true
//    4 > 3 || 10 > 12 true
//    !(4 > 3) false
//    !(4 < 3) true
//    !(false) true
//    !(4 > 3 && 10 < 12) false
//    !(4 > 3 && 10 > 12) true
//    !(4 === '4') true

let x = 4;

let xy = "4";

let y = 3;

let w = 10;

let z =  12;

console.log(( x > y ) && (w < z ) )

console.log(( x > y ) && (w > z ) )

console.log(( x > y ) || (w < z ) )

console.log(( x > y ) || (w > z ) )

console.log(!(x > y))


console.log(!(x < y))

console.log(!( x > y ) && (w < z ) ) 
console.log(!( x > y ) && (w > z ) ) //    4 > 3 && 10 > 12 false

console.log(!(x === xy))

