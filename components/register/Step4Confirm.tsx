"use client";

import { Pencil, User } from "lucide-react";
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
        <div className="flex flex-1 flex-col rounded-2xl bg-[#FFF4E6] p-8 shadow-lg w-full">
            {/* Header Banner - DADOS (1/2) */}
            <div className="mb-6 flex items-center justify-center">
                <div className="flex items-center gap-2 rounded-lg bg-[#FFB6C1] px-6 py-3">
                    <User className="h-5 w-5 text-[#FFD7DE]" />
                    <span className="text-lg font-bold text-red-1">
                        DADOS (1/2)
                    </span>
                </div>
            </div>

            {/* Plan Selection Section */}
            <div className="mb-6">
                <div className="mb-3 flex items-center justify-between">
                    <h3 className="text-lg font-bold text-[#732C03]">
                        Escolha o plano
                    </h3>
                    <Link
                        href="#"
                        className="inline-flex items-center gap-1 text-sm font-medium text-[#FF355A] hover:text-[#732C03] transition-colors"
                    >
                        <span>Editar</span>
                        <Pencil className="h-4 w-4" />
                    </Link>
                </div>
                <div className="rounded-lg border-2 border-[#FF6600] bg-white p-4">
                    <div className="flex items-center justify-between">
                        <span className="font-bold text-[#732C03]">
                            {selectedPlan?.label.toUpperCase() ||
                                "PLANO MEXERICO"}
                        </span>
                        <span className="font-bold text-[#732C03]">
                            {selectedPlan?.price || "R$90/mês"}
                        </span>
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
                                    ? `${address.address}, ${address.number}${
                                          address.complement
                                              ? ` - ${address.complement}`
                                              : ""
                                      } | CEP ${address.cep} | ${
                                          address.neighborhood
                                      }, ${address.city || ""}, ${
                                          address.state
                                      }`
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
