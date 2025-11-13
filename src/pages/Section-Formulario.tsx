import { Card } from "../components/card"
import { CardForms } from "@/components/cardForms"
import { Button } from '@/components/ui/button.tsx'
import { BotaoFaleConosco } from "@/components/buttonFaleConosco"
import { Formularios } from "@/components/forms"

export function SectionFormularios (){
    return (
        <>
            <div id="Contato" className="w-full  flex flex-col md:flex-row justify-center items-center gap-4 mx-auto md:pt-8 pt-2 pb-8"> 

                <div className="w-full flex flex-col md:flex-col gap-8 mx-auto p-4">
                
                    <CardForms/>
                
                </div>
                    
                    
                <div className="w-full flex flex-col md:flex-row justify-center items-center mx-auto md:pt-8 pb-8">
                    
                    <Formularios/>

                </div>
                
            </div>
                


            

        
        
        </>


    )
}
   