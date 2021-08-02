"use strict"

//Problem Solving Problems Part 1
//Author: Richard Fleming
//Date: July 30, 2021


//Problem 1 - Reverse a String

function runReverseString(){
    console.log("PROBLEM 1: Reverse a String."); //printing title to console

    let userString = prompt("Please enter a string: ");
    let stringReversed = reverseString(userString);
    console.log(stringReversed);
}

function reverseString(enteredString){
    let reversedString = "";

    for(let i = enteredString.length -1; i >= 0; i--){
        reversedString += enteredString[i];
    }

    return reversedString;
}

runReverseString();




//Problem 2 - Capitalize letter

function runFirstLetterCapitalization(){
    console.log("PROBLEM 2: Capitalize First Letters."); //printing title to console

    let userString = prompt("Enter a sentence to have every word capitalized: ");
    let capitalizedSentence = capitalizeFirstLetters(userString);
    console.log(capitalizedSentence);

}

function capitalizeFirstLetters(enteredString){
    let capitalizedString = "";
    
    
    for(let i = 0; i < enteredString.length; i++){
        if(i === 0){
            capitalizedString = enteredString[i].toUpperCase();
        }else if(enteredString[i] === " "){
            capitalizedString += " " + enteredString[i+1].toUpperCase();
            i++;
        }else{
            capitalizedString += enteredString[i];
        }
    }

    return capitalizedString;

}

runFirstLetterCapitalization();




//Problem 3 - Compress a string of Characters

function runCompressAString(){
    console.log("PROBLEM 3: Compress a String of Characters"); //printing title to console

    let stringToCompress = "aaabbbbbccccaacccbbbaaabbbaaa";
    let compressedString = compressString(stringToCompress);

    console.log(compressedString);

}

function compressString(givenString){
    let stringCompressed = "";
    let count = 1;

    for(let i =0; i<givenString.length; i++){
              
        let j = i + 1;
       
        while(givenString[i] === givenString[j]){
            count++;
            j++;
        }

        if(count > 1){
            stringCompressed += count + givenString[i];
            i += count -1;
            count = 1;
        }else{
            stringCompressed += givenString[i];
            count = 1;
        }
    }

    return stringCompressed;
}

runCompressAString();




//Problem 4 - Palindrome

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


runPalindromeChecker();