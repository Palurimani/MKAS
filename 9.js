function capitalizeFirstLetter(strings) {
    return strings.map(str => str.charAt(0).toUpperCase() + str.slice(1));
}


const strings = ["anna suma anjali"];
console.log(capitalizeFirstLetter(strings)); 
