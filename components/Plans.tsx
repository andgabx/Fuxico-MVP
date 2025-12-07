"use client";

import { Check } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

interface Plan {
    id: number;
    name: string;
    price: string;
    description: string;
    buttonColor: string;
    buttonText: string;
    sectionTitle: string;
    features: string[];
}

const plans: Plan[] = [
    {
        id: 1,
        name: "Plano Bisbilhotice",
        price: "$200,00",
        description:
            "O começo perfeito para quem ama surpresas e quer entrar no jogo!",
        buttonColor: "#00C4D8",
        buttonText: "Eu quero",
        sectionTitle: "Comece com o Plano Bisbilhotice",
        features: [
            "BlindBox exclusiva a cada trimestre",
            "Acesso completo à nossa comunidade",
        ],
    },
    {
        id: 2,
        name: "Plano Mexerico",
        price: "$340,00",
        description:
            "Surpresas trimestrais + frete grátis = combo perfeito para quem não gosta de ficar por fora!",
        buttonColor: "#FF6600",
        buttonText: "Eu quero",
        sectionTitle: "Não perca uma novidade!",
        features: [
            "BlindBox exclusiva a cada trimestre",
            "Acesso completo à nossa comunidade",
            "Frete 100% grátis para todo o Brasil",
        ],
    },
    {
        id: 3,
        name: "Plano Fuxico",
        price: "$450,00",
        description:
            "O nível máximo da aventura: surpresas, brindes e aquele gostinho de encontrar um tesouro especial!",
        buttonColor: "#FF355A",
        buttonText: "Eu quero",
        sectionTitle: "Seja um verdadeiro fuxiqueiro",
        features: [
            "BlindBox exclusiva a cada trimestre",
            "Acesso completo à nossa comunidade",
            "Frete 100% grátis para todo o Brasil",
            "Edições especiais + brindes exclusivos",
        ],
    },
];

export function Plans() {
    return (
        <section className="w-full bg-[#FFE1BE] py-[4vh] md:py-[8vh]">
            <div className="mx-auto w-full max-w-[90vw]">
                {/* Title */}
                <h2 className="mb-8 text-center text-2xl font-bold text-[#732C03] font-hero sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl xl:text-6xl px-[4vw] sm:px-[6vw] lg:px-[8vw]">
                    CONHEÇA NOSSOS CLUBES DE ASSINATURA
                </h2>

                {/* Plans Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3 lg:mb-12 px-[4vw] sm:px-[6vw] lg:px-[8vw]">
                    {plans.map((plan) => (
                        <div
                            key={plan.id}
                            className="w-full min-h-[50vh] rounded-2xl bg-[#FFF4E6] p-4 shadow-lg sm:min-h-[55vh] sm:p-6 md:min-h-[60.28vh]"
                        >
                            {/* Plan Name */}
                            <div className="mb-3 text-xl text-center font-poppins font-bold text-[#732C03] sm:mb-4 sm:text-2xl">
                                {plan.name}
                            </div>

                            {/* Price */}
                            <div className="mb-3 text-center sm:mb-4">
                                <span className="text-3xl font-bold text-[#732C03] sm:text-4xl">
                                    {plan.price}
                                </span>
                            </div>

                            {/* Description */}
                            <div className="mb-4 h-[80px] sm:mb-6 sm:h-[100px]">
                                <p className="text-xs leading-relaxed text-[#732C03] sm:text-sm">
                                    {plan.description}
                                </p>
                            </div>

                            {/* Button */}
                            <button
                                className="mb-4 w-full rounded-full px-4 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:opacity-90 hover:scale-105 sm:mb-6 sm:px-6 sm:py-3 sm:text-base"
                                style={{ backgroundColor: plan.buttonColor }}
                            >
                                <Link href="/register">{plan.buttonText}</Link>
                            </button>

                            <Separator className="my-4 bg-[#732C03] sm:my-6" />

                            {/* Features Section */}
                            <div>
                                <h4 className="mb-3 text-base font-bold text-[#732C03] sm:mb-4 sm:text-lg">
                                    {plan.sectionTitle}
                                </h4>
                                <ul className="space-y-2 sm:space-y-3">
                                    {plan.features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-start gap-2 text-xs text-[#732C03] sm:text-sm"
                                        >
                                            <Check
                                                className="mt-0.5 h-4 w-4 shrink-0 sm:h-5 sm:w-5"
                                                style={{
                                                    color: plan.buttonColor,
                                                }}
                                            />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="flex justify-center">
                    <button className="rounded-full bg-[#FF6600] px-8 py-3 text-base font-bold text-white transition-all duration-300 hover:bg-[#FF8533] hover:scale-105 sm:px-10 sm:py-3.5 sm:text-lg md:px-12 md:py-4">
                        Vamos lá!
                    </button>
                </div>
            </div>
        </section>
    );
}
