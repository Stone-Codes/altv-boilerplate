import rewire from "rewire";
jest.mock("alt-server");
const test = require("../../modules/InitClient/index.ts");

describe("Test InitClient module", () => {
  it("should do", () => {
    // console.log(initClientModule);
    console.log(test);
    // const modRew = rewire("../../modules/InitClient/index.ts");
    // console.log(modRew);
    expect(true).toBe(true);
  });
});
