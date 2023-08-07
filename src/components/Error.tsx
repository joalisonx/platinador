import { Component } from "solid-js";
import { IError } from "../utils";

export const Error: Component<IError> = (props: IError) => {
  return (
    <div class="grid h-[40vh] px-4 place-content-center bg-gray-900">
      <div class="text-center">
        <p class="text-xl font-bold tracking-tight text-gray-200 sm:text-4xl">
          Ops...
        </p>
        <p class="mt-4 text-gray-200">
          {props.error}
        </p>
      </div>
    </div>
  );
}