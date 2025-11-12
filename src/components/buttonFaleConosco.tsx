import { Button } from '@/components/ui/button.tsx'

export function BotaoFaleConosco() {
const msg = `Queria saber mais sobre o projeto Recanto do Judô. Por favor, entre em contato comigo.`
const url = `https://wa.me/5598984393030?text=${encodeURIComponent(msg)}`

window.open(url, '_blank')

return(
    <Button onClick={BotaoFaleConosco} className='w-full md:w-2xs text-1xl font-bold' variant="destructive">Fale Conosco</Button>
)
}