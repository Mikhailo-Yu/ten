const myArray =  [1, 2, 3, 4, 5, 6, 7, 43, 9, 55, 11, 14, 12, 13];

function removeElement(array, item) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] ===  item) {
            array.splice(i, 1);
        }   
    }
}

console.log(myArray);
removeElement(myArray, 55);
console.log(myArray);
