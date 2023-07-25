import { Component } from "solid-js";
import { IPagination } from "../utils";

export const Pagination: Component<IPagination> = (props: IPagination) => {
  return (
    <div class="flex justify-center space-x-1 py-4">
      <button disabled={props.page() === 1} onClick={() => {
        if(props.page() !== 1) props.setPage(props.page() - 1);
      }} type="button" class="inline-flex items-center justify-center w-8 h-8 py-0">
        <svg class={`w-4 h-4 ${props.page() !== 1 ? "fill-gray-200" : "fill-gray-500"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <p class="inline-flex items-center justify-center w-8 h-8 text-sm font-semibold text-gray-200 bg-gray-950">
        {props.page()}
      </p>
      <button disabled={!(props.page() < props.pages)} onClick={() => {
        if(props.page() < props.pages) props.setPage(props.page() + 1);
      }} type="button" class="inline-flex items-center justify-center w-8 h-8 py-0">
        <svg class={`w-4 h-4 ${props.page() < props.pages ? "fill-gray-200" : "fill-gray-500"}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>
    </div>
  );
}