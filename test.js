
const assert = require("node:assert/strict");
const { calculateTotal } = require("./app");

// Test 1: Normal calculation
assert.equal(calculateTotal(500, 3), 1500);

// Test 2: Zero quantity
assert.equal(calculateTotal(500, 0), 0);

// Test 3: Invalid price
assert.throws(() => calculateTotal(-100, 2));

console.log("Testing automatic CI");
console.log("added webhook into github for CI");

console.log("All tests passed!");
