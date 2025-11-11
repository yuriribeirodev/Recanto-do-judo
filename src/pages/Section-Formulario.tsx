//import { zodResolver } from "@hookform/resolvers/zod"
//import { useForm } from "react-hook-form"
//import { Button } from "@/components/ui/button"
// Importe o Form e seus sub-componentes
//import { Form } from "@/components/ui/form" 
// Importe seu esquema e tipo do arquivo que você criou!
//import { formSchema } from "@/schemas/formSchema"
import { use, useState, type ChangeEvent, type FormEvent } from "react"
import { Button } from '@/components/ui/button.tsx'

export function SectionFormularios(){

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

        const msg = `Informações de cadastros enviadas. Nome: ${name} n/ Celular: ${cel} n/ CPF: ${cpf} n/ Endereço: ${endereco} `
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

    
    return(
        <>
            <div>

                <form onSubmit={handleSubmit}>
                    <input type="text"  placeholder="Nome" onChange={handleChangeName} value={name}/>
                    <input type="text" placeholder="Cpf" onChange={handleChangeCPF} value={cpf}/>
                    <input type="text" placeholder="Celular" onChange={handleChangeCel} value={cel}/>
                    <input type="text" placeholder="Endereço" onChange={handleChangeEndereco} value={endereco}/>

                    <Button className='w-full md:w-1/5 z-0' variant="destructive">Enviar</Button>
                    
                </form>
            </div>
        </>
    )
}