import type { Component } from "solid-js";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";

const App: Component = () => {
  return (
    <>
      <Header/>
      <Main/>
      <Footer/>
    </>
  );
};

export default App;
