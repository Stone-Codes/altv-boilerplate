import { onServer, log, WebView, showCursor } from "alt-client";
import { generateViewLink } from '../utils'

onServer("greet_player_console", () => {
  log("Hello player");
});

onServer("greet_player_cef", () => {
  const greetingView = new WebView(generateViewLink(''))
  showCursor(true)
  greetingView.on('close_greeting', () => {
    greetingView.destroy()
    showCursor(false)
  })
})