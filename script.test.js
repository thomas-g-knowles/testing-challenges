const { notNull, objectFunc, arrayFunc, toStr } = require("./script.js");

test("Should not return null value", () => {
  expect(notNull()).not.toBe(null);
});

test("Should return truthy")