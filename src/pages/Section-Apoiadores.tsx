import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/marquee';


export function Apoiadores(){
    return(
        <div className="w-full p-8 md:p-16 mx-auto">

            <div className="w-full md:w-4/5 flex flex-col-reverse md:flex-row items-center justify-between mx-auto gap-12">

                <div className='w-full flex flex-col gap-[32px]'>

                  <h2 className="text-4xl font-bold text-vermelho-letrash1 text-left">Apoiadores</h2>
                  <p className="text-3xl font-semibold text-[var(--color-vermelho-subtitulo)] text-left">Conheça as pessoas que fazem parcerias conosco</p>
                  <div></div>
                  <div>
                    <Marquee>
                      <MarqueeFade side="left" />
                      <MarqueeFade side="right" />
                      <MarqueeContent speed={40}>
                        {new Array(10).fill(null).map((_, index) => (
                          <MarqueeItem className="h-32 w-32" key={index}>
                            <img
                              alt={`Apoiador ${index}`}
                              className="overflow-hidden rounded-full object-cover"
                              src={`https://placehold.co/128x128?random=${index}`}
                            />
                          </MarqueeItem>
                        ))}
                      </MarqueeContent>
                    </Marquee>
                  </div>
                </div>
            </div>
        </div>
    )
}