function sumEvenNumbers(numbers) {
let sum = 0;

    for(let number = 0; number < numbers.length; number ++) {
        if (numbers [number] % 2 == 0) {
		sum += numbers[number]	
        }
    }
             return sum;
}
console.log(sumEvenNumbers([1,2,3,4,5,6,7,8,9,10]))



function findMax(number) {
let max = 0

	for(let count of number) {
        	if(count > max){
			max = count;
		}
	}
             return max
}
console.log(findMax([1,2,3,4,5,6,7,8,9,10]))



function countOddNumber(index) {
let oddNumber = 0;

    for(let number = 0; number < index.length; number ++) {
        if (index [number] % 2 == 1){
		 oddNumber ++;
        }
    }
             return oddNumber;
}
console.log(countOddNumber([1,2,3,4,5,6,7,8,9,10]))




function isPrime(number) {
	let factors = 0;
 	let counter = 0;
	for(let index  = 1;index < number.length/2; index){
		if(index % 2 == 0){
			factors = number % index;
			counter ++;
		}
	}
	if(counter > 1){
        	return false;
		}
             return true;
}
console.log(countOddNumber([7]))





function findFirstDuplicate(index) {
let isNotDuplicate = -1;

    for(let number = 0; number < index.length; number ++) {
        for(let count = number; count < index.length; count ++) {
		if(index[number] == index[count]) {
			isNotDuplicate = indext[count]
		}
        }
    }
             return isNotDuplicate
}
console.log(countOddNumber([1,2,2,4,5,5,7,8,9,10]))



module.exports= {sumEvenNumbers,findMax, countOddNumber, isPrime, findFirstDuplicate}
