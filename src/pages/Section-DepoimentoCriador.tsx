import { Button } from '@/components/ui/button.tsx'
import { RenderVideos } from '@/components/video'

export function DepoimentoCriador(){
     function Vaquinha(){
        const url:string="https://www.vakinha.com.br/ong/centro-de-estudos-das-relacoes-de-trabalho-e-desigualdades?utm_internal_source=ongs-parceiras-quero-doar"
        
        window.location.href=url
    }



    return(
         <div className="w-full h-auto bg-azul-fundoSobreNosVideoGaleria bg-[url('public/fundo.png')] bg-left-bottom bg-no-repeat bg-[size:300px_auto] md:bg-[size:600px_auto] z-3">

            <div className="max-w-full p-8 md:p-16 mx-auto">

                <div className="w-4/5 md:p-16 flex align-center justify-between mx-auto">
                    
                    <div className='w-full flex flex-col gap-[58px]'>


                        <h2 className="text-4xl font-bold text-vermelho-letrash1 text-left z-0">A Filosofia por Trás do Tatame</h2>
                    
                        <div className="w-full h-auto img flex justify-center items-center z-0">
                            <RenderVideos IdVideo={'a10UB2LH8y0'} />
                        </div>


                        <p className="text-vermelho-letrasp text-xl leading-relaxed text-justify z-0" >  Como explica o Sensei Gildean, criador do projeto, o Recanto Judô nasceu de uma necessidade clara: a falta de opções esportivas para as crianças do bairro.O objetivo principal, segundo ele, não é focado apenas em medalhas, mas em seguir o ideal original do fundador do judô: "criar cidadãos de bem". O esporte é usado como uma poderosa ferramenta de transformação. Em pouco tempo, o projeto já proporcionou a crianças de uma comunidade carente oportunidades que elas talvez nunca tivessem de outra forma, como a chance de viajar pelo país para competir. O intuito é claro: usar o judô para ensinar disciplina, respeito, perceveraça e mostrar a elas a verdadeira dimensão do que podem alcançar.</p>

                        <Button onClick={Vaquinha} className='w-full md:w-1/5 z-0' variant="destructive">Seja um apoiador</Button>
                    </div>
                </div>

            </div>

        </div>


    )

}