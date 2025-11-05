import { Card } from "../components/card"


export function CardSection(){
    return(
    <section className="bg-azul-fundoSection flex justify-center gap-3 h-50">
        <Card/>
        <Card/>
    </section>   
    )
}