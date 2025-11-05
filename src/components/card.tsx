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
    <div className="flex flex-col bg-branco-fundoCards w-80 rounded-2xl py-10 px-8 gap-4">
        <div className="flex items-center gap-2">
            <div className="flex justify-center rounded-full bg-azul-fundoIcones h-12 w-12 items-center">
                <Icon icon={icone} className="text-vermelho-botao font-bold w-6 h-6"/>
            </div>
            <h2 className="font-poppins text-vermelho-botao text-2xl font-bold">{header}</h2>
        </div>
        <div className="border border-azul-fundoSection rounded-md p-1">
            <p className="text-azul-fundoSection font-inter text-xs text-center">{text1}</p>
        </div>
        <div className="border border-azul-fundoSection rounded-md p-1">
            <p className="text-azul-fundoSection font-inter text-xs text-center">{text2}</p>
        </div>
        <div className="border border-azul-fundoSection rounded-md p-1">
            <p className="text-azul-fundoSection font-inter text-xs text-center">{text3}</p>
        </div>
    </div>    
    )
}