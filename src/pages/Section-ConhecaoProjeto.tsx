import { Button } from '@/components/ui/button.tsx'


export function ConhecaOProjeto(){
    
    function Vaquinha(){
        const url:string="https://www.vakinha.com.br/5807365"
        
        window.location.href=url
    }


    return(
        <div id="Sobre" className="w-full bg-branco-fundoCards p-8 md:p-16 mx-auto">

            <div className="w-full md:w-4/5 flex flex-col-reverse md:flex-row items-center justify-between mx-auto gap-16">
                
                <div className='w-full flex flex-col gap-8'>


                    <h2 className="text-3xl font-bold text-vermelho-letrash1 text-left">Conheça o Projeto</h2>
                
                    <p className="text-vermelho-letrasp text-xl leading-relaxed text-left" >  O <strong>Recanto Judô</strong> é um projeto social sem fins lucrativos criado para levar o judô ao bairro COHAB e promover inclusão por meio do esporte. <strong /> Fundado por Gildean dos Santos, junto com o amigo e professor Henrique Leandro Pereira, começou em uma igreja e hoje funciona na Maçonaria, com apoio da comunidade e do vereador Raimundo Penha, bem como do deputado estadual Marcio Honaiser. O Recanto Judô já conquistou a classificação de vários atletas para competições nacionais, como o Campeonato Brasileiro Sub-13 e Sub-15 de 2025. O projeto reforça valores como disciplina, esforço e cidadania, e oferece novas oportunidades para jovens e adultos da comunidade.</p>
                    <Button onClick={Vaquinha} className='w-full md:w-1/3 mb-8' variant="destructive">Seja um apoiador</Button>
                </div>
                <div className="w-4/5 h-auto img flex justify-center items-center">
                    <img src="public/ImagemSobreNos.png" alt="Imagem de Alunos do projeto Recanto do Judô" />
                </div>
            </div>

        </div>
    
    )


}