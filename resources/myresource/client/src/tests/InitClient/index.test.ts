jest.mock("alt-client");
import * as alt from "alt-client";
import config from "../../modules/utils/config";

//@ts-ignore
import { __RewireAPI__ as InitClientRewired } from "../../modules/InitClient";

describe("Test module InitClient", () => {
  it("should init the client", () => {
    const url = "myurl";
    const myConfig = {
      VIEW_URL: url,
    };
    const emitServerSpy = jest.spyOn(alt, "emitServer");
    const setClientConfig = InitClientRewired.__get__("setClientConfig");
    setClientConfig(myConfig);
    expect(emitServerSpy).toBeCalledTimes(1);
    expect(config.VIEW_URL).toBe(url);
  });
});
