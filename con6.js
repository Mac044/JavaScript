// 6. Check if the season is Autumn, Winter, Spring or Summer.
//    If the user input is :

//    - September, October or November, the season is Autumn.
//    - December, January or February, the season is Winter.
//    - March, April or May, the season is Spring
//    - June, July or August, the season is Summer

const season = prompt("enter a month"); 

const autum = "September";

const autum2 = "October";

const autum3 = "November";

const winter = "December";

const winter2 = "January";

const winter3 = "February";

const spring = "Marsh";

const spring2 = "April";

const spring3 = "May";

const summer = "June";

const summer2 = "July";

const summer3 = "August";

let season2;

// using else if to determine the season

if((season) == (autum) || (season) == (autum2)|| (season) == (autum3)) {
    season2 = "Autum";
} else if ((season) == (winter) || (season) == (winter2) || (season) == (winter3)) {
    season2 = "Winter";
} else if( (season) == (spring) || (season) == (spring2) || (season) == (spring3) ){
    season2 = "Spring"
} else { (season) == (summer) || (season) == (summer2) || (season) == (summer3)
    season2 = "Summer"
}


alert(season2)