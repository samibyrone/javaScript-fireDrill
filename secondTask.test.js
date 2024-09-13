const {reverseArray, factorial, isPalindrome} = require("./secondTask.js");


test("reverse the array", ()=> {
	let arrayNumber = [1,2,3,4,5];
	let result = reverseArray(arrayNumber);
	expect(result).toBe([5,4,3,2,1]);
})

test("Return factorial Numbers", ()=> {
	let arrayNumber = [5];
    	let result = factorial(arrayNumber);
    	expect(result).toBe([125]);
})

test("check if words is palindrome", ()=> {
	let arrayNumber = [racecar];
	let result = isPalindrome(arrayNumber);
	expect(result).toBe(true);
})