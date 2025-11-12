import { Card } from "../components/card"
import { CardForms } from "@/components/cardForms"
import { Button } from '@/components/ui/button.tsx'
import { BotaoFaleConosco } from "@/components/buttonFaleConosco"
import { Formularios } from "@/components/forms"

export function SectionFormularios (){
    return (
        <>

            <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mx-auto"> 

                <div className="w-full flex flex-col md:flex-col gap-8 mx-auto p-16">
                
                    <CardForms/>
                
                </div>
                    
                    
                <div className="w-full flex flex-col md:flex-row justify-center items-center gap-8 mx-auto">
                    
                    <Formularios/>

                </div>
                
            </div>
                


            

        
        
        </>


    )
}
   