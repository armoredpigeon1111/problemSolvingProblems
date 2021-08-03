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
        leapYearsArray = calculateLeapYears(currentYear);
        console.log(leapYearsArray);
    }else{
        let nextLeapYear = getNextLeapYear(year);
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

function calculateLeapYears(year){
    let leapYear = year;
    let leapYearsArray = [];

    while(leapYearsArray.length < 20){
        leapYear += 4;
        leapYearsArray.push(leapYear);
    }
}


runLeapYearFinder();