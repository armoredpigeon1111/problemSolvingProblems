"use strict"

//Problem Solving Problems Part 3

//Problem 1

function runTargetNum(){
    let arrayOfNums = [5, 17, 77, 50];
    let targetSum = 55;
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

runTargetNum();
