import initClient from "../../modules/InitClient";
import { Player } from "alt-server";
describe("Test InitClient module", () => {
  it("should do", () => {
    console.log(Player);
    // console.log(initClientModule);
    let func = initClient.__get__("sendClientVariables");
    // console.log(initClient);
    // const modRew = rewire("../../modules/InitClient/index.ts");
    // console.log(modRew);
    expect(true).toBe(true);
  });
});
