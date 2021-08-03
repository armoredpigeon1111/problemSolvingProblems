"use strict"

//Title: Problem Solving Problems Part 2
//Author: Richard Fleming
//Date: August 02, 2021


//Problem 1 - Happy Numbers ***INCOMPLETE

function runHappyNumbers(){
    let userNum = "23";
    let sumOfSquares = getSumOfSquares(userNum);
    console.log(sumOfSquares);

    if(sumOfSquares != 1){
        
    }

}

function getSumOfSquares(num){
    let sum = 0;
    for(let i = 0; i < num.length; i++){
        sum += num[i] * num[i];
    }
    return sum;
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