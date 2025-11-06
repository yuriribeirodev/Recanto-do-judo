import { Icon } from "@iconify/react";
type CardProps = {
    icone: string;
    header: string;
    text1: string;
    text2: string;
    text3: string;
}
export function Card({icone, header, text1, text2, text3}:CardProps) {
    return(
    <div className="flex flex-col bg-branco-fundoCards w-[90%] sm:w-[45%] lg:w-[30%] max-w-sm shrink-0 rounded-2xl py-6 px-5 gap-3 transition delay-100 duration-200 ease-in-out hover:translate-y-1 hover:scale-105 sm:py-8 sm:px-6 md:py-10 md:px-8">
        <div className="flex items-center gap-3">
            <div className="flex justify-center rounded-full bg-azul-fundoIcones h-10 w-10 items-center sm:h-12 sm:w-12 md:h-14 md:w-14">
                <Icon icon={icone} className="text-vermelho-botao font-bold w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7"/>
            </div>
            <h2 className="font-poppins text-vermelho-botao text-lg  sm:text-xl md:text-2xl font-bold">{header}</h2>
        </div>
        <div className="border border-azul-fundoSection rounded-md p-2 sm:p-3">
            <p className="text-azul-fundoSection font-inter text-[10px] sm:text-xs md:text-sm font-semibold text-center">{text1}</p>
        </div>
        <div className="border border-azul-fundoSection rounded-md p-2 sm:p-3">
            <p className="text-azul-fundoSection font-inter text-[10px] sm:text-xs md:text-sm font-semibold text-center">{text2}</p>
        </div>
        <div className="border border-azul-fundoSection rounded-md p-2 sm:p-3">
            <p className="text-azul-fundoSection font-inter text-[10px] sm:text-xs md:text-sm font-semibold text-center">{text3}</p>
        </div>
    </div>    
    );
}