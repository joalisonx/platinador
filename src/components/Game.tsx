import { Component } from "solid-js";
import { IGame, GamePlatform, GameState, getGameImageById } from "../utils";

export const Game: Component<IGame> = (props: IGame) => {
  return (
    <li>
      <div 
        class="flex items-end justify-start w-full h-[256px] rounded-lg relative text-left bg-gray-950 bg-center bg-cover" 
        style={`background-image: url('${getGameImageById(props.storeId)}');`}
      >
        <div class="absolute top-0 bottom-0 left-0 right-0"></div>
        <div class="flex items-center justify-between mx-5 mt-3 absolute top-0 left-0 right-0">
          <span class="px-3 py-2"></span>
          <div class="flex justify-between gap-2">
            <span title={props.state === "1" ? "Implatinável" : "Em restrição"} class={`inline-flex items-center justify-center rounded-full 
            ${GameState[props.state]} px-2.5 py-1 text-gray-100
            `}>
              <svg 
                class="w-4 h-4" xmlns="http://www.w3.org/2000/svg" 
                fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"
              >
                <path stroke-linecap="round" stroke-linejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
              </svg>
            </span>
            <span class={`${GamePlatform[props.platform]} text-gray-200 px-2.5 py-0.5 rounded text-sm`}>
              {props.platform}
            </span>
          </div>
        </div>
        <h2 class="text-gray-200 z-10 p-5 font-bold text-xl">
          {props.name.length > 21 ? props.name.slice(0, 20) + "..." : props.name}
        </h2>
      </div>
    </li>
  );
}