
function arrayNumbersCount(numbers) {
    const count = {};

    for (const element of numbers) {
        if (count[element]) {
            count[element] += 1;
        } else {
            count[element] = 1;
        }
    }
    return count;
}

console.log(arrayNumbersCount([1,1,2,3,2]));
console.log(arrayNumbersCount([5,4,5,6,7,6]));

module.exports= {arrayNumbersCount};

 
