function findLongestString(strings) {
    let longest = "";
    for (let str of strings) {
        if (str.length > longest.length) {
            longest = str;
        }
    }
    return longest;
}


const strings = ["cherry", "Apple", "watermelon", "grape"];
console.log(findLongestString(strings)); 
