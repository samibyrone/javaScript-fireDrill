const {sumEvenNumbers, findMax, countOddNumber, isPrime, findFirstDuplicate} = require("./firstTask.js");

test("sum the even numbers", ()=> {
	let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
    	let result = sumEvenNumbers(arrayNumber);
    	expect(result).toBe(30);
})

test("find the max number", ()=> {
	let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
    	let result = findMax(arrayNumber);
    	expect(result).toBe(10);
})

test("count the odd number", ()=> {
	let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
    	let result = countOddNumber(arrayNumber);
    	expect(result).toBe(5);
})

test("check if number is a Prime number", ()=> {
	let arrayNumber = [7];
	let result = isPrime(arrayNumber);
	expect(result).toBe(true);
})

test("find first duplicate of the numbers", ()=> {
	let arrayNumber = [1,2,3,4,5,6,7,8,9,10];
	let result = findFirstDuplicate(arrayNumber);
	expect(result).toBe(-1)
})