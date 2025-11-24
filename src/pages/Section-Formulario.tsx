import { CardForms } from "@/components/cardForms"
import { Formularios } from "@/components/forms"

export function SectionFormularios() {
  return (
    <>
      <div
        id="Contato"
        className="w-4/5 flex flex-col md:flex-row justify-between items-start m-auto py-16 sm:py-24 md:py-32"
      >
        {/* Coluna da esquerda (Título + CardForms) */}
        <div className="w-full flex flex-col mx-auto p-8 gap-8">
          <p className="text-vermelho-botao text-3xl font-bold font-inter w-full max-w-md mx-auto">
            Fale Conosco
          </p>

          <CardForms />
        </div>

        {/* Coluna da direita (Formulário alinhado à direita) */}
        <div className="w-full flex justify-end items-center md:pr-10 mt-20 md:mt-0">
          <Formularios />
        </div>
      </div>
    </>
  );
}
