import { use, useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from '@/components/ui/button.tsx'

export function Formularios(){

    const[name, setName]= useState("")
    const[cpf, setCPF] = useState("")
    const[cel, setCel] = useState("")
    const[endereco, setEndereco] = useState("")
    
    
    console.log(name)
    
    
    function handleSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        if (name === "" || cpf === "" || cel === "" || endereco === ""){
            alert("Preencha todos os campos");
            return;
        }

        const msg = `Informações de cadastros enviadas. Nome: ${name} Celular: ${cel} CPF ou CNPJ: ${cpf} Endereço: ${endereco} `
        const url = `https://wa.me/5598984393030?text=${encodeURIComponent(msg)}`
        console.log("Solicitação enviada com sucesso")

        window.open(url, '_blank')

        setName("")
        setCPF("")
        setCel("")
        setEndereco("")

    }


    
    function handleChangeName(event:ChangeEvent<HTMLInputElement>){
        //console.log(event.target.value)
        setName(event.target.value)

    }

    function handleChangeCPF(event:ChangeEvent<HTMLInputElement>){
        setCPF(event.target.value)
    }

    function handleChangeCel(event:ChangeEvent<HTMLInputElement>){
        setCel(event.target.value)
    }

    function handleChangeEndereco(event:ChangeEvent<HTMLInputElement>){
        setEndereco(event.target.value)
    }

    const inputStyle = "w-full bg-gray-100 border border-gray-200 rounded-lg p-4 " +
                       "placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-700";

    return(
        <>
        <div className="bg-white border border-gray-200 rounded-2xl shadow-lg p-4 w-full max-w-md mx-auto">

            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <input type="text"  placeholder="Nome" onChange={handleChangeName} value={name} className={inputStyle}/>
                <input type="text" placeholder="Cpf / Cnpj" onChange={handleChangeCPF} value={cpf} className={inputStyle}/>
                <input type="text" placeholder="Celular" onChange={handleChangeCel} value={cel} className={inputStyle}/>
                <input type="text" placeholder="Endereço" onChange={handleChangeEndereco} value={endereco} className={inputStyle}/>

                <Button className='w-full md:w-auto' variant="destructive">Enviar</Button>
                
            </form>
        
        </div>
        </>
    )
}
    