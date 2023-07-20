import { For, Show, createSignal, createResource } from "solid-js";
import { IGame, getGames } from "../utils";
import { Game } from "./Game";
import { GameDetails } from "./GameDetails";
import { Pagination } from "./Pagination";

export const Main = () => {
  const [data] = createResource<IGame[]>(getGames);
  const [filter, setFilter] = createSignal<string>("0");
  const [search, setSearch] = createSignal<string>("");
  const [selectedGame, setSelectedGame] = createSignal<IGame | null>();
  const games = () => data()?.filter(i => i.name.toLowerCase().includes(search()));
  
  return (
    <>
      <section class="bg-gray-900">
        <div class="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 sm:py-12 lg:px-8">
          <div>
            <h2 class="text-xl font-bold text-white sm:text-3xl">Lista de Jogos</h2>
            <p class="mt-4 max-w-md text-gray-200">
              Confira a lista de jogos e descubra se aquele jogo 
              que planeja platinar encontra-se aqui.
            </p>
          </div>
          <div class="mt-8 flex items-center justify-between">
            <div class="flex rounded border border-gray-200 text-gray-200">
              <div class="relative">
                <input onInput={ev => setSearch(ev.currentTarget.value.toLowerCase())}
                  type="text" id="search" placeholder=" Pesquisar"
                  class="w-full rounded placeholder-gray-200 bg-transparent h-10 shadow-sm sm:text-sm"
                />
                <span class="grid place-content-center absolute inset-y-0 end-0 w-10">
                  <button type="button">
                    <svg class="h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round"
                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </div>
            <div>
              <select value={filter()} onInput={ev => setFilter(ev.currentTarget.value)}
                class="bg-transparent h-10 text-gray-200 rounded border border-gray-200 text-sm"
              >
                <option value={0} class="bg-gray-900">Tudo</option>
                <option value={1} class="bg-gray-900">Implatinável</option>
                <option value={2} class="bg-gray-900">Em restrição</option>
              </select>
            </div>
          </div>
          <ul class="grid gap-4 mt-4 sm:grid-cols-2 lg:grid-cols-4">
            <For each={filter() !== "0" ? games().filter(i => i.state === filter()) : games()}>{game => (
              <div onClick={() => setSelectedGame(game)}>
                <Game {...game}/>
              </div>
            )}</For>
          </ul>
        </div>
      </section>

      <Show when={selectedGame()}>
        <GameDetails {...selectedGame()}/>
      </Show>
    </>
  );
}