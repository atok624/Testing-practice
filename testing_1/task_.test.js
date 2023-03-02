const stringLength = require('./task-1.js');

describe("stringLength", () => {
  it("should return the length of a string", () => {
    expect(stringLength("hello")).toBe(5);
    expect(stringLength("1234567890")).toBe(10);
  });

  it("should throw an error if the string is empty", () => {
    expect(() => stringLength("")).toThrow(
      "String must be at least 1 character long"
    );
  });

  it("should throw an error if the string is longer than 10 characters", () => {
    expect(() => stringLength("12345678901")).toThrow(
      "String cannot be longer than 10 characters"
    );
  });
});
