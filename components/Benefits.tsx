"use client";

import Image from "next/image";

const benefits = [
    {
        id: 1,
        title: "Surpresa",
        icon: "/assets/benefits/surprise.svg",
        description:
            "Chegou a hora de transformar suas ideias em realidade – personalize do seu jeito e surpreenda o mundo.",
        iconBgColor: "#FF355A", // Rosa/Fuchsia
    },
    {
        id: 2,
        title: "Imersão",
        icon: "/assets/benefits/imersion.svg",
        description:
            "Chegou a hora de transformar suas ideias em realidade – personalize do seu jeito e surpreenda o mundo.",
        iconBgColor: "#FF6600", // Laranja
    },
    {
        id: 3,
        title: "Conveniência",
        icon: "/assets/benefits/convenience.svg",
        description:
            "Chegou a hora de transformar suas ideias em realidade – personalize do seu jeito e surpreenda o mundo.",
        iconBgColor: "#00C4D8", // Azul claro/Cyan
    },
];

export function Benefits() {
    return (
        <section className="w-full bg-[#FFE1BE] py-[4vh] md:py-[8vh]">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw] sm:px-[6vw] lg:px-[8vw]">
                {/* Title */}
                <h2 className="mb-8 text-center text-2xl font-bold text-[#732C03] font-hero sm:mb-10 sm:text-3xl md:mb-12 md:text-4xl lg:text-5xl xl:text-6xl">
                    QUAIS SÃO OS NOSSOS BENEFÍCIOS?
                </h2>

                {/* Benefits Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-18">
                    {benefits.map((benefit) => (
                        <div
                            key={benefit.id}
                            className="flex flex-col items-center text-center"
                        >
                            {/* Icon Circle */}
                            <div
                                className="mb-4 flex h-[248px] w-[248px] items-center justify-center rounded-full sm:mb-6"
                                style={{ backgroundColor: benefit.iconBgColor }}
                            >
                                <Image
                                    src={benefit.icon}
                                    alt={benefit.title}
                                    width={248}
                                    height={248}
                                    className="h-auto w-full max-w-[200px]"
                                />
                            </div>

                            {/* Title */}
                            <div className="mb-3 text-xl font-poppins text-[#732C03] sm:mb-4 sm:text-2xl">
                                {benefit.title}
                            </div>

                            {/* Description */}
                            <p className="text-sm leading-relaxed text-[#732C03] sm:text-base">
                                {benefit.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

