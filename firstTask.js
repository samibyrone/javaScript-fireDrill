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




function reverseArray(index) {
	let array = 0;
	let array_end = index.length -1;
	
	while(array < array_end) {
		let arr = index[array];
		index[array] = index[array_end];
		index[array_end] = arr;

		array++;
		array_end--;
	}
		return index;
}
console.log(reverseArray([1,2,3,4,5]));




function factorial(number) {

	
	if(number < 0) {
		return "factorial isn't defined.";
	}
	let factor = 1;
	for(let count = 1; count <= number; count ++) {
			factor *= count;
		}
			return factor;
} 

console.log(factorial(5))




function isPalindrome(value) {
	let factors = "";

	for(let index = value.length -1; index >= 0; index --) {
			factors += value[index];
	}
	return value == factors;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));




function sumMultiplesOfThreeAndFive(numbers) {
	let sum = 0;

	for(let count = 1; count < numbers; count ++) {
		if(count % 3 === 0 || count % 5 === 0) {
			sum += count;
		}
	}
		return sum;
}
console.log(sumMultiplesOfThreeAndFive(1000));





function isLeapYear(year) {

	if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
		return true;
    	} else {
        	return false;
    	}
}

console.log(isLeapYear(2024)); 
console.log(isLeapYear(2023)); 
console.log(isLeapYear(1999)); 
console.log(isLeapYear(2020)); 


module.exports= {sumEvenNumbers,findMax, countOddNumber, isPrime, findFirstDuplicate, reverseArray, factorial, isPalindrome, sumMultiplesOfThreeAndFive, isLeapYear}
