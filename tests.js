// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});
describe("sayHello",function() {
    it("should be a defined function", function () {
        expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function () {
        expect(typeof sayHello()).toBe("string");
    });
    it("should return 'Hello, Jane!' when executed", function () {
        expect(sayHello("Jane")).toBe("Hello, Jane!");
    });
    it("should return 'Hello, Alex!' when executed", function () {
        expect(sayHello("Alex")).toBe("Hello, Alex!");
    });
    it("should return 'Hello, Pat!' when executed", function () {
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello()).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello(true)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello(false)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello(null)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello("")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello(2.3)).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello("5")).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello([])).toBe("Hello, World!");
    });
    it("should return 'Hello, World!' when executed", function() {
        expect(sayHello({})).toBe("Hello, World!");
    });
});
describe("isFive()", function() {
    it("should be a defined function", function() {
        expect(typeof isFive).toBe("function");
    });
    it("should return boolean when executed", function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it("should return false when executed", function() {
        expect((isFive)()).toBe(false);
    });
    it("should not return undefined when executed", function() {
        expect(isFive()).not.toBe(undefined);
    });
    it("should return true when 5 is executed", function() {
        expect(isFive(5)).toBe(true);
    });
    it("should return false when '5' is executed", function () {
        expect(isFive("5")).toBe(false);
    });
});
describe("isEven()", function() {
    it("should be a defined function", function() {
        expect(typeof isEven).toBe("function");
    });
    it("should return boolean when executed", function() {
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when executed with 2", function() {
        expect(isEven(2)).toBe(true);
    });
    it("should return true when executed with -4", function() {
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when executed with 3", function() {
        expect(isEven(3)).toBe(false);
    });
    it("should return false when called with 'banana'", function() {
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when called with '8'", function() {
        expect(isEven("8")).toBe(true);
    });
    it("should return false when called with Infinity", function() {
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when called with a boolean value", function() {
        expect(isEven(true)).toBe(false);
    });
    it("should return false when called with a boolean value", function() {
        expect(isEven(false)).toBe(false);
    });
    it("should return false when called with no argument", function() {
        expect(isEven()).toBe(false);
    });
});
describe("isVowel()", function() {
    it("should be a defined function", function() {
        expect(typeof isVowel).toBe("function")
    });
    it("should always return a boolean when executed", function() {
        expect(typeof isVowel()).toBe("boolean");
    });
    it("should return true when called with 'a'", function() {
        expect(isVowel("a")).toBe(true);
    });
    it("should return true when called with 'A'", function() {
        expect(isVowel("A")).toBe(true);
    });
    it("should return false when called with 'y'", function() {
        expect(isVowel("y")).toBe(false);
    });
    it("should return false when called with 4", function() {
        expect(isVowel(4)).toBe(false);
    });
    it("should return false when called with a boolean value", function(){
        expect(isVowel(true)).toBe(false);
    });
    it("should return false when called with a boolean value", function(){
        expect(isVowel(false)).toBe(false);
    });
    it("should return false when called with no argument", function() {
        expect(isVowel()).toBe(false);
    });
});
describe("add", function() {
    it("should be a defined function", function() {
        expect(typeof add).toBe("function");
    });
    it("should return a number when executed", function() {
        expect(typeof add()).toBe("number");
    });
    it("should return sum of two numbers passed as inputs when called", function() {
        expect(add(2, 3)).toBe(5);
    });
    it("should return sum of two negative numbers passed as inputs when called", function() {
        expect(add(-3, -9)).toBe(-12);
    });
    it("should return sum of two numbers even if one is a number as a string", function () {
        expect(add("5", 6)).toBe(11);
    });
    it("should return sum of two numbers even if both are numbers as a string", function() {
        expect(add("-4", "10")).toBe(6);
    });
    it("should return NaN when two word strings are passed", function() {
        expect(add("banana", "split")).toBeNaN();
    });
    it("should return NaN when a number and a word string are passed", function() {
        expect(add(2, "apples")).toBeNaN();
    });
    it("should return NaN when called with no argument", function() {
        expect(add()).toBeNaN();
    });
});
