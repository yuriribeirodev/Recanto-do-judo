import { Button } from '@/components/ui/button.tsx'


export function ConhecaOPorjeto(){
    function Vaquinha(){
        


    }


    return(
        <div className="w-full bg-branco-200 p-8 md:p-16 mx-auto">

            <div className="w-4/5 flex align-center justify-between mx-auto gap-12">
                
                <div className='w-full flex flex-col gap-[46px]'>


                    <h2 className="text-4xl font-bold text-vermelho-letrash1 text-left">Conheça o Projeto</h2>
                
                    <p className="text-vermelho-letrasp text-xl leading-relaxed text-left" >  O Recanto Judô é um projeto social sem fins lucrativos criado para levar o judô ao bairro COHAB e promover inclusão por meio do esporte. Fundado por Gildean dos Santos após conquistar a faixa preta, começou em uma igreja e hoje funciona na maçonaria, com apoio da comunidade e do vereador Raimundo Penha. Hoje tem seis atletas classificados para competições nacionais.O projeto reforça valores como disciplina, esforço e cidadania, e oferece novas oportunidades para jovens e adultos da comunidade.</p>
                    <Button className='w-1/3' variant="destructive">Seja um apoiador</Button>
                </div>
                <div className="w-4/5 h-auto img flex justify-center items-center">
                    <img src="public/ImagemSobreNos.png" alt="Imagem de Alunos do projeto Recanto do Judô" />
                </div>
            </div>

        </div>
    
    )


}