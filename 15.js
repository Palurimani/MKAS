function sumOfSquares(numbers) {
    return numbers.reduce((total, num) => total + (num * num), 0);
}


const numbers = [3, 5, 7, 9, 13];
console.log(sumOfSquares(numbers)); 
