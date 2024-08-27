import { AppState } from "../AppState.js";

class PlayersService {
  scorePoint(playerName) {
    console.log('service score', playerName);
    const foundPlayer = AppState.players.find(players => players.name == playerName)
    foundPlayer.score++
    console.log('increase score', foundPlayer.score);

  }
}

export const playersService = new PlayersService()