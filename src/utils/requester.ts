/**
 * Função para obtenção da lista de jogos (API Platinador)
 */
async function getGames() {
  return JSON.parse(await (await fetch(import.meta.env.VITE_API)).json());
}

/**
 * Função para obtenção das imagens dos jogos cadastrados (API da PlayStation Store)
 */
function getGameImageByTitleId(id: string): string | any {
  fetch(import.meta.env.VITE_API_STORE + id).then(response => {
    if(!response.ok) {
      throw new Error(`Erro: ${response.status}`);
      return response.blob();
    }
  }).then(async (response) => {
    const data = JSON.parse(await response.text());
    return data["links"][0]["images"][0]["url"];
  });
}

export {
  getGames,
  getGameImageByTitleId
}