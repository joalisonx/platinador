import { IGame } from ".";

/**
 * Função para obtenção da lista de jogos (API Platinador)
 */
async function getGames() {
  return JSON.parse(await (await fetch(import.meta.env.VITE_API)).json()) as IGame[];
}

export {
  getGames,
}