import { Button } from "@/components/ui/button";
export default function HeroSection() {
    function Vaquinha(){
        const url:string="https://www.vakinha.com.br/5807365"
        window.location.href=url
    }

    return (
        <section
           id="HeroSection"
           className="bg-branco-fundoCards w-full"
        > 
<div
  className="
    relative w-full font-poppins flex justify-center
    bg-[url('/fundo-heroR.svg')] md:bg-[url('/fundo-hero.svg')]
    bg-center bg-no-repeat
    bg-contain md:bg-cover
    aspect-9/16 sm:aspect-3/4
    md:h-[90vh] lg:h-screen
  "
  style={{ maxHeight: '900px' }}
>
  <div className="w-4/6 py-[8%] flex flex-col h-auto items-center text-center md:items-start md:text-left">
    <h1 className="text-5xl md:text-6xl text-vermelho-letrash1 pt-8 font-bold mb-6">
      Recanto<br />Judô
    </h1>
    <Button onClick={Vaquinha} className="w-32 md:w-40" variant="destructive">
      Apoie
    </Button>
  </div>
</div>
        </section>
    )
}