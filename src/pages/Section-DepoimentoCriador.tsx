import { Button } from '@/components/ui/button.tsx'
import { RenderVideos } from '@/components/video'

export function DepoimentoCriador(){
     function Vaquinha(){
        const url:string="https://www.vakinha.com.br/ong/centro-de-estudos-das-relacoes-de-trabalho-e-desigualdades?utm_internal_source=ongs-parceiras-quero-doar"
        
        window.location.href=url
    }



    return(
         <div id="Depoimentos" className="w-full p-8 h-auto bg-azul-fundoSobreNosVideoGaleria bg-[url('public/fundo.png')] bg-left-bottom bg-no-repeat bg-[size:200px_auto] md:bg-[size:400px_auto] ">

            <div className="max-w-full mx-auto">

                <div className="w-full md:p-16 mx-auto">
                    
                    <div className='w-4/5 mx-auto flex flex-col gap-[32px] justify-center items-center md:items-start'>


                        <h2 className="text-3xl font-bold font-inter text-vermelho-letrash1 text-left">A Filosofia por Trás do Tatame</h2>
                    
                        <div className="w-4/5 md:self-center">
                            <RenderVideos IdVideo={'a10UB2LH8y0'} />
                        </div>


                        <p className="text-vermelho-letrasp text-xl leading-relaxed text-left">
                        Como explica o Sensei Gildean, criador do projeto, o Recanto Judô nasceu de uma necessidade clara: a falta de opções esportivas para as crianças do bairro. Mais do que buscar medalhas, o objetivo é seguir o ideal original do fundador do judô: formar cidadãos de bem. O esporte é utilizado como uma poderosa ferramenta de transformação. Em pouco tempo, o projeto já ofereceu a crianças da comunidade oportunidades que talvez nunca tivessem de outra forma, como viajar pelo país para competir. A missão é clara: usar o judô para ensinar disciplina, respeito, perseverança e mostrar a cada aluno até onde ele pode chegar.
                        </p>

                        <Button onClick={Vaquinha} className='w-full md:w-1/5 ' variant="destructive">Seja um apoiador</Button>
                    </div>
                </div>

            </div>

        </div>


    )

}