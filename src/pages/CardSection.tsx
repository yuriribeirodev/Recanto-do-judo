import { Card } from "../components/card"


export function CardSection() {
  return (
    <section className="bg-azul-fundoSection flex justify-center py-16 sm:py-24 md:py-32 w-full">
      <div className="w-4/5 flex flex-wrap justify-center gap-8">
        <Card icone="mdi:location" header="Endereço" text1="Av. De, 76 - Cohab Anil Ir" text2="São Luís - MA" text3="Loja Maçônica Educação e Moral"/>
        <Card icone="game-icons:kimono" header="Faixa Etária" text1="A partir de 4 anos" text2="Turma infantil às 18h" text3="Turma juvenil às 19h" />
        <Card icone="mingcute:lotus-line" header="Nossa Filosofia" text1="Jita Kyoei - Benefícios Mútuos" text2="Mínimo esforço, máxima eficiência" text3="Formar cidadãos através do esporte"/>
      </div>
    </section>
  );
}