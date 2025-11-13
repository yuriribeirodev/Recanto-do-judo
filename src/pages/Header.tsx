export default function Header() {
  return (
    <header id="Inicio" className="bg-vermelho-header text-white font-poppins w-full py-4 px-6 top-0 left-0 z-50 shadow-md">
      <div className="max-w-350 mx-auto flex flex-wrap md:flex-nowrap items-center justify-between w-[90%] gap-6">

        <a href="#Inicio" className="flex justify-center md:justify-start items-center shrink-0 min-w-24 w-full md:w-auto">
          <img
            src="/footer-logo.png"
            alt="Logo"
            className="h-auto w-auto max-h-16 max-w-full min-h-12 min-w-24 object-contain transition-transform duration-300 hover:scale-110"
          />
        </a>

        <nav className="w-full md:w-auto">
          <ul className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-10 text-center md:text-left text-xl font-bold p-0 m-0 list-none">
            <li><a href="#Sobre" className="hover:text-white/80 transition-all">Sobre</a></li>
            <li><a href="#Depoimentos" className="hover:text-white/80 transition-all">Depoimentos</a></li>
            <li><a href="#Contato" className="hover:text-white/80 transition-all">Contato</a></li>
            <li><a href="#Galeria" className="hover:text-white/80 transition-all">Galeria</a></li>
            <li><a href="#Parceiros" className="hover:text-white/80 transition-all">Parceiros</a></li>
          </ul>
        </nav>

        <div className="flex justify-center md:justify-end w-full md:w-auto mb-5 md:mb-0">
          <a
            href="https://wa.me/5598984393030"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-vermelho-botao hover:bg-[#6a0c13] text-white font-semibold text-xl py-2 px-5 rounded-lg transition-all shadow-md hover:scale-105 text-center"
          >
            Contate-nos
          </a>
        </div>
      </div>
    </header>
  );
}
