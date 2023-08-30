export const Header = () => {
  return (
    <section class="bg-gray-950 heropattern-tictactoe-gray-900 text-gray-200">
      <div class="mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center">
        <div class="mx-auto max-w-3xl text-center">
          <h1 class="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 bg-clip-text text-2xl font-extrabold text-transparent sm:text-5xl">
            Platinador
          </h1>
          <p class="mx-auto mt-4 max-w-xl sm:text-xl/relaxed">
            O Platinador facilitará sua busca pelas suas platinas unificando aqueles jogos
            que não são mais possíveis de se platinar ou que estão com restrições temporárias
            em um lugar só!
          </p>
          <div class="flex flex-wrap justify-center gap-4 mt-8">
            <button onClick={() => window.scrollTo({top: 478, behavior: "smooth"})} class="block w-full rounded border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white hover:bg-transparent focus:outline-none focus:ring active:text-opacity-75 sm:w-auto">
              Me mostra
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}