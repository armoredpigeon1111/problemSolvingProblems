"use strict"

//Title: Problem Solving Problems Part 2
//Author: Richard Fleming
//Date: August 02, 2021


//Problem 1 - Happy Numbers

function runHappyNumbers(){
    let userNum = prompt("Enter a positive number to see if it is happy: ");
    let numArray = makeUserNumAnArray(userNum);

}


function makeUserNumAnArray(num){
    let numArray = [];

    for(let i = 0; i < num.length; i++){
        numArray.push(num[i]);
    }

    return numArray;
}





runHappyNumbers();
