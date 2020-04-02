import * as alt from "alt-server";

alt.on("playerConnect", (player: alt.Player) => {
  player.model = "mp_m_freemode_01";
  player.spawn(813, -279, 66, 1000);
});
