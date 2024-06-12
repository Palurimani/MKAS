function reverseStrings(strings) {
    return strings.map(str => str.split('').reverse().join(''));
}


const strings = ["NARASIMHA"];
console.log(reverseStrings(strings)); 
