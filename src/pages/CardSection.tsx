import { Card } from "../components/card"


export function CardSection(){
    return(
    <section className="bg-azul-fundoSection flex items-center justify-center py-32 w-full">
        <div className="w-4/5 flex justify-around">
            <Card icone="mdi:location" header="Endereço" text1="Av. De, 76- Cohab Anil Ir" text2="São Luís - MA" text3="Loja Maçônica Educação e Moral"/>
            <Card icone="mingcute:lotus-line" header="Nossa Filosofia" text1="A partir de 4 anos" text2="Turma infantil as 18h" text3="Turma Juvenil as 19h"/>
            <Card icone="game-icons:kimono" header="Faixa Etária" text1="Jita Kyoei - Beneficios Mútuos " text2="Minimo esforço com maxima eficiencia" text3="Formar cidadãos através do esporte"/>
        </div>
       
    </section>   
    )
}