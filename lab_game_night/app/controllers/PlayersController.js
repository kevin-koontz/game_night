import { AppState } from "../AppState.js";
import { playersService } from "../services/PlayerService.js";

export class PlayersController {
  constructor() {
    console.log('Players Controller is loaded', AppState.players);
    this.drawPlayers()

  }

  drawPlayers() {
    const players = AppState.players
    let playerContent = ''
    players.forEach(player => playerContent += player.PlayerTemplateCard)
    const playersCardElem = document.getElementById('player-cards')
    playersCardElem.innerHTML = playerContent
  }

  scorePoint(playerName) {
    console.log('clicked', playerName);
    playersService.scorePoint(playerName)
  }


}