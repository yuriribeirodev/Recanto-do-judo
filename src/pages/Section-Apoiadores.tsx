import {
  Marquee,
  MarqueeContent,
  MarqueeFade,
  MarqueeItem,
} from '@/components/marquee';


export function Apoiadores(){
    return(
        <div id="Parceiros" className="w-full p-8 md:p-16 mx-auto">

            <div className="w-full md:w-4/5 flex flex-col-reverse md:flex-row items-center justify-between mx-auto gap-12">

                <div className='w-full flex flex-col gap-[16px]'>

                  <h2 className="text-3xl font-bold text-vermelho-letrash1 text-left">Parceiros</h2>
                  <p className="text-2xl font-semibold text-[var(--color-vermelho-subtitulo)] text-left">Conheça quem apoia nosso projeto</p>
                  <div></div>
                  <div>
                    <Marquee>
                      <MarqueeFade side="left" />
                      <MarqueeFade side="right" />
                      <MarqueeContent speed={30}>
                        {new Array(10).fill(null).map((_, index) => (
                          <MarqueeItem className="mx-24 h-64 w-64 flex items-center justify-center mb-8" key={index}>
                            <img
                              alt={`Apoiador ${index}`}
                              className="overflow-visible rounded-full object-cover"
                              src="/logo-montebranco.png"
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