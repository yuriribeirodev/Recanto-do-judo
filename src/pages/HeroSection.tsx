import { Button } from "@/components/ui/button";
export default function HeroSection() {
    function Vaquinha(){
        const url:string="https://www.vakinha.com.br/ong/centro-de-estudos-das-relacoes-de-trabalho-e-desigualdades?utm_internal_source=ongs-parceiras-quero-doar"
        window.location.href=url
    }

    return (
        <section
           id="HeroSection"
           className="bg-branco-fundoCards w-full h-screen"
        > 
            <div className="bg-[url('/fundo-hero.svg')] font-poppins w-full justify-center flex bg-cover bg-center h-full">
                <div className="w-4/5 py-[8%]">
                    <h1 className="text-5xl text-vermelho-letrash1 md:text-6xl pt-8 font-bold mb-6">
                        Recanto<br/>Judô
                    </h1>
                    <Button onClick={Vaquinha} className="w-1/2 md:w-1/5" variant="destructive">Apoie</Button>
                </div>
            </div>
        </section>
    )
}