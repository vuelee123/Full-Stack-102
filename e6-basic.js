// E6 Basic Assignment

// 1. Create two arrays of numbers called numbers1 and numbers
let numbers1 = [1,2,3,4,5];
let numbers2 = [6,7,8,9,10];

// 2. Use the spread operator to create an array called numbers that combines the elements of numbers1 and numbers2.
let numbers = [...numbers1, ...numbers2];
//console.log(numbers)

// 3. Define an arrow function called square that accepts a number as an argument and returns the square of the number.
let square = (n) => n*n

// 4. Use the map method to create a new array called squares that contains the squares of the numbers in the numbers array.
const squares = numbers.map(square);

// 5. Define an arrow function called isEven that accepts a number as an argument and returns true if the number is even, otherwise false.
let isEven = (n) => {
    if (n % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// 6. Use the filter method to create a new array called evenSquares that contains only the even squares from the squares array.
const evenSquares = squares.filter(n =>isEven(n));

// 7. Use destructuring assignment to extract the first and second elements of the evenSquares array into constants firstEvenSquare and secondEvenSquare.
const firstEvenSquare = evenSquares[0];
const secondEvenSquare = evenSquares[1];

// 8. Use a template literal to log the original numbers array, the squares array, the evenSquares array, and the extracted even squares.
console.log(`Numbers: ${numbers} ${squares} ${evenSquares} ${firstEvenSquare} ${secondEvenSquare}`)