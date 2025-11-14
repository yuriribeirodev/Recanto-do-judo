import { Icon } from "@iconify/react";



export function CardForms() {
    return(
        <>
            <div className="w-full flex flex-col justify-center items-center md:justify-start md:items-start gap-8 mx-auto max-w-md">
                
                <p className="text-vermelho-botao text-3xl font-bold font-inter">Fale Conosco</p>

                <div className="bg-brando-fundoCardForms w-full h-auto p-4 justify-between flex flex-col md:flex-col mx-auto rounded-2xl">

                    
                    
                    <div className="flex flex-start ">
                        <Icon icon="flowbite:phone-solid" className="text-vermelho-botao font-bold w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-4"/>
                        <p className="text-xl font-bold font-inter text-vermelho-letrash1 text-left">Contatos</p>

                    </div>
                    
                    <p className="text-sm text-left md:text-base md:text-lef font-bold font-inter text-vermelho-letrasp">(98) 99156-0036</p>
                    <p className="text-sm text-left md:text-base md:text-left font-bold font-inter text-vermelho-letrasp">recantodojudo@gmail.com</p>
                </div>
               
            
                

            
            
            <div className="w-full flex flex-col justify-center items-center mx-auto">
                
                <div className="bg-brando-fundoCardForms w-full p-4 pt-5 pb-5 flex flex-col md:flex-col mx-auto rounded-2xl">

                    <div className="flex flex-start ">
                        <Icon icon="mingcute:location-2-line" className="text-vermelho-botao font-bold w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 mb-4"/>
                        
                        <p className="text-x1 font-bold font-inter text-vermelho-letrash1 text-left">Endereço</p>
                        
                    </div>
                    
            
                    <p className="text-base font-bold font-inter text-vermelho-letrasp text-left">Av. 10 Cohab Anil III, São Luis - MA</p>
                </div>

            
            </div>    
        </div>
        </>
    )


}