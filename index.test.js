import { capitalize } from "./index";
import { reverseString } from "./index";
import { calculator } from "./index";
import { caesarCipher } from "./index";
import { analyzeArray } from "./index";

test("capitalizes first letter, word -> Word", () => {
  expect(capitalize("word")).toBe("Word");
});

test("reverses the string, Word -> droW", () => {
  expect(reverseString("Word")).toBe("droW");
});

test("calculator adds two integers", () => {
  expect(calculator.add(1, 2)).toBe(3);
});
test("calculator adds two integers", () => {
  expect(calculator.subtract(3, 2)).toBe(1);
});
test("calculator adds two integers", () => {
  expect(calculator.divide(4, 2)).toBe(2);
});
test("calculator adds two integers", () => {
  expect(calculator.multiply(2, 2)).toBe(4);
});

test("caesar shift the string by 3, abc -> def", () => {
  expect(caesarCipher("abc", 3)).toBe("def");
});

test("caesar shift wraps", () => {
  expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar case preserves", () => {
  expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("caesar punctuation, spaces and non-alpha chars unchanged", () => {
  expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("array of numbers contains object with average key val pair", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("average", 4);
});

test("array of numbers contains object with min key val pair", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("min", 1);
});

test("array of numbers contains object with max key val pair", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("max", 8);
});

test("array of numbers contains object with length key val pair", () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toHaveProperty("length", 6);
});
