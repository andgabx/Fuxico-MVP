import { z } from "zod";

// Plan options
export const planOptions = [
    { value: "bisbilhotice", label: "Plano Bisbilhotice", price: "R$200,00/mês" },
    { value: "mexerico", label: "Plano Mexerico", price: "R$90/mês" },
    { value: "fuxico", label: "Plano Fuxico", price: "R$450,00/mês" },
] as const;

// Step 1: Personal Data Schema
export const personalDataSchema = z.object({
    plan: z.enum(["bisbilhotice", "mexerico", "fuxico"], {
        message: "Por favor, selecione um plano",
    }),
    email: z
        .string()
        .min(1, "E-mail é obrigatório")
        .email("E-mail inválido"),
    cpf: z
        .string()
        .min(1, "CPF é obrigatório")
        .regex(/^\d{3}\.\d{3}\.\d{3}-\d{2}$/, "CPF deve estar no formato 000.000.000-00"),
    firstName: z
        .string()
        .min(1, "Nome é obrigatório")
        .min(2, "Nome deve ter pelo menos 2 caracteres"),
    lastName: z
        .string()
        .min(1, "Sobrenome é obrigatório")
        .min(2, "Sobrenome deve ter pelo menos 2 caracteres"),
    phone: z
        .string()
        .min(1, "Celular é obrigatório")
        .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, "Celular deve estar no formato (00) 00000-0000"),
    birthDate: z
        .string()
        .min(1, "Data de nascimento é obrigatória")
        .regex(/^\d{2}\/\d{2}\/\d{4}$/, "Data deve estar no formato DD/MM/AAAA"),
    password: z
        .string()
        .min(1, "Senha é obrigatória")
        .min(8, "Senha deve ter pelo menos 8 caracteres"),
    confirmPassword: z.string().min(1, "Confirmação de senha é obrigatória"),
    wantsNewsletter: z.boolean(),
}).refine((data) => data.password === data.confirmPassword, {
    message: "As senhas não coincidem",
    path: ["confirmPassword"],
});

// Step 2: Address Schema
export const addressSchema = z.object({
    cep: z
        .string()
        .min(1, "CEP é obrigatório")
        .regex(/^\d{5}-?\d{3}$/, "CEP deve estar no formato 00000-000"),
    address: z
        .string()
        .min(1, "Endereço é obrigatório")
        .min(5, "Endereço deve ter pelo menos 5 caracteres"),
    number: z
        .string()
        .min(1, "Número é obrigatório"),
    complement: z.string().optional(),
    neighborhood: z
        .string()
        .min(1, "Bairro é obrigatório")
        .min(2, "Bairro deve ter pelo menos 2 caracteres"),
    state: z
        .string()
        .min(1, "Estado é obrigatório"),
    city: z.string().optional(),
    additionalInfo: z
        .string()
        .max(255, "Informações adicionais não podem exceder 255 caracteres")
        .optional(),
});

// Step 3: Payment Schema
export const paymentSchema = z.object({
    paymentMethod: z.enum(["credit", "pix"], {
        message: "Por favor, selecione um método de pagamento",
    }),
    cardNumber: z
        .string()
        .optional()
        .refine(
            (val) => {
                if (!val) return true; // Optional if payment method is not credit
                return /^\d{4}\s\d{4}\s\d{4}\s\d{4}$/.test(val);
            },
            { message: "Número do cartão deve estar no formato 0000 0000 0000 0000" }
        ),
    expirationDate: z
        .string()
        .optional()
        .refine(
            (val) => {
                if (!val) return true;
                return /^\d{2}\/\d{2}\/\d{4}$/.test(val);
            },
            { message: "Data deve estar no formato DD/MM/AAAA" }
        ),
    cvv: z
        .string()
        .optional()
        .refine(
            (val) => {
                if (!val) return true;
                return /^\d{3,4}$/.test(val);
            },
            { message: "CVV deve ter 3 ou 4 dígitos" }
        ),
    cardholderName: z.string().optional(),
    cardholderCpf: z
        .string()
        .optional()
        .refine(
            (val) => {
                if (!val) return true;
                return /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(val);
            },
            { message: "CPF deve estar no formato 000.000.000-00" }
        ),
}).refine(
    (data) => {
        if (data.paymentMethod === "credit") {
            return (
                data.cardNumber &&
                data.expirationDate &&
                data.cvv &&
                data.cardholderName &&
                data.cardholderCpf
            );
        }
        return true;
    },
    {
        message: "Todos os campos do cartão são obrigatórios",
        path: ["cardNumber"],
    }
);

// Combined schema for all steps
export type PersonalDataFormData = z.infer<typeof personalDataSchema>;
export type AddressFormData = z.infer<typeof addressSchema>;
export type PaymentFormData = z.infer<typeof paymentSchema>;

