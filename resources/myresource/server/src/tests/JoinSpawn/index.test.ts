jest.mock("alt-server");
import * as alt from "alt-server";

// @ts-ignore
import { __RewireAPI__ as JoinSpawnRewired } from "../../modules/JoinSpawn";

const { Player } = jest.requireActual("alt-server");
describe("Test JoinSpawn module", () => {
  it("should be true", () => {
    let player = new Player();
    const emitClientSpy = jest.spyOn(alt, "emitClient");
    const spawnSpy = jest.spyOn(player, "spawn");
    const spawnAndGreetPlayer = JoinSpawnRewired.__get__("spawnAndGreetPlayer");

    spawnAndGreetPlayer(player);

    expect(emitClientSpy).toBeCalledTimes(2);
    expect(emitClientSpy.mock.calls[0]).toEqual([
      player,
      "greet_player_console",
    ]);

    expect(emitClientSpy.mock.calls[1]).toEqual([player, "greet_player_cef"]);
    expect(player.model).toBe("mp_m_freemode_01");
    expect(player.spawn).toBeCalledTimes(1);
    expect(player.spawn).toBeCalledWith(813, -279, 66, 1000);
  });
});
