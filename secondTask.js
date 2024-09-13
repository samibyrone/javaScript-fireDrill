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
	let factor = 1;

	for(let count = number; count >= 1; count ++) {
		if(number >= 1 && number <= 20) {
			factor *= number;
		}
	}
			return factor;
} 

console.log(factorial([5]))



function isPalindrome(value) {
	let factors = 0;
 	let counter = 0;
	for(let index  = 1;index < number.length; index){
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

console.log(isPalindrome([racecar]))

module.exports = {reverseArray, factorial, isPalindrome}
