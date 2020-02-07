const months =[
    {numb: 0, name: 'January', shortName: 'Jan'},
    {numb: 1, name: 'February', shortName: 'Feb'},
    {numb: 2, name: 'March', shortName: 'Mar'},
    {numb: 3, name: 'April', shortName: 'Apr'},
    {numb: 4, name: 'May', shortName: 'May'},
    {numb: 5, name: 'June', shortName: 'Jun'},
    {numb: 6, name: 'July', shortName: 'Jul'},
    {numb: 7, name: 'August', shortName: 'Aug'},
    {numb: 8, name: 'September', shortName: 'Sep'},
    {numb: 9, name: 'October', shortName: 'Oct'},
    {numb: 10, name: 'November', shortName: 'Nov'},
    {numb: 11, name: 'December', shortName: 'Dec'},
];
const days =[
    {numb: 0, name: 'Monday', shortName: 'Mon'},
    {numb: 1, name: 'Tuesday', shortName: 'Tue'},
    {numb: 2, name: 'Wednesday', shortName: 'Wed'},
    {numb: 3, name: 'Thursday', shortName: 'Thu'},
    {numb: 4, name: 'Friday', shortName: 'Fri'},
    {numb: 5, name: 'Saturday', shortName: 'Sat'},
    {numb: 6, name: 'Sunday', shortName: 'Sun'},
];

const date = new Date();

export const getCurrentYear = () => {
    let year = date.getFullYear();
    return year;
}
export const getCurrentMonth = () => {
    let month = months[date.getMonth()];
    return month;
}
export const getMonthName = (monthNumber) => {
    if(typeof monthNumber !== 'number') throw Error(`variable : "${monthNumber}" should be a number.` );
    if(monthNumber<0||monthNumber>11) throw Error("variable should be between 0-11.");

    let month = months[monthNumber];
    return month;
}
export const getDayByDayNumber = (dayNumber) => {
    if(typeof dayNumber !== 'number') throw Error(`variable : "${dayNumber}" should be a number.` );
    if(dayNumber<0||dayNumber>6) throw Error("variable should be between 0-6.");

    let day = days[dayNumber];
    return day;
}
export const getDayByDate = (month, dayOfMonth, year) =>{
    let dateString;
    if(typeof month === 'number') if(month<0||month>11) throw Error("variable should be between 0-11."); else dateString = months[month].name + ' ' + dayOfMonth +',' + year;
    else if(typeof month === 'string') dateString = month + ' ' + dayOfMonth +',' + year;
    else throw Error(`variable : "${month}" is not a number or a string.` );

    let dayNumber = new Date(dateString).getDay();
    dayNumber = dayNumber===0 ? 6 : dayNumber-1;

    let day = days[dayNumber];
    return day;
}

export const getCurrentDay = () => {
    let dayNumber = date.getDay();
    dayNumber = dayNumber===0 ? 6 : dayNumber-1;
    let day = days[dayNumber];
    day['date'] = date.getDate();
    return day;
}
export const daysInMonth = (monthNumber, year) => {
    if(typeof monthNumber !== 'number') throw Error(`variable : "${monthNumber}" should be a number.` );
    if(monthNumber<0||monthNumber>11) throw Error("variable should be between 0-11.");
    
    if(typeof year !== 'number' && year) throw Error(`variable : "${year}" should be a number.` );

    year = year?year:getCurrentYear();

    let days = new Date(year, monthNumber+1, 0).getDate();
    return days;
}

export const daysInCurrentMonth = () => {
    let currentYear = getCurrentYear();
    let currentMonth = getCurrentMonth();

    let days = new Date(currentYear, currentMonth.numb+1, 0).getDate();
    
    return days;
}