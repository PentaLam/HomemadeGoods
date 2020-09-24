/*Example test: Tests to see if addition function works.
Run the test with "npm run test"   */
const assert = require('assert');
const add = require('../add');

//Uses mocha's describe and it functions to describe test and it's expected result.
describe("add function in add.js", (x,y) => {
    it("Should return addition of two numbers", () => {
        assert.deepStrictEqual(add(x,y), x+y);
    })
});