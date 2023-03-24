import { players } from '../players.js';

export const load = ({ params }) => {
  let foundPlayer;

  // Find an object in an array
  for (let player of players) {
    if (player.id === params.id) {
      foundPlayer = player;
      break;
    }
  }
  return {
    player: foundPlayer,
  };
}