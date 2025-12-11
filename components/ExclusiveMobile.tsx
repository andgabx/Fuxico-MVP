"use client";

import Image from "next/image";
import Link from "next/link";

export function ExclusiveMobile() {
    return (
        <section className="relative w-full overflow-hidden py-[8vh] min-h-[90vh] bg-cream-1">
            {/* Background Banner */}
            <div className="relative w-full flex justify-center items-center h-[60vh] sm:h-[50vh] md:h-auto">
                <Image
                    src="/assets/exclusiveblindboxes/banner.png"
                    alt="Exclusive Blindboxes Banner"
                    width={1920}
                    height={1080}
                    className="w-full h-full object-cover"
                    priority
                />
                {/* Title - Inside banner, top center */}
                <div className="absolute top-8 sm:top-12 left-1/2 transform -translate-x-1/2 z-20 px-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white font-hero text-center">
                        BLINDBOXES EXCLUSIVAS
                    </h2>
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center py-8">
                <div className="mx-auto w-full max-w-[90vw] px-4 sm:px-6">
                    <div className="flex flex-col items-center gap-6 sm:gap-8">
                        {/* Text Content Card */}
                        <div className="flex-1 max-w-2xl mx-auto w-full">
                            {/* Beige Card */}
                            <div className="rounded-2xl bg-cream-2 p-4 sm:p-6 shadow-lg">
                                <p className="mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed text-brown-1 text-left">
                                    Mergulhe no universo criativo recifense com
                                    nossas <strong>blindboxes</strong>{" "}
                                    exclusivas. Cada envio traz em uma surpresa
                                    diferente um novo jeito de fazer arte,
                                    desenhada para revelar o estilo e a história
                                    de um artista local em cada detalhe.
                                </p>
                                <div className="flex justify-center">
                                    <Link
                                        href="/#plans"
                                        className="inline-flex items-center justify-center rounded-lg bg-orange-1 w-full py-2.5 sm:py-3 text-sm sm:text-base font-bold text-white transition-all duration-300 hover:bg-orange-2 hover:scale-105"
                                    >
                                        Veja nossos planos
                                    </Link>
                                </div>
                            </div>
                            {/* Bottom Slogan */}
                            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl font-bold text-cream-1 font-hero text-center px-4">
                                Assine já e deixe a inspiração
                                <br />
                                te encontrar!
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
