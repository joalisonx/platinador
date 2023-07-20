import { Component } from "solid-js";
import { IGame, getGameImageById } from "../utils";

export const GameDetails: Component<IGame> = (props: IGame) => {
  return (
    <section class="fixed inset-0 overflow-hidden">
      <div class="absolute inset-0 overflow-hidden">
        <div class="absolute inset-0 bg-gray-500 bg-opacity-50"></div>
        <div class="flex fixed inset-y-0 right-0 pl-10 max-w-full">
          <div class="relative w-96">
            <div class="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
              <button class="rounded-md text-gray-200 hover:text-white">
                <svg class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="h-full p-8 overflow-y-auto bg-gray-900">
              <div class="pb-16 space-y-6">
                <div>
                  <div class="block w-full rounded-lg overflow-hidden">
                    <img class="object-cover" alt="" src={getGameImageById(props.storeId)}/>
                  </div>
                  <div class="flex items-start justify-between mt-4">
                    <h2 class="text-lg font-medium text-gray-200">{props.name}</h2>
                  </div>
                </div>
                <div>
                  <h3 class="font-medium text-gray-200">Detalhes</h3>
                  <dl class="mt-2 text-gray-200 border-t border-b border-gray-800 divide-y divide-gray-800">
                    <div class="flex justify-between py-3 text-sm font-medium">
                      <dt>Estado</dt>
                      <dd class="text-gray-300">{props.state === "1" ? "Implatinável" : "Em restrição"}</dd>
                    </div>
                    <div class="flex justify-between py-3 text-sm font-medium">
                      <dt>Plataforma</dt>
                      <dd class="text-gray-300">{props.platform}</dd>
                    </div>
                    <div class="flex justify-between py-3 text-sm font-medium">
                      <dt>Última atualização</dt>
                      <dd class="text-gray-300">{new Date(props.updatedAt).toLocaleString()}</dd>
                    </div>
                  </dl>
                </div>
                <div>
                  <h3 class="font-medium text-gray-200">Descrição</h3>
                  <div class="flex items-center justify-between mt-2">
                    <p class="text-sm text-gray-300">{props.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}