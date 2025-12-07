"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Pencil, User, ChevronDown } from "lucide-react";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    addressSchema,
    type AddressFormData,
} from "@/lib/schemas/register";

interface Step2AddressProps {
    onNext: (data: AddressFormData) => void;
    onBack: () => void;
}

const states = [
    "AC", "AL", "AP", "AM", "BA", "CE", "DF", "ES", "GO", "MA",
    "MT", "MS", "MG", "PA", "PB", "PR", "PE", "PI", "RJ", "RN",
    "RS", "RO", "RR", "SC", "SP", "SE", "TO"
];

export function Step2Address({ onNext, onBack }: Step2AddressProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = useForm<AddressFormData>({
        resolver: zodResolver(addressSchema),
    });

    const selectedState = watch("state");

    const onSubmit = (data: AddressFormData) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="rounded-2xl bg-[#FFF4E6] p-8 shadow-lg">
                {/* Header Banner */}
                <div className="mb-6 flex items-center justify-between">
                    <div className="flex items-center gap-2 rounded-lg bg-[#FF355A] px-4 py-2">
                        <User className="h-5 w-5 text-white" />
                        <span className="font-bold text-white">DADOS (2/2)</span>
                    </div>
                </div>

                {/* Delivery Address Title */}
                <h2 className="mb-4 text-xl font-bold text-[#732C03]">
                    Endereço para entrega
                </h2>

                <div className="mb-4">
                    <span className="text-sm text-[#732C03]">
                        Já possui conta?{" "}
                    </span>
                    <Link
                        href="/login"
                        className="text-sm font-medium text-[#FF355A] hover:underline"
                    >
                        Clique aqui para entrar
                    </Link>
                </div>

                <div className="space-y-4">
                    {/* CEP */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#732C03]">
                            CEP<span className="text-[#FF355A]">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="00000-000"
                            {...register("cep")}
                            className={`w-full rounded-lg border px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                errors.cep
                                    ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                    : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                            }`}
                        />
                        {errors.cep && (
                            <p className="mt-1 text-sm text-[#FF355A]">
                                {errors.cep.message}
                            </p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#732C03]">
                            Endereço<span className="text-[#FF355A]">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Insira o seu endereço"
                            {...register("address")}
                            className={`w-full rounded-lg border px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                errors.address
                                    ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                    : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                            }`}
                        />
                        {errors.address && (
                            <p className="mt-1 text-sm text-[#FF355A]">
                                {errors.address.message}
                            </p>
                        )}
                    </div>

                    {/* Number and Complement */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                Número<span className="text-[#FF355A]">*</span>
                            </label>
                            <input
                                type="text"
                                placeholder="000"
                                {...register("number")}
                                className={`w-full rounded-lg border px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                    errors.number
                                        ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                        : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                                }`}
                            />
                            {errors.number && (
                                <p className="mt-1 text-sm text-[#FF355A]">
                                    {errors.number.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                Complemento
                            </label>
                            <input
                                type="text"
                                placeholder="Insira o complemento"
                                {...register("complement")}
                                className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:border-[#FF355A] focus:outline-none focus:ring-2 focus:ring-[#FF355A]/20"
                            />
                        </div>
                    </div>

                    {/* Neighborhood */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#732C03]">
                            Bairro<span className="text-[#FF355A]">*</span>
                        </label>
                        <input
                            type="text"
                            placeholder="Insira o seu endereço"
                            {...register("neighborhood")}
                            className={`w-full rounded-lg border px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 ${
                                errors.neighborhood
                                    ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                    : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                            }`}
                        />
                        {errors.neighborhood && (
                            <p className="mt-1 text-sm text-[#FF355A]">
                                {errors.neighborhood.message}
                            </p>
                        )}
                    </div>

                    {/* State and City */}
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                Estado<span className="text-[#FF355A]">*</span>
                            </label>
                            <Select
                                value={selectedState}
                                onValueChange={(value) => setValue("state", value)}
                            >
                                <SelectTrigger
                                    className={`w-full ${
                                        errors.state
                                            ? "border-[#FF355A]"
                                            : "border-gray-300"
                                    }`}
                                >
                                    <SelectValue placeholder="Selecione estado" />
                                </SelectTrigger>
                                <SelectContent>
                                    {states.map((state) => (
                                        <SelectItem key={state} value={state}>
                                            {state}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                            {errors.state && (
                                <p className="mt-1 text-sm text-[#FF355A]">
                                    {errors.state.message}
                                </p>
                            )}
                        </div>
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                Cidade
                            </label>
                            <div className="relative">
                                <Select
                                    onValueChange={(value) => setValue("city", value)}
                                >
                                    <SelectTrigger className="w-full border-gray-300">
                                        <SelectValue placeholder="Selecione cidade" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="recife">Recife</SelectItem>
                                        <SelectItem value="sao-paulo">São Paulo</SelectItem>
                                        <SelectItem value="rio">Rio de Janeiro</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                    </div>

                    {/* Additional Information */}
                    <div>
                        <label className="mb-2 block text-sm font-medium text-[#732C03]">
                            Informações adicionais
                        </label>
                        <textarea
                            {...register("additionalInfo")}
                            placeholder="Descreva aqui pontos de referência ou mais detalhes do local para ajudar na entrega."
                            rows={4}
                            maxLength={255}
                            className={`w-full rounded-lg border px-4 py-3 text-[#732C03] placeholder:text-gray-400 focus:outline-none focus:ring-2 resize-none ${
                                errors.additionalInfo
                                    ? "border-[#FF355A] focus:ring-[#FF355A]/20"
                                    : "border-gray-300 focus:border-[#FF355A] focus:ring-[#FF355A]/20"
                            }`}
                        />
                        <div className="mt-1 text-right text-xs text-gray-500">
                            {watch("additionalInfo")?.length || 0}/255 caracteres
                        </div>
                        {errors.additionalInfo && (
                            <p className="mt-1 text-sm text-[#FF355A]">
                                {errors.additionalInfo.message}
                            </p>
                        )}
                    </div>
                </div>

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
