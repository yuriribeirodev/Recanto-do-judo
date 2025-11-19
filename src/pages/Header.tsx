import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header
      id="Inicio"
      className="bg-vermelho-header text-white font-poppins w-full py-4 px-6 top-0 left-0 z-50 shadow-md"
    >
      <div className="max-w-350 mx-auto flex items-center justify-between w-[90%]">

        <a
          href="#Inicio"
          className="flex items-center shrink-0 min-w-24"
        >
          <img
            src="/footer-logo.png"
            alt="Logo"
            className="h-auto w-auto max-h-16 min-h-12 min-w-24 object-contain transition-transform duration-300 hover:scale-110"
          />
        </a>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white focus:outline-none"
        >
          {open ? <X size={36} /> : <Menu size={36} />}
        </button>

        <nav className="hidden md:flex">
          <ul className="flex gap-10 text-xl font-bold">
            <li><a href="#Sobre" className="hover:text-white/80 transition-all">Sobre</a></li>
            <li><a href="#Depoimentos" className="hover:text-white/80 transition-all">Depoimentos</a></li>
            <li><a href="#Contato" className="hover:text-white/80 transition-all">Contato</a></li>
            <li><a href="#Galeria" className="hover:text-white/80 transition-all">Galeria</a></li>
            <li><a href="#Parceiros" className="hover:text-white/80 transition-all">Parceiros</a></li>
          </ul>
        </nav>

        <div className="hidden md:flex">
          <a
            href="https://wa.me/5598991560036"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-vermelho-botao hover:bg-[#6a0c13] text-white font-semibold text-xl py-2 px-5 rounded-lg transition-all shadow-md hover:scale-105"
          >
            Contate-nos
          </a>
        </div>
      </div>

      <div
        className={`
          md:hidden overflow-hidden transition-all duration-300 
          ${open ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"}
        `}
      >
        <ul className="flex flex-col items-center gap-6 text-xl font-bold py-4">
          <li><a onClick={() => setOpen(false)} href="#Sobre" className="hover:text-white/80">Sobre</a></li>
          <li><a onClick={() => setOpen(false)} href="#Depoimentos" className="hover:text-white/80">Depoimentos</a></li>
          <li><a onClick={() => setOpen(false)} href="#Contato" className="hover:text-white/80">Contato</a></li>
          <li><a onClick={() => setOpen(false)} href="#Galeria" className="hover:text-white/80">Galeria</a></li>
          <li><a onClick={() => setOpen(false)} href="#Parceiros" className="hover:text-white/80">Parceiros</a></li>

          <a
            href="https://wa.me/5598991560036"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-vermelho-botao hover:bg-[#6a0c13] text-white font-semibold text-xl py-2 px-5 rounded-lg transition-all shadow-md hover:scale-105"
          >
            Contate-nos
          </a>
        </ul>
      </div>
    </header>
  );
}
