import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Gallery() {
    return(
        <section className="flex flex-col w-full p-16 justify-center">
             <h2 className="text-vermelho-botao text-4xl font-bold font-inter">Galeria</h2>
                <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="fundo.png"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="fundo.png"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="fundo.png"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="fundo.png"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="fundo.png"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="fundo.png"/></CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
                </Carousel>
        </section>
        
    )
}