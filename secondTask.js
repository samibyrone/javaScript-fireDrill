
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
console.log(isPalindrome("madam"));




function sumMultiplesOfThreeAndFive(numbers) {
	let sum = 0;

	for(let count = 1; count < numbers; count ++) {
		if(count % 3 === 0 || count % 5 == 0) {
			sum += count;
		}
	}
		return sum;
}
console.log(sumMultiplesOfThreeAndFive(500));






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



module.exports = {reverseArray, factorial, isPalindrome, sumMultiplesOfThreeAndFive, isLeapYear};
