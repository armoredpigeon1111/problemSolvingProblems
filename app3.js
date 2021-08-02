"use strict"

//Problem Solving Problems Part 3

//Problem 1

function runTargetNum(){
    let arrayOfNums = getUserArray();
    let targetSum = parseInt(prompt("What is the target sum?"));
    let setOfNums = sumNumsInArray(arrayOfNums, targetSum);
    console.log(`${setOfNums[0]} + ${setOfNums[1]} = ${targetSum}`);
}


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


function reverseString(enteredString){
    let reversedString = "";

    for(let i = enteredString.length -1; i >= 0; i--){
        reversedString += enteredString[i];
    }

    return reversedString;
}


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

runIncrementingSequence();