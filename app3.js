"use strict"

//Problem Solving Problems Part 3

//Problem 1

function runTargetNum(){
    let arrayOfNums = getUserArray();
    let targetSum = parseInt(prompt("What is the target sum?"));
    let setOfNums = sumNumsInArray(arrayOfNums, targetSum);
    console.log(`${setOfNums[0]} + ${setOfNums[1]} = ${targetSum}`);
}


//adds numbers through loop to see if they equal target
function sumNumsInArray(numArray, target){
    let qualifyingNums = [];

    for(let i = 0; i < numArray.length - 1; i++){
        for(let j = i + 1; j < numArray.length; j++){
            if(parseInt(numArray[i]) + parseInt(numArray[j]) === target){
                qualifyingNums.push(numArray[i], numArray[j]);
                return qualifyingNums;
            }
        }
    }
}


//Prompts user for number of array elements and their values
function getUserArray(){
    let lengthOfArray = prompt("How many array elements are you adding?");
    let userArray = [];
    for(let i = 0; i < lengthOfArray; i++){
        userArray.push(parseInt(prompt("Enter a number: ")));
    }

    return userArray;
}

//runTargetNum();



//PROBLEM 2 - Palindrome

function runPalindromeChecker(){
    console.log("PROBLEM 4: Palindrome Checker."); //printing title to console

    let userString = prompt("Please enter a string to check if it is a palindrome: ");
    let stringReversed = reverseString(userString);
    let stringIsPanlindrome = checkPalindrome(userString, stringReversed);

    console.log("String is a palindrome: " + stringIsPanlindrome);

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


//runPalindromeChecker();




//PROBLEM 3 - Incrementing Sequence

function runIncrementingSequence(){
    let userSequence = getUserArray();
    let sortedArray = sortArray(userSequence);
    let sequenceIncrementing = checkIncrement(sortedArray);

    if(sequenceIncrementing){
        console.log(`The sequence ${sortedArray} is an incrementing sequence.`);
    }else{
        console.log(`The sequence ${sortedArray} is NOT an incrementing sequence.`);
    }
}


//Sorts array in ascending order
function sortArray(userArray){           
    userArray.sort(function(a, b){return a-b});
    return userArray;
}


//Checks if array increments by 1
function checkIncrement(sortedArray){
    let isIncrementingSequence = true;

    for(let i = 0; i < sortedArray.length -1; i++){
        if(sortedArray[i] + 1 !== sortedArray[i + 1]){
            return false;
        }
    }

    return isIncrementingSequence;
}

//runIncrementingSequence();




//Problem 4 - Positive and Negative Number Count

function runPosAndNegCount(){
    alert("Please enter positive and negative numbers into array.");
    let userArray = getUserArray();
    let countArray = countPosAndNeg(userArray);
    console.log(countArray);
}


function countPosAndNeg(userArray){
    let posNums = 0;
    let negNums = 0;
    let countOfNums = [];

    for(let i = 0; i < userArray.length; i++){
        if(userArray[i] < 0){
            posNums++;
        }else if(userArray[i] > 0){
            negNums++;
        }
    }

    countOfNums.push(posNums);
    countOfNums.push(negNums);

    return countOfNums;
}

//runPosAndNegCount();





//Problem 5 - String of Numbers, return Lowest and Highest


function runLowestHighest(){
    let numString = prompt("Enter numbers separated by spaces: ");
    let numArray = parseArray(numString);
    let sortedNumArray = sortArray(numArray);       //function in previous problem
    let highestAndLowestNums = getHighestAndLowestNums(sortedNumArray);
    console.log(highestAndLowestNums);
}


//turns string into array
function parseArray(numberString){      
    let numberArray = numberString.split(" ");
    return numberArray;
}


//gets first and last index of sorted array
function getHighestAndLowestNums(sortedNumberArray){
    let highestAndLowestArray = [sortedNumberArray[0], sortedNumberArray[sortedNumberArray.length-1]];
    return highestAndLowestArray;
}


//runLowestHighest();





//PROBLEM 6 - Email Validation ****INCOMPLETE

function runEmailValidation(){
    let userEmail = prompt("Please enter your email: ");
    let isValidEmail = true;
    let separatedEmail = splitEmail(userEmail, isValidEmail);
}

function splitEmail(email, isValidEmail){
    if(email.includes("@")){    
        let parsedEmail = email.split("@");
        return parsedEmail;
    }else{
        isValidEmail = false;

    }
}


function checkEmail(sepEmail){

}

function emailFalseSet(){

}


//runEmailValidation();





//PROBLEM 7 - Replace letters with numbers

function runLetterToNumber(){
    let userString = prompt("Please enter a string to encrypt: ").toLowerCase();
    let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "k", 
                        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                        "w", "x", "y", "z"];
    let numberString = getLetterNum(userString, alphabetArray);
    console.log(numberString);
}

function getLetterNum (enteredString, alphaArray){
    let numString = "";
    for(let i = 0; i < enteredString.length; i++){
        if(enteredString[i] != " "){
            for(let j = 0; j < alphaArray.length; j++){
                if(enteredString[i] === alphaArray[j]){
                    numString += (j + 1) + " ";
                    break;
                }
            }
        }
    }

    return numString;

}


runLetterToNumber();