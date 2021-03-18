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

global.test = test;
global.expect = expect;
