"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreditCard } from "lucide-react";
import {
    paymentSchema,
    type PaymentFormData,
} from "@/lib/schemas/register";

interface Step3PaymentProps {
    onNext: (data: PaymentFormData) => void;
    onBack: () => void;
}

export function Step3Payment({ onNext, onBack }: Step3PaymentProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        watch,
    } = useForm<PaymentFormData>({
        resolver: zodResolver(paymentSchema),
        defaultValues: {
            paymentMethod: "credit",
        },
    });

    const paymentMethod = watch("paymentMethod");

    const onSubmit = (data: PaymentFormData) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-2xl bg-[#FFF4E6] p-8 shadow-lg">
                {/* Header Banner */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg bg-[#FF355A] px-4 py-2">
                        <CreditCard className="h-5 w-5 text-white" />
                        <span className="font-bold text-white">PAGAMENTO</span>
                    </div>
                </div>

                {/* Payment Method Selection */}
                <div className="mb-6">
                    <h2 className="mb-4 text-xl font-bold text-[#732C03]">
                        Método de pagamento
                    </h2>
                    <div className="space-y-3">
                        {/* Credit Card Option */}
                        <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-200 bg-white p-4 transition-all hover:border-[#FF355A]">
                            <input
                                type="radio"
                                value="credit"
                                {...register("paymentMethod")}
                                className="h-5 w-5 border-2 border-[#FF355A] text-[#FF355A] focus:ring-[#FF355A]"
                            />
                            <CreditCard className="h-6 w-6 text-[#FF355A]" />
                            <span className="font-medium text-[#732C03]">
                                Cartão de crédito
                            </span>
                        </label>

                        {/* Pix Option */}
                        <label className="flex cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-200 bg-white p-4 transition-all hover:border-[#FF355A]">
                            <input
                                type="radio"
                                value="pix"
                                {...register("paymentMethod")}
                                className="h-5 w-5 border-2 border-[#FF355A] text-[#FF355A] focus:ring-[#FF355A]"
                            />
                            <div className="flex h-6 w-6 items-center justify-center rounded bg-gradient-to-br from-[#32BCAD] to-[#00A86B] text-white font-bold text-xs">
                                P
                            </div>
                            <span className="font-medium text-[#732C03]">Pix</span>
                        </label>
                    </div>
                    {errors.paymentMethod && (
                        <p className="mt-2 text-sm text-[#FF355A]">
                            {errors.paymentMethod.message}
                        </p>
                    )}
                </div>

                {/* Credit Card Details */}
                {paymentMethod === "credit" && (
                    <>
                        <div className="mb-6 border-t border-gray-200 pt-6">
                            <h3 className="mb-4 text-lg font-bold text-[#FF355A]">
                                Cartão de crédito
                            </h3>
                            <div className="space-y-4">
                                {/* Card Number */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                        Número do cartão
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="0000 0000 0000 0000"
                                        {...register("cardNumber")}
                                        className={`w-full rounded-lg border bg-[#FFF4E6] px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                            errors.cardNumber
                                                ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                                : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                                        }`}
                                    />
                                    {errors.cardNumber && (
                                        <p className="mt-1 text-sm text-[#FF355A]">
                                            {errors.cardNumber.message}
                                        </p>
                                    )}
                                </div>

                                {/* Expiration Date and CVV */}
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                            Data de validade
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="DD/MM/AAAA"
                                            {...register("expirationDate")}
                                            className={`w-full rounded-lg border bg-[#FFF4E6] px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                                errors.expirationDate
                                                    ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                                    : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                                            }`}
                                        />
                                        {errors.expirationDate && (
                                            <p className="mt-1 text-sm text-[#FF355A]">
                                                {errors.expirationDate.message}
                                            </p>
                                        )}
                                    </div>
                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                            CVV
                                        </label>
                                        <input
                                            type="text"
                                            placeholder="000"
                                            {...register("cvv")}
                                            className={`w-full rounded-lg border bg-[#FFF4E6] px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                                errors.cvv
                                                    ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                                    : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                                            }`}
                                        />
                                        {errors.cvv && (
                                            <p className="mt-1 text-sm text-[#FF355A]">
                                                {errors.cvv.message}
                                            </p>
                                        )}
                                    </div>
                                </div>

                                {/* Cardholder Name */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                        Nome impresso no cartão
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Inserir nome do titular"
                                        {...register("cardholderName")}
                                        className={`w-full rounded-lg border bg-[#FFF4E6] px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                            errors.cardholderName
                                                ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                                : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                                        }`}
                                    />
                                    {errors.cardholderName && (
                                        <p className="mt-1 text-sm text-[#FF355A]">
                                            {errors.cardholderName.message}
                                        </p>
                                    )}
                                </div>

                                {/* CPF */}
                                <div>
                                    <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                        CPF do titular
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="000.000.000-00"
                                        {...register("cardholderCpf")}
                                        className={`w-full rounded-lg border bg-[#FFF4E6] px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                            errors.cardholderCpf
                                                ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                                : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                                        }`}
                                    />
                                    {errors.cardholderCpf && (
                                        <p className="mt-1 text-sm text-[#FF355A]">
                                            {errors.cardholderCpf.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </>
                )}

                {/* Next Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-[#FF355A] px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-[#E62E4F] hover:shadow-lg"
                    >
                        Avançar
                    </button>
                </div>
            </div>
        </form>
    );
}
