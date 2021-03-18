const { add, multiply, substract } = require("./math_library");

let result, expected;

//result = add(2, 5);
//expected = 7;
//expect(result).toBe(expected);

//result = multiply(2, 5);
//expected = 8;
//expect(result).toBe(expected);
test("should add numbers correctly", () => {
  //callback
  const result = add(7, 3);
  const expected = 10;
  expect(result).toBe(expected);
});

test("should multiply numbers correctly", () => {
  //callback
  const result = multiply(7, 3);
  const expected = 21;
  expect(result).toBe(expected);
});

test("should substract numbers correctly", () => {
  //callback
  const result = substract(7, 3);
  const expected = 4;
  expect(result).toBe(expected);
});

function test(title, callback) {
  try {
    callback();
    console.log(`ok ${title}`); //ok
  } catch (error) {
    console.error(`no ${title}`); // error in test
    console.error(error);
  }
}

function expect(result) {
  return {
    toBe: (expected) => {
      if (result !== expected) {
        throw new Error(`${result} is not equal to ${expected}`);
      }
    },
  };
}
