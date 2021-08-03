"use strict"

//Problem Solving Problems Part 4
//Author: Richard Fleming
//Date: August 03, 2021


//PROBLEM 1 - Next 20 Leap Years
function runLeapYearFinder(){
    let currentYear = getCurrentYear();
    let isCurrentlyLeapYear = checkLeapYear(currentYear);
    let leapYearsArray = [];
    if(isCurrentlyLeapYear){
        leapYearsArray = calculateLeapYears(currentYear, leapYearsArray);
        console.log(leapYearsArray);
    }else{
        let nextLeapYear = getNextLeapYear(currentYear);
        leapYearsArray.push(nextLeapYear);
        leapYearsArray = calculateLeapYears(nextLeapYear, leapYearsArray);
        console.log(leapYearsArray);
    }
}

function getCurrentYear(){
    let currentDate = new Date();
    let currentYear = currentDate.getFullYear();

    return currentYear;
}

function checkLeapYear(year){
    if(year % 4 === 0){
        return true;
    }else{
        return false;
    }
}

function calculateLeapYears(year, leapYearsArray){
    let leapYear = year;

    while(leapYearsArray.length < 20){
        leapYear += 4;
        leapYearsArray.push(leapYear);
    }

    return leapYearsArray;
}

function getNextLeapYear(year){
    while(year % 4 !== 0){
        year++;
    }

    return year;
}


runLeapYearFinder();