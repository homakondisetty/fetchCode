/*
  * toThrow:
  * Src 1: https://medium.com/@afolabiwaheed/how-to-test-a-function-thats-expected-to-throw-error-in-jest-2419cc7c6462
  * Src 2: https://jestjs.io/docs/expect#tothrowerror
 */
import { derivedDataStore } from "../mapInterface";
let c: derivedDataStore;
beforeEach(() => {
  c = new derivedDataStore();
});
const getFunction = () => {
  c.get("invalidKey");
};

describe("Should set the correct value", () => {
  it("Set | get the value which is set", () => {
    c.set("name", "amazon");
    expect(c.get("name")).toEqual("amazon");
  });

  it("Should return multiple values using getAll", () => {
    c.set("name", "amazon");
    c.set("address", "seattle");
    const [a, b] = c.getAll(["name", "address"]);
    expect(a).toEqual("amazon");
    expect(b).toEqual("seattle");
  });

  it("Should throw an error if key is not present", () => {
    try {
      c.set("name", "amazon");
      c.set("address", "seattle");
      expect(c.get("invalidKey")).toEqual("");
    } catch (error) {
      expect(getFunction).toThrow("Invalid key: invalidKey");
    }
  });

  it("Should delete the correct value", () => {
    try {
      c.set("name", "amazon");
      c.set("address", "seattle");
      c.delete("name");
      expect(c.get("name")).toEqual("");
    } catch (error) {
      expect(getFunction).toThrow("Invalid key: invalidKey");
    }
  });
});
