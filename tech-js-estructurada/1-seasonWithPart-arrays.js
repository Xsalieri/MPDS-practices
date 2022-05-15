const { Console } = require("console-mpds");
const console = new Console();


// 3-date / 1-seasonWithPart / Primavera 1ª estación natural del año

const DAYS_IN_MONTH = 30;
let day;

do{
    day = console.readNumber(`Escriba un día (1-30): `);
} while(day < 1 || DAYS_IN_MONTH < day)

let month;
const MONTHS_IN_YEAR = 12;

do{
    month = console.readNumber(`Escriba un mes (1-12): `);
} while(month < 1 || MONTHS_IN_YEAR < month)

let year;

do{
    year = console.readNumber(`Escriba un año (1-...): `);
} while(year < 1);

const DAYS_IN_YEAR = DAYS_IN_MONTH * MONTHS_IN_YEAR;
const SEASON_INI_DAY = 21;
const NATURAL_YEAR_INI_DAY = 2 * DAYS_IN_MONTH + SEASON_INI_DAY; // 81


let naturalSeasonYearDay =  (DAYS_IN_MONTH * (month-1) + day - NATURAL_YEAR_INI_DAY) % DAYS_IN_YEAR;

if(naturalSeasonYearDay < 0){
    naturalSeasonYearDay += DAYS_IN_YEAR;
}
const DAYS_IN_SEASON = 90;
const dayOfSeason = naturalSeasonYearDay % DAYS_IN_SEASON;
const numSeason = (naturalSeasonYearDay - dayOfSeason) / DAYS_IN_SEASON;


const PERIOD_DAYS = DAYS_IN_SEASON / 3;
const numMoment= (dayOfSeason - dayOfSeason % PERIOD_DAYS) / PERIOD_DAYS;

const season = ['primavera','verano','otoño','invierno'];
const seasonMoment = ['primeros','mediados','últimos'];

console.writeln(`El día ${day} del ${month} de ${year} cae a ${seasonMoment[numMoment]} de ${season[numSeason]}.`);