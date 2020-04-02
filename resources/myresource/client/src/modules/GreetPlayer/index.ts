import { onServer, log } from "alt-client";

onServer("greet_player", () => {
  log("Hello player");
});
