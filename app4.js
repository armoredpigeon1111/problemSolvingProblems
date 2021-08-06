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


//runLeapYearFinder();



//PROBLEM 2 - Longest Palindromic Substring

function runLongestPalindromicSubstring(){
    let palindromString = "abcddcbarrrrr";
    let palindromSubstring = "";


}


//runLongestPalindromicSubstring();




//PROBLEM 3 - Get hours and minutes from number

function runGetHoursAndMinutes(){
    let userNumber = prompt("Please enter a number to convert to hours and minutes: ");
    let hours = 0;
    let minutes = 0;

    if(userNumber >= 60){
        hours = Math.floor(userNumber / 60);
        minutes = userNumber % 60;
    }else{
        minutes = userNumber;
    }

    console.log(`${userNumber} minutes is ${hours} hours and ${minutes} minutes.`)

}

//runGetHoursAndMinutes();



//PROBLEM 4 - Difference between number and 13

function runGetDifference13(){
    let userNumber = prompt("Enter a number: ");
    let difference = getDifference(userNumber);
    console.log(difference);
}


//Finds the difference between user number and 13 and gets twice the difference if it is greater than thirteen.
function getDifference(userNum){
    let difference = 0;

    //if number is greater than 13 return twice the difference
    if(userNum > 13){
        difference = (userNum - 13) * 2;
    }
    else{
        difference = 13 - userNum; 
    }

    return difference
}


runGetDifference13();