function removeDuplicates(numbers) {
    return numbers.filter((num, index) => numbers.indexOf(num) === index);
}


const numbers = [1, 4, 3, 1, 4, 3, 3];
console.log(removeDuplicates(numbers)); 
