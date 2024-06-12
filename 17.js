function findCommonElements(array1, array2) {
    return array1.filter(num => array2.includes(num));
}
const array1 = [28, 2, 28, 4, 3];
const array2 = [3, 1, 3, 6, 28];
console.log(findCommonElements(array1, array2)); 
