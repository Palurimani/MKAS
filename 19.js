function uniqueCharacters(str) {
    const uniqueChars = [];
    for (let char of str) {
        if (!uniqueChars.includes(char)) {
            uniqueChars.push(char);
        }
    }
    return uniqueChars;
}

const str = "javascript";
console.log(uniqueCharacters(str)); 
