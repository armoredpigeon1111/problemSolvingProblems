"use strict"

//Title: Problem Solving Problems Part 2
//Author: Richard Fleming
//Date: August 02, 2021


//Problem 1 - Happy Numbers

function runHappyNumbers(){
    let userNum = prompt("Enter a positive number to see if it is happy: ");
    let sumOfNumbers = calculateNum(userNum);
    let isHappyNum = checkForHappyNum(sumOfNumbers, userNum);
    if(isHappyNum){
        console.log(`${userNum} is a happy number!`);
    }else{
        console.log(`${userNum} is NOT a happy number.`);
    }
}

function calculateNum(userNum){
    let sumOfSquares = 0;
    let numHolder = userNum;

    while(sumOfSquares != userNum && sumOfSquares != 1){
        for(let i = 0; i < userNum.length; i++){
            sumOfSquares += Math.pow(userNum[i], 2);
        }
        numHolder = sumOfSquares;
    }

    return sumOfSquares;

}

function checkForHappyNum(sumOfNum, userNum){
    if(sumOfNum === 1){
        return true;
    }else if(sumOfNum === userNum){
        return false;
    }else{
        calculateNum(String(sumOfNum));
    }
}




runHappyNumbers();





//Problem 2 - Prime Numbers

function runPrimeNumber(){
    let userNum = prompt("Enter a number: ");
    let isPrime = primeCheck(userNum);  //Returns Boolean

    if(isPrime){
        console.log(`${userNum} is prime.`);
    }else{
        console.log(`${userNum} is NOT prime.`);
    }

}

function primeCheck(num){
    let numIsPrime = true;
    
    if(num !== 1){
        for(let i = 2; i < num; i++){
            if(num % i === 0){
                numIsPrime = false;
            }
        }
    }

    return numIsPrime;

}

//runPrimeNumber();




//Problem 3 - Fibonacci

function runFibonacci(){
    let startingNumber = parseInt(prompt("Enter a number to begin Fibonacci sequence: "));
    let listOfFibonacciNums = fibonacciCalculator(startingNumber);
    printFibonacciSequence(listOfFibonacciNums, startingNumber);
}

function fibonacciCalculator(numStart){         //Calculates Fibonacci sequence from seed number
    let num1 = numStart;
    let num2 = numStart;
    let num3 = 0;
    let fibonacciNumbers = [numStart, numStart];

    while(num3 < 200){
        num3 = parseInt(num1) + parseInt(num2);
        fibonacciNumbers.push(num3);
        num1 = num2;
        num2 = num3;
    }

    return fibonacciNumbers;
}


function printFibonacciSequence(fibonacciArray, startNum){      //Prints the sequence to the console
    let fibonacciString = "";

    for(let i = 0; i < fibonacciArray.length; i++){
        if(i !== 0){
            fibonacciString += ", " + fibonacciArray[i];
        }else{
            fibonacciString += fibonacciArray[i];
        }
    }

    console.log(`The Fibonacci sequence starting with ${startNum} is: ${fibonacciString}.`);

}

//runFibonacci();