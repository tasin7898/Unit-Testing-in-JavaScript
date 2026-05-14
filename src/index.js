export const capitalise = (str) =>
  str
    .split(" ")
    .map((word) => word[0].toUpperCase() + word.slice(1))
    .join(" ");
console.log(capitalise("hello world! for i'm born"));
export const reverseString = (str) => [...str].reverse().join("");
console.log(reverseString("hagupadu sdsd"));

export const calculator = {
  add: (a, b) => a + b,
  subtract: (a, b) => a - b,
  divide: (a, b) => a / b,
  multiply: (a, b) => a * b,
};
console.log(calculator.divide(10, 0))
export const wrappedShift = (value, shift, min, max) => {
  const rangeSize = max - min + 1;
  return min + ((((value - min + shift) % rangeSize) + rangeSize) % rangeSize);
};
export const caesarCipher = (str, shifter) => {
  const letterRegex = /^[a-zA-Z]$/;
  const caps = /^[A-Z]$/;
  let encrypted = "";
  for (let i = 0; i < str.length; i++) {
    if (!letterRegex.test(str[i])) {
      encrypted += str[i];
      continue;
    }
    if (caps.test(str[i]))
      encrypted += String.fromCharCode(
        wrappedShift(str.charCodeAt(i), shifter, 65, 90)
      );
    else
      encrypted += String.fromCharCode(
        wrappedShift(str.charCodeAt(i), shifter, 97, 122)
      );
  }
  return encrypted;
};
console.log(caesarCipher("Hello, World!", 3));

console.log(("A".charCodeAt(0) % 25) + 3);

export const analyzeArray = (arr) => ({
  average: arr.reduce((sum, cur) => sum + cur) / arr.length,
  min: Math.min(...arr),
  max: Math.max(...arr),
  length: arr.length,
});
console.log(analyzeArray([1, 2, 3, 4, 5, 6, 10, 9]));
console.log(analyzeArray([1, 2, 3, 4]).average)