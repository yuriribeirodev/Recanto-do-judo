export default function Header() {
  return (
    <header className="bg-[var(--color-vermelho-header)] text-white font-poppins w-full py-4 px-6 top-0 left-0 z-50 shadow-md">
      <div className="max-w-[87.5rem] mx-auto flex items-center justify-between w-[90%]">

        <a href="#Inicio" className="flex items-center">
          <img
            src="/footer-logo.png"
            alt="Logo"
            className="h-auto w-auto max-h-16 max-w-full min-h-12 min-w-[6rem] object-contain transition-transform duration-300 hover:scale-110"
          />
        </a>


        <nav className="hidden md:flex items-center gap-10 text-xl font-bold font-medium">
          <a href="#Inicio" className="hover:text-white/80 transition-all">Início</a>
          <a href="#Sobre" className="hover:text-white/80 transition-all">Sobre</a>
          <a href="#SejaUmDoador" className="hover:text-white/80 transition-all">Seja um doador</a>
          <a href="#Depoimentos" className="hover:text-white/80 transition-all">Depoimentos</a>
        </nav>


        <a
          href="#Contato"
          className="bg-[var(--color-vermelho-botao)] hover:bg-[#6a0c13] text-white font-semibold text-xl py-2 px-5 rounded-lg transition-all shadow-md hover:scale-105"
        >
          Contate-nos
        </a>
      </div>
    </header>
  );
}
