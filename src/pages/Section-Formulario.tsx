import { CardForms } from "@/components/cardForms"
import { Formularios } from "@/components/forms"

export function SectionFormularios (){
    return (
        <>
            <div id="Contato" className="w-full  flex flex-col md:flex-row justify-center items-center gap-4 mx-auto md:pt-8 pb-8 md:p-0"> 

                <div className="w-full flex flex-col md:flex-col mx-auto p-4">
                
                    <CardForms/>
                
                </div>
                    
                    
                <div className="w-full flex flex-col md:flex-row justify-center items-center mx-auto md:pt-8 md-pl-o pb-8 md:mr-24">
                    
                    <Formularios/>

                </div>
                
            </div>
                


            

        
        
        </>


    )
}
   