const {testScores, increaseScore, numberSquare, classSchedule} = require("./new_task");


test("test to find student score greater or equals to 70", () =>{
    let scores = [70,96,68,82,69,80,62];
    let result = testScores(scores);
    let expected = [70,96,82,80];
    expect(result).toEqual(expected);
})

test("test that increase the score of student by 5", () => {
    let grades = [85,92,78,88,95];
    let result = increaseScore(grades);
    let expected = [90,97,83,93,100];
    expect(result).toEqual(expected);
})

test("test that get the squares of each number integer", () => {
    let number = [2,4,6,8,10];
    let result = numberSquare(number);
    let expected = [4,8,12,16,20];
    expect(result).toEqual(expected);
})

test("test that student class afternoon timing schedule", () => {
    let timing = ["9:00AM", "11:00AM", "1:00PM", "3:00PM", "5:00PM"];
    let result = classSchedule(timing);
    let expected = ["1:00PM", "3:00PM", "5:00PM"];
    expect(result).toEqual(expected);
})

test("")