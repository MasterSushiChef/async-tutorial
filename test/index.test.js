const sum = require("../index.js");

test("add two numbers", () => {
  let result = sum(5, 6);

  expect(result).toEqual(11);
});