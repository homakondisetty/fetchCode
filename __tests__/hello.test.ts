/* Reference used
 * For Jest installation https://blog.logrocket.com/testing-typescript-apps-using-jest/
 * For console.log test handling https://stackoverflow.com/questions/49096093/how-do-i-test-a-jest-console-log
 * For all jest commands https://www.codegrepper.com/code-examples/javascript/jest+tobe+between
 * https://jestjs.io/docs/expect
 */
import { log, sum } from "../hello";

test("log function logs provided string", () => {
  console.log = jest.fn();  
  log("hello world");
  
  expect(console.log).toHaveBeenCalledWith("hello world");
});

test("Expecting sum of 1 + 2 to equal 3", () => {
  expect(sum(1, 2)).toBe(3);
});

