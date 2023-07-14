import { IGame } from ".";

/**
 * Função para obtenção da lista de jogos (API Platinador)
 */
async function getGames() {
  return JSON.parse(await (await fetch(import.meta.env.VITE_API)).json()) as IGame[];
}

/**
 * Função para obtenção das imagens dos jogos cadastrados (API da PlayStation Store)
 */
function getGameImageById(id: string) {
  return import.meta.env.VITE_API_STORE + id + "/image";
}

export {
  getGames,
  getGameImageById
}