import { getGames, getGameImageByTitleId } from "./requester";

enum GamePlatform {
  "PS5" = "bg-blue-900",
  "PS4" = "bg-blue-700",
  "PS3" = "bg-blue-500",
  "VITA" = "bg-blue-300"
}

const GameState = {
  "1": "bg-red-700",
  "2": "bg-amber-300"
}

interface IGame {
  name: string;
  platform: string;
  state: string;
  image?: string;
  updatedAt?: Date;
  description?: string;
  storeId?: string;
}

export {
  getGames,
  getGameImageByTitleId,
  GamePlatform,
  GameState
}
export type { IGame }