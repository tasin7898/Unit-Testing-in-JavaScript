import {
  capitalise,
  calculator,
  wrappedShift,
  caesarCipher,
  analyzeArray,
  reverseString,
} from "./index.js";

describe("capitalise", () => {
  test("it must capitalise the first letter of each word", () => {
    expect(capitalise("hello world! for i'm born")).toBe(
      "Hello World! For I'm Born"
    );
  });
});

describe("reverseString", () => {
  test("it that takes a string and returns it reversed", () => {
    expect(reverseString("abc i will lana")).toBe("anal lliw i cba");
  });
});

describe("calculator", () => {
  test("add", () => expect(calculator.add(4, 6)).toBe(10));
  test("subtract", () => expect(calculator.subtract(4, 6)).toBe(-2));
  test("divide", () => expect(calculator.divide(10, 5)).toBe(2));
  test("divide by zero", () => expect(calculator.divide(10, 0)).toBe(Infinity));
  test("multiply", () => expect(calculator.multiply(4, 6)).toBe(24));
});

describe("wrapperShift", () => {
  test("it should wrap the input + shift value within the range of [min, max]", () => {
    expect(wrappedShift(89, 3, 65, 90)).toBe(66);
    expect(wrappedShift(100, -10, 97, 122)).toBe(116);
  });
});

describe("caeserCipher", () => {
  test("shift only the alphabetical string(1st arg) by the shifter(2nd arg)", () => {
    expect(caesarCipher("kLo! poB", -3)).toBe("hIl! mlY");
    expect(caesarCipher("abcd...xyz", 2)).toBe("cdef...zab");
  });
});

describe("analyzeArray", () => {
  const arr = [1, 2, 3, 4, 5, 6, 10, 9];
  test("average", () => expect(analyzeArray(arr).average).toBe(5));
  test("min", () => expect(analyzeArray(arr).min).toBe(1));
  test("max", () => expect(analyzeArray(arr).max).toBe(10));
  test("length", () => expect(analyzeArray(arr).length).toBe(8));
  test("must return an object with average, min, max and length values of the passed array", () =>
    expect(analyzeArray(arr)).toEqual({
      average: 5,
      min: 1,
      max: 10,
      length: 8,
    }));
});
