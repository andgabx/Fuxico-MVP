"use client";

import Image from "next/image";

export function HeroOurPlans() {
    return (
        <section className="relative w-full px-4 sm:px-[4vw] pt-[20vh] sm:pt-[25vh] lg:pt-[30vh] overflow-hidden bg-cream-1">
            {/* Background Banner */}
            <div className="relative w-full">
                <Image
                    src="/assets/howitworks/redbanner.svg"
                    alt="Background Banner"
                    width={1920}
                    height={1080}
                    className="w-full h-auto object-cover"
                    priority
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="mx-auto w-full max-w-[90vw] sm:max-w-[85vw] lg:max-w-[80vw] px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col pt-[30vh] lg:flex-row items-center gap-4 sm:gap-6 lg:gap-8 xl:gap-12">
                        {/* Left Side - Text Content */}
                        <div className="flex-1 order-2 lg:order-1 text-center lg:text-left w-full sm:translate-y-[-5vh]">
                            <h1 className="mb-3 sm:mb-4 lg:mb-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-cream-1 font-hero">
                                CLUBE DE ASSINATURA
                            </h1>
                            <p className="max-w-2xl mx-auto lg:mx-0 text-sm sm:text-base lg:text-lg xl:text-xl leading-relaxed text-cream-1">
                                Nos clubes de assinatura da Fuxico, cada caixa é
                                um convite para se aproximar de artistas locais
                                e experimentar novas formas de criar. Você
                                escolhe o plano e nós cuidamos das surpresas que
                                chegam até você.
                            </p>
                        </div>

                        {/* Right Side - Book Image */}
                        <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg order-1 lg:order-2">
                            <div className="relative w-full">
                                <Image
                                    src="/assets/howitworks/book.svg"
                                    alt="Subscription Box"
                                    width={600}
                                    height={600}
                                    className="w-full translate-y-16 hidden md:block scale-125 h-auto"
                                    priority
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
