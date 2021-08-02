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

runTargetNum();