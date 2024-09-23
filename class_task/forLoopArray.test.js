const {arrayNumbersCount} = require("./forLoopArray.js");

test("count number of objects", () => {
    let number = [1,1,2,3,2];
        let result = arrayNumbersCount(number);
        let expected = {"1":2,"2":2,"3":1};
        expect(result).toEqual(expected);
})