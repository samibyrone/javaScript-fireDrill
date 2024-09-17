const book = {
	title : 'The Great Gatsby', 
	author : 'F.Scott Fitzgerald', 
	yearPublished : 1925
	}

const {title, author, yearPublished} = book
console.log(title,"by", author)


function carAccesories(car) {
	for(let listed in car) {
		console.log(car[listed]);
	}
}
const car = {
	make : 'Toyota', 
	model: 'Camry', 
	year : 2021
};
carAccesories(car);
carAccesories(car.make);




const counter = {
	count : 0,
	step : 1,
	increment : function() {
		this.count += this.step;
	},
	decrement : function() {
		this.count -+ this.step;
	}
}
counter.increment();
console.log(counter.count);
counter.step = 5;
counter.increment();
console.log(counter.count);



const person1 = {
	fullName : function() {
		firstName : "samson";
		lastName : "ibironke";
	}
}

function fullName(prson1) {
	for(let human in person1) {
		console.log(person1[human]);
	}
}

fullName(person1);
fullName(person1.firstNamelastName);



const person2 = {
	firstName : "john",
	lastName : "Doe",
	age : 25,
}

console.log(person2);