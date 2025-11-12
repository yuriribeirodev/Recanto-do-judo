import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Gallery() {
    return(
        <section className="flex flex-col items-center w-full p-8 md:p-16 mx:auto">
            <div className="flex flex-col gap-16 w-4/5">
             <h2 className="text-vermelho-botao text-4xl font-bold font-inter">Galeria</h2>
                <Carousel>
                <CarouselContent>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-kid1.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-kid2.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-kid3.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-kid4.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-kid5.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-turma.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                    <CarouselItem className="md:basis-1/2 lg:basis-1/3"><img src="foto-golpe.JPG" className="aspect-square object-cover rounded-xl w-full"/></CarouselItem>
                </CarouselContent>
                <CarouselPrevious/>
                <CarouselNext/>
                </Carousel>
                </div>
        </section>
        
    )
}