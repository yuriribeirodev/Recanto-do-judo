import { CardForms } from "@/components/cardForms"
import { Formularios } from "@/components/forms"

export function SectionFormularios (){
    return (
        <>
            <div id="Contato" className="w-4/5  flex flex-col md:flex-row justify-between items-start  m-auto py-16 sm:py-24 md:py-32 w-full"> 

                
                <div className="w-full flex flex-col md:flex-col mx-auto p-8 gap-8">

                    <p className="text-vermelho-botao text-3xl font-bold font-inter flex w-full max-w-md mx-auto">Fale Conosco</p>


                
                    <CardForms/>
                
                </div>
                    
                    
                <div className="w-full flex flex-col md:flex-row justify-center items-center mx-auto  md-pl-o md:mr-24 mt-20">
                    
                    <Formularios/>

                </div>
                
            </div>
                


            

        
        
        </>


    )
}
   