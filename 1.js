var num = [1,2,3,4,5];
num.push(6);
console.log(num);


var num = [1,2,3,4,5];
num.shift(1);
console.log(num);


var array = [23,24,25,26, ];
console.log(num.length);


var  a = 3;
console.log("Addition: a + 3", a +3); 


function sumOfNumbers(numbers) {
    let total = 0;
    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }
    return total;
}

const num = [1, 2, 3, 4, 5];
console.log(sumOfNumbers(numb));



function filterEvenNumbers(numbers) {
    return numbers.filter(num => num % 2 === 0);
}

const numbers = [1, 2, 3, 4, 5, 6];
console.log(filterEvenNumbers(numbers)); 

function reverseStrings(strings) {
    return strings.map(str => str.split('').reverse().join(''));
}


const strings = ["MANIKANTA"];
console.log(reverseStrings(strings)); 

