import { Setter } from "solid-js";
import { getGames, getGameImageById } from "./requester";

enum GamePlatform {
  "PS5" = "bg-blue-900",
  "PS4" = "bg-blue-700",
  "PS3" = "bg-blue-500",
  "VITA" = "bg-blue-300"
}

const GameState = {
  "1": "bg-red-700",
  "2": "bg-amber-400"
}

interface IGame {
  name: string;
  platform: string;
  state: string;
  storeId: string;
  image: string;
  updatedAt: Date;
  description: string;
}

interface IGameDetails extends IGame {
  setSelectedGame: Setter<IGame | null>;
}

export {
  getGames,
  getGameImageById,
  GamePlatform,
  GameState
}
export type { IGame, IGameDetails }