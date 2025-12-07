"use client";

import { Pencil, CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { planOptions } from "@/lib/schemas/register";
import type {
    PersonalDataFormData,
    AddressFormData,
    PaymentFormData,
} from "@/lib/schemas/register";

interface Step4ConfirmProps {
    onNext: () => void;
    onBack: () => void;
    formData: {
        personalData?: PersonalDataFormData;
        address?: AddressFormData;
        payment?: PaymentFormData;
    };
}

export function Step4Confirm({ onNext, formData }: Step4ConfirmProps) {
    const { personalData, address, payment } = formData;
    const selectedPlan = personalData?.plan
        ? planOptions.find((p) => p.value === personalData.plan)
        : null;
    return (
        <div className="rounded-2xl bg-[#FFF4E6] p-8 shadow-lg">
            {/* Header Banner */}
            <div className="mb-6 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-lg bg-[#FF355A] px-6 py-3">
                    <CheckCircle2 className="h-6 w-6 text-white" />
                    <span className="text-xl font-bold text-white">CONFIRMAR</span>
                </div>
            </div>

            {/* Order Summary */}
            <div className="mb-6 rounded-lg bg-[#FFE1BE] p-6">
                <h3 className="mb-4 text-lg font-bold text-[#732C03]">
                    {selectedPlan?.label.toUpperCase() || "PLANO"}
                </h3>
                <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
                    <p className="text-sm text-[#732C03]">
                        BlindBox exclusiva a cada trimestre, acesso completo à
                        nossa comunidade e frete 100% grátis para todo o Brasil
                    </p>
                    <span className="font-bold text-[#FF355A]">
                        {selectedPlan?.price || "R$90/mês"}
                    </span>
                </div>

                <div className="space-y-2 border-t border-[#732C03]/20 pt-4">
                    <div className="flex justify-between text-sm text-[#732C03]">
                        <span>Descrição</span>
                        <span>Valor</span>
                    </div>
                    <div className="flex justify-between font-medium text-[#732C03]">
                        <span>Subtotal</span>
                        <span>R$90,00</span>
                    </div>
                    <div className="flex justify-between font-medium text-[#732C03]">
                        <span>Taxa de entrega</span>
                        <span>R$00,00</span>
                    </div>
                    <div className="flex justify-between border-t border-[#732C03]/20 pt-2 text-lg font-bold text-[#FF355A]">
                        <span>Total</span>
                        <span>R$90,00</span>
                    </div>
                </div>
            </div>

            {/* Personal Data */}
            <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-[#732C03]">
                    Dados pessoais
                </h3>
                <div className="rounded-lg bg-white p-4">
                    <p className="text-sm text-[#732C03]">
                        {personalData
                            ? `${personalData.firstName} ${personalData.lastName}`
                            : "Nome não informado"}
                    </p>
                    <p className="text-sm text-[#732C03]">
                        {personalData?.email || "E-mail não informado"}
                        {personalData?.phone && ` | ${personalData.phone}`}
                    </p>
                    <Link
                        href="#"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#FF355A] hover:text-[#732C03] transition-colors"
                    >
                        <Pencil className="h-4 w-4" />
                        <span>Editar</span>
                    </Link>
                </div>
            </div>

            {/* Delivery Address */}
            <div className="mb-6">
                <h3 className="mb-3 text-lg font-bold text-[#732C03]">
                    Endereço de entrega
                </h3>
                <div className="rounded-lg bg-white p-4">
                    <div className="mb-2 flex items-start gap-2">
                        <input
                            type="radio"
                            checked
                            readOnly
                            className="mt-1 h-5 w-5 border-2 border-[#FF355A] text-[#FF355A]"
                        />
                        <div className="flex-1">
                            <p className="text-sm font-medium text-[#732C03]">
                                Destinatário:{" "}
                                {personalData
                                    ? `${personalData.firstName} ${personalData.lastName}`
                                    : "Nome não informado"}
                            </p>
                            <p className="text-sm text-[#732C03]">
                                {address
                                    ? `${address.address}, ${address.number}${address.complement ? ` - ${address.complement}` : ""} | CEP ${address.cep} | ${address.neighborhood}, ${address.city || ""}, ${address.state}`
                                    : "Endereço não informado"}
                            </p>
                        </div>
                    </div>
                    <Link
                        href="#"
                        className="mt-2 inline-flex items-center gap-1 text-sm font-medium text-[#FF355A] hover:text-[#732C03] transition-colors"
                    >
                        <Pencil className="h-4 w-4" />
                        <span>Editar</span>
                    </Link>
                    <div className="mt-3 flex items-start gap-2">
                        <input
                            type="checkbox"
                            id="same-address"
                            className="mt-1 h-5 w-5 rounded border-gray-300 text-[#FF355A] focus:ring-[#FF355A]"
                        />
                        <label
                            htmlFor="same-address"
                            className="text-sm text-[#732C03]"
                        >
                            Endereço de entrega é o mesmo da cobrança.
                        </label>
                    </div>
                </div>
            </div>

            {/* Confirm Button */}
            <div className="mt-8">
                <button
                    onClick={onNext}
                    className="w-full rounded-lg bg-[#FF355A] px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-[#E62E4F] hover:shadow-lg"
                >
                    Avançar
                </button>
            </div>
        </div>
    );
}

