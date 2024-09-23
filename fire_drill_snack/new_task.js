function testScores(array) {
    let number_score = array.filter((score) => score >= 70);
    return number_score;
}


function increaseScore (array) {
    let score = array.map((grade) => grade + 5);
    return score;
}


function numberSquare(array) {
    let number = array.map((integer) => integer * 2);
    return number;
}

let members = new Array([
    ["Emily", "Intro-to-Programimng"],
    ["Jack", "Intro-to-Javascript"],
    ["Sophia", "How-to-Program"],
    ["Daniel", "How-to-Love"],
]);

for(let member of members) {
    console.log(member);
}

function classSchedule(classTimings) {

    let afternoonClasses;
        afternoonClasses = classTimings.filter(time => {
        const [hour, period] = time.split(/[: ]/);
        const hourInt = parseInt(hour, 10);
        return (period === "PM" && hourInt >= 12) || (period === "PM" && hourInt < 12);
    });
    return afternoonClasses;
}

const expenses = {
    groceries: 150,
    dining: 100,
    transportation: 50,
    entertainment: 80
};

let totalExpenses = 0;

for (const category in expenses) {
    if (expenses.hasOwnProperty(category)) totalExpenses += expenses[category];
}
console.log(`Total expenses: $${totalExpenses}`);


module.exports = {testScores, increaseScore, numberSquare, classSchedule};
