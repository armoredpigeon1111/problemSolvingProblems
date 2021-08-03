"use strict"

//Problem Solving Problems Part 3
//Author: Richard Fleming


//Problem 1

function runTargetNum(){
    console.log("PROBLEM 1: Two array numbers that equal target"); //printing title to console
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
    console.log("PROBLEM 2: Palindrome Checker."); //printing title to console

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
    console.log("PROBLEM 3: Incrementing Sequence."); //printing title to console
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
    console.log("PROBLEM 4: Positive and Negative Number Count."); //printing title to console
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
    console.log("PROBLEM 5: String of Numbers, return lowest and highest."); //printing title to console
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
    console.log("PROBLEM 6: Email Validation."); //printing title to console
    let userEmail = prompt("Please enter your email: ");
    let separatedEmail = splitString(userEmail, "@");
    let isValidUsername = checkUsername(separatedEmail);
    let separatedDomain = splitString(separatedEmail[1], ".");
    let isValidDomain = checkDomain(separatedDomain);
    emailIsValid(isValidUsername, isValidDomain, userEmail);

}


//splits email at given character
function splitString(string, splitChar){
    if(string.includes(splitChar)){    
        let parsedString = string.split(splitChar);
        return parsedString;
    }else{
        alert(`${string} does not contain ${splitChar}`);
    }
}


//Checks Username Portion for validity
function checkUsername(emailPieces){
    if(emailPieces[0].length > 0){
        return true;
    }else{
        return false;
    }
}


//checks domain portion for validity
function checkDomain(domainPieces){
    if(domainPieces[0] > 0 && domainPieces[1] > 0){
        return true;
    }else{
        return false;
    }
}


//Prints whether email is valid or invalid
function emailIsValid(validUsername, validDomain, userEmail){
    if(validUsername && validDomain){
        console.log(`${userEmail} is a valid email.`);
    }else{
        console.log(`${userEmail} is an INVALID email.`);
    }
}


//runEmailValidation();





//PROBLEM 7 - Replace letters with numbers

function runLetterToNumber(){
    console.log("PROBLEM 7: Replace letters with numbers."); //printing title to console
    let userString = prompt("Please enter a string to encrypt: ").toLowerCase();
    let alphabetArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "h", "k", 
                        "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", 
                        "w", "x", "y", "z"];
    let numberString = getLetterNum(userString, alphabetArray);
    console.log(numberString);
}


//Iterates to find indices of given letter in alphabet array
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


//runLetterToNumber();






//PROBLEM 8 - briefcase lock ***INCOMPLETE

function runBriefcaseLock(){
    let currentLock = "3893";
    let targetLock = "5296";
    let numberTurnsToTarget = crackLock(currentLock, targetLock);
    console.log(numberTurnsToTarget);
}


function crackLock(currentLock, targetLock){
    let upNum = 0;
    let downNum = 0;
    let numOfTurns = 0;

    for(let i = 0; i < currentLock.length; i++){

        if(currentLock[i] < targetLock[i]){
            upNum = Math.abs(parseInt(currentLock[i]) - parseInt(targetLock[i]));
            downNum = Math.abs(parseInt(currentLock[i]) + 10 - parseInt(targetLock[i])); 

            if(upNum < downNum){
                numOfTurns += upNum;
            }else{
                numOfTurns += downNum;
            }

        }else{
            upNum = Math.abs(parseInt(currentLock[i]) - (10 + parseInt(targetLock[i])));
            downNum = Math.abs(parseInt(currentLock[i]) - parseInt(targetLock[i]));

            if(upNum < downNum){
                numOfTurns += upNum;
            }else{
                numOfTurns += downNum;
            }
        }         
    }

    return numOfTurns;
}

//runBriefcaseLock();




//Problem 10 - Reverse Reciprocal

function runReverseReciprocal(){
    console.log("PROBLEM 10: Reverse Reciprocal."); //printing title to console
    let enteredNum = prompt("Please enter a number to see reversed reciprocal: ");
    let reversedNum = reverseNumber(enteredNum);
    let reciprocal = getReciprocal(reversedNum);
    console.log(reciprocal);
}


//Reverses entered number
function reverseNumber(userNum){
    let num = "";

    for(let i = userNum.length-1; i >= 0; i--){
        num += userNum[i];
        
    }
    return num;
}


//Gets reciprocal of number
function getReciprocal(Number){
    let calculatedNum = 0; 
    calculatedNum = 1 / parseInt(Number);

    return calculatedNum;
}

//runReverseReciprocal();

