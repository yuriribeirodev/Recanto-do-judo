import { z } from "zod"

export const formSchema = z.object({
  name: z.string().min(2),
  CpfCnpj: z.number().min(11),
  contato: z.number().min(11),
  endereco: z.string().min(15),
})

export type FormSchema = z.infer<typeof formSchema>