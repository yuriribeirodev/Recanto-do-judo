import { RenderVideos } from "@/components/video"


import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export function Depoimentos() {
    return(

        <div>

            <section className="w-full md:w-4/5 p-16 justify-between gap-20w-full flex flex-col md:flex-col items-justify mx-auto gap-12">
                <h2 className="text-vermelho-botao text-4xl font-bold font-inter">Depoimentos</h2>
                    <Carousel>
                    <CarouselContent className="w-full, md:w-4/5, flex, flex-row, gap-80" >
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><RenderVideos IdVideo={'LvWjXd7FVuw'} /></CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><RenderVideos IdVideo={'K8oPwGLGuUg'} /></CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><RenderVideos IdVideo={'OTWuFECmf8k'} /></CarouselItem>
                        <CarouselItem className="md:basis-1/2 lg:basis-1/3"><RenderVideos IdVideo={'I3UtZz-Rxm0'} /></CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious/>
                    <CarouselNext/>
                    </Carousel>
            </section>
        </div>
        
    )
}
