"use client";

import Image from "next/image";

const steps = [
    {
        id: 1,
        number: "PASSO 1",
        image: "/assets/howitworks/step1.png",
        description:
            "Escolha o plano que combina com você e faça a assinatura pelo seu dispositivo favorito, em poucas etapas.",
    },
    {
        id: 2,
        number: "PASSO 2",
        image: "/assets/howitworks/step2.png",
        description:
            "Aguarde a chegada da sua blindbox e descubra a surpresa criada por um artista local assim que abrir a embalagem.",
    },
    {
        id: 3,
        number: "PASSO 3",
        image: "/assets/howitworks/step3.png",
        description:
            "Explore os materiais, siga as propostas do artista e viva um momento de criação mão na massa só seu.",
    },
];

export function HowItWorks() {
    return (
        <section className="w-full bg-cream-1 pt-[20vh]">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw] sm:px-[6vw] lg:px-[8vw]">
                {/* Title */}
                <h2 className="mb-8 text-left text-2xl font-bold text-brown-1 font-hero sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl xl:text-6xl">
                    COMO FUNCIONA?
                </h2>

                {/* Steps Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-12">
                    {steps.map((step) => (
                        <div
                            key={step.id}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Step Image */}
                            <div className="relative mb-4 w-full sm:mb-6">
                                <div className="relative aspect-square w-full overflow-hidden rounded-2xl">
                                    <Image
                                        src={step.image}
                                        alt={step.number}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                </div>
                            </div>

                            {/* Step Number */}
                            <div className="mb-3 text-lg font-bold text-red-1 sm:mb-4 sm:text-xl md:text-2xl">
                                {step.number}
                            </div>

                            {/* Step Description */}
                            <p className="text-sm leading-relaxed text-brown-1 sm:text-base">
                                {step.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

