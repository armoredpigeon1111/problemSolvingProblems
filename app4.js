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



//PROBLEM 2 - Longest Palindromic Substring INCOMPLETE

function runLongestPalindromicSubstring(){
    let palindromString = "abcddcba";
    let palindromSubstring = checkStringForPalindrome(palindromString);
    
    console.log(palindromSubstring);
}


function checkStringForPalindrome(str){
    let longestPalindromSubstring = "";
    let forwardString = str;
    let backwardString = reverseString(str);

 
    for(let i = 0; i < str.length; i++){
        //figure out how to move to check first and second part of string for palindrome.

    }

    return longestPalindromSubstring;
}


//reverses string for comparison
function reverseString(enteredString){
    let reversedString = "";

    for(let i = enteredString.length -1; i >= 0; i--){
        reversedString += enteredString[i];
    }

    return reversedString;
}

//Checks if string is palindrome
function checkPalindrome(userString, reversedString){
    let isPalindrome = true;

    for(let i = 0; i < userString.length; i++){
        if(userString[i] != reversedString[i]){
            isPalindrome = false;
        }
    }

    return isPalindrome;

}

runLongestPalindromicSubstring();




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


//runGetDifference13();




//PROBLEM 5 - Check 3 numbers for same right most digit
function runCheck3Numbers(){
    let numArray = getUserNumbers();
    let matchingNums = getMatchingNums(numArray);
    
    if(matchingNums.length > 1){
        console.log(matchingNums);
    }else{
        console.log("No numbers with matching ones places.");
    }
}


//Gets numbers from user
function getUserNumbers(){
    let numbers = [];

    for(let i = 0; i < 3; i++){
        numbers.push(prompt("Please enter a positive integer: "));
    }

    return numbers;
}


//Finds numbers with matching ones places
function getMatchingNums(numArray){
    let numbers = [];

    for(let i = 0; i < numArray.length -1; i++){
        for(let j = i + 1; j < numArray.length; j++){
            if(numArray[i] % 10 === numArray[j] % 10){
                numbers.push(numArray[i]);
                numbers.push(numArray[j]);
            }
        }
    }

    numbers = removeDuplicates(numbers);    

    return numbers;
}

//Removes duplicate elements
function removeDuplicates(nums){
    let uniqueNumbers = [...new Set(nums)];
    return uniqueNumbers;
}

//runCheck3Numbers();




//PROBLEM 6 - Check for a and b separated by 3 places in string
function runCheckAandB(){
    let abString = prompt("Enter a string of characters to see if a and b are separated by 3 places: ").toLowerCase;
    let abBool = checkAB(abString);
    console.log(abBool);
}

//Checks for a and b being spaced by 3 in string
function checkAB(str){
    let isAB3 = false;

    for(let i = 0; i < str.length - 3; i++){
        if(str[i] === "a" && str[i+4] === "b"){
            isAB3 = true;
        }else if(str[i] === "b" && str[i+4] === "a"){
            isAB3 = true;
        }
    }

    return isAB3;
}

//runCheckAandB();




//PROBLEM 7 -check for equal numbers of p's and t's
function runCheckForEqualPAndT(){
    let userString = prompt("Enter a string to see if it has the same number of p's and t's: ").toLowerCase;
    let sameNumOfPsAndTs = checkEqualPT(userString);
    if(sameNumOfPsAndTs){
        console.log("There are the same number of p's and t's.")
    }else{
        console.log("There are NOT the same number of p's and t's.")
    }
     
}

function checkEqualPT(str){
    let pCount = 0;
    let tCount = 0;

    for(let i = 0; i < str.length; i++){
        if(str[i] === "p"){
            pCount++;
        }else if(str[i] === "t"){
            tCount++;
        }
    }

    if(pCount === tCount){
        return true;
    }else{
        return false;
    }
}

//runCheckForEqualPAndT();