import { players } from './players.js';

export const load = ({ route }) => {
  return {
    players,
    route
  };
}