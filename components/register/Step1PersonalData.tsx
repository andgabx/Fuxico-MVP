"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Eye, EyeOff, User } from "lucide-react";
import Link from "next/link";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import {
    personalDataSchema,
    planOptions,
    type PersonalDataFormData,
} from "@/lib/schemas/register";

interface Step1PersonalDataProps {
    onNext: (data: PersonalDataFormData) => void;
}

export function Step1PersonalData({ onNext }: Step1PersonalDataProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const form = useForm<PersonalDataFormData>({
        resolver: zodResolver(personalDataSchema),
        defaultValues: {
            wantsNewsletter: false,
        },
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue,
        watch,
    } = form;

    const selectedPlan = watch("plan");
    const selectedPlanData = planOptions.find((p) => p.value === selectedPlan);

    const onSubmit = (data: PersonalDataFormData) => {
        onNext(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-1 w-full">
            <div className="flex flex-1 flex-col rounded-2xl bg-cream-2 p-8 shadow-lg w-full">
                {/* Header Banner - DADOS (1/2) */}
                <div className="mb-6 flex items-center justify-center">
                    <div className="flex items-center justify-center gap-2 rounded-lg bg-pink-1 px-6 py-3 w-full">
                        <User className="h-5 w-5 fill-red-1 text-red-1" />
                        <span className="text-lg font-bold text-red-1">
                            DADOS (1/2)
                        </span>
                    </div>
                </div>

                {/* Choose Plan Section */}
                <div className="mb-8">
                    <div className="mb-4 text-xl font-bold text-brown-1">
                        Escolha o plano
                    </div>
                    <Select
                        value={selectedPlan}
                        onValueChange={(value) =>
                            setValue(
                                "plan",
                                value as "bisbilhotice" | "mexerico" | "fuxico"
                            )
                        }
                    >
                        <SelectTrigger className="w-full rounded-lg border-2 border-orange-1 bg-white px-4 py-3 h-auto shadow-none hover:border-orange-1 focus:border-orange-1">
                            <div className="flex w-full items-center justify-between">
                                {selectedPlanData ? (
                                    <>
                                        <span className="text-red-1 font-semibold">
                                            {selectedPlanData.label.toUpperCase()}
                                        </span>
                                        <span className="text-red-1 font-semibold">
                                            {selectedPlanData.price}
                                        </span>
                                    </>
                                ) : (
                                    <SelectValue
                                        placeholder="Selecione um plano"
                                        className="text-red-1"
                                    />
                                )}
                            </div>
                        </SelectTrigger>
                        <SelectContent className="min-w-[var(--radix-select-trigger-width)]">
                            {planOptions.map((plan) => (
                                <SelectItem
                                    key={plan.value}
                                    value={plan.value}
                                    className="cursor-pointer"
                                >
                                    <div className="flex items-center justify-between w-full">
                                        <span className="text-red-1 font-semibold">
                                            {plan.label.toUpperCase()}
                                        </span>
                                        <span className="text-red-1 font-semibold ml-4">
                                            {plan.price}
                                        </span>
                                    </div>
                                </SelectItem>
                            ))}
                        </SelectContent>
                    </Select>
                    {errors.plan && (
                        <p className="mt-2 text-sm text-red-1">
                            {errors.plan.message}
                        </p>
                    )}
                </div>

                {/* Personal Data Section */}
                <div>
                    <div className="mb-4 text-xl font-bold text-brown-1">
                        Dados pessoais
                    </div>
                    <div className="mb-4">
                        <span className="text-sm text-brown-1">
                            Já possui conta?{" "}
                        </span>
                        <Link
                            href="/"
                            className="text-sm font-medium text-red-1 hover:underline"
                        >
                            Clique aqui para entrar
                        </Link>
                    </div>

                    <div className="space-y-4">
                        {/* Email */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-brown-1">
                                E-mail
                            </label>
                            <input
                                type="email"
                                placeholder="Insira seu e-mail"
                                {...register("email")}
                                className={`w-full rounded-lg border px-4 py-3 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                    errors.email
                                        ? "border-red-1 focus:ring-red-1/20"
                                        : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                }`}
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-red-1">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        {/* CPF */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-brown-1">
                                CPF
                            </label>
                            <input
                                type="text"
                                placeholder="000.000.000-00"
                                {...register("cpf")}
                                className={`w-full rounded-lg border px-4 py-3 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                    errors.cpf
                                        ? "border-red-1 focus:ring-red-1/20"
                                        : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                }`}
                            />
                            {errors.cpf && (
                                <p className="mt-1 text-sm text-red-1">
                                    {errors.cpf.message}
                                </p>
                            )}
                        </div>

                        {/* Name and Surname */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-brown-1">
                                    Nome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Insira o seu nome"
                                    {...register("firstName")}
                                    className={`w-full rounded-lg border px-4 py-3 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                        errors.firstName
                                            ? "border-red-1 focus:ring-red-1/20"
                                            : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                    }`}
                                />
                                {errors.firstName && (
                                    <p className="mt-1 text-sm text-red-1">
                                        {errors.firstName.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-brown-1">
                                    Sobrenome
                                </label>
                                <input
                                    type="text"
                                    placeholder="Insira o seu sobrenome"
                                    {...register("lastName")}
                                    className={`w-full rounded-lg border px-4 py-3 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                        errors.lastName
                                            ? "border-red-1 focus:ring-red-1/20"
                                            : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                    }`}
                                />
                                {errors.lastName && (
                                    <p className="mt-1 text-sm text-red-1">
                                        {errors.lastName.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Phone and Birth Date */}
                        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                    Celular
                                </label>
                                <input
                                    type="tel"
                                    placeholder="(00) 00000-0000"
                                    {...register("phone")}
                                    className={`w-full rounded-lg border px-4 py-3 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                        errors.phone
                                            ? "border-red-1 focus:ring-red-1/20"
                                            : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                    }`}
                                />
                                {errors.phone && (
                                    <p className="mt-1 text-sm text-red-1">
                                        {errors.phone.message}
                                    </p>
                                )}
                            </div>
                            <div>
                                <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                    Data de nascimento
                                </label>
                                <input
                                    type="text"
                                    placeholder="DD/MM/AAAA"
                                    {...register("birthDate")}
                                    className={`w-full rounded-lg border px-4 py-3 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                        errors.birthDate
                                            ? "border-red-1 focus:ring-red-1/20"
                                            : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                    }`}
                                />
                                {errors.birthDate && (
                                    <p className="mt-1 text-sm text-red-1">
                                        {errors.birthDate.message}
                                    </p>
                                )}
                            </div>
                        </div>

                        {/* Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                Senha
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Insira a sua senha"
                                    {...register("password")}
                                    className={`w-full rounded-lg border px-4 py-3 pr-12 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                        errors.password
                                            ? "border-red-1 focus:ring-red-1/20"
                                            : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowPassword(!showPassword)
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-1 hover:text-[#732C03]"
                                >
                                    {showPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-red-1">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {/* Confirm Password */}
                        <div>
                            <label className="mb-2 block text-sm font-medium text-[#732C03]">
                                Confirmar senha
                            </label>
                            <div className="relative">
                                <input
                                    type={
                                        showConfirmPassword
                                            ? "text"
                                            : "password"
                                    }
                                    placeholder="Confirme a sua senha"
                                    {...register("confirmPassword")}
                                    className={`w-full rounded-lg border px-4 py-3 pr-12 bg-cream-3 text-brown-1 placeholder:text-brown-1 focus:outline-none focus:ring-2 ${
                                        errors.confirmPassword
                                            ? "border-red-1 focus:ring-red-1/20"
                                            : "border-gray-300 focus:border-red-1 focus:ring-red-1/20"
                                    }`}
                                />
                                <button
                                    type="button"
                                    onClick={() =>
                                        setShowConfirmPassword(
                                            !showConfirmPassword
                                        )
                                    }
                                    className="absolute right-4 top-1/2 -translate-y-1/2 text-brown-1 hover:text-[#732C03]"
                                >
                                    {showConfirmPassword ? (
                                        <EyeOff className="h-5 w-5" />
                                    ) : (
                                        <Eye className="h-5 w-5" />
                                    )}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-red-1">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </div>

                        {/* Newsletter Checkbox */}
                        <div className="flex items-start gap-2">
                            <input
                                type="checkbox"
                                id="newsletter"
                                {...register("wantsNewsletter")}
                                className="mt-1 h-5 w-5 rounded border-gray-300 text-red-1 focus:ring-red-1"
                            />
                            <label
                                htmlFor="newsletter"
                                className="text-sm text-brown-1"
                            >
                                Quero receber ofertas e novidades relacionadas
                                as próximas edições da Fuxico!
                            </label>
                        </div>
                    </div>
                </div>

                {/* Next Button */}
                <div className="mt-8">
                    <button
                        type="submit"
                        className="w-full rounded-lg bg-red-1 px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-red-2 hover:shadow-lg"
                    >
                        Avançar
                    </button>
                </div>
            </div>
        </form>
    );
}
