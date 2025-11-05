export function ConhecaOPorjeto(){
    return(
        <div className="w-full bg-branco-200 p-8 md:p-16 max-w-6xl mx-auto">

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                <div className='flex flex-col gap-12'>


                    <h2 className="text-5xl font-bold text-vermelho-letrash1 text-center">Conheça o Projeto</h2>
                
                    <p className="text-vermelho-letrasp text-lg leading-relaxed text-center" >  O Recanto Judô é um projeto social sem fins lucrativos criado para levar o judô ao bairro COHAB e promover inclusão por meio do esporte. Fundado por Gildean dos Santos após conquistar a faixa preta, começou em uma igreja e hoje funciona na maçonaria, com apoio da comunidade e do vereador Raimundo Penha. Hoje tem seis atletas classificados para competições nacionais.O projeto reforça valores como disciplina, esforço e cidadania, e oferece novas oportunidades para jovens e adultos da comunidade.</p>
                </div>
                <div className="img flex justify-center items-center">
                    <img src="public/imgSobrenos.png" alt="Imagem de Alunos do projeto Recanto do Judô" />
                </div>
                <div></div>
            </div>

        </div>
    
    )


}