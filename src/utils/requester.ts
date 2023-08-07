import { IGame } from ".";

/**
 * Função para obtenção da lista de jogos (API Platinador)
 */
async function getGames(): Promise<IGame[]> {
  try {
    return JSON.parse(await (await fetch(import.meta.env.VITE_API)).json()) as IGame[];
  } catch(err) {
    throw "Algo deu errado enquanto o Platinador buscava a lista de jogos."
  }
}

export {
  getGames,
}