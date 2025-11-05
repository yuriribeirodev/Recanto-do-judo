import { Icon } from "@iconify/react";

export function Card() {
    return(
    <div className="bg-branco-fundoCards w-80% h-80% rounded-md ">
        <div className="flex">
            <div className="border-50% bg-azul-fundoIcones">
                <Icon icon="mingcute:lotus-line" width="24" height="24"/>
            </div>
            <h2 className="font-poppins text-vermelho-botao text-2xl">Endereço</h2>
        </div>
    </div>    
    )
}