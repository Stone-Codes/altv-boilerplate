jest.mock("alt-server");
import * as alt from "alt-server";
// @ts-ignore
import { __RewireAPI__ as InitClientRewireApp } from "../../modules/InitResource";

describe("Test InitResource module", () => {
  it("should do", () => {
    const logSpy = jest.spyOn(alt, "log");

    InitClientRewireApp.__get__("init");

    expect(logSpy).toBeCalledTimes(1);
    expect(logSpy).toBeCalledWith("Resource has been loaded.");
  });
});
