"use client";

import Image from "next/image";
import Link from "next/link";

export function Exclusive() {
    return (
        <section className="relative w-full overflow-hidden py-[8vh] bg-cream-1">
            {/* Background Banner */}
            <div className="relative w-full flex justify-center items-center">
                <Image
                    src="/assets/exclusiveblindboxes/banner.png"
                    alt="Exclusive Blindboxes Banner"
                    width={1920}
                    height={1080}
                    className="w-full sm:w-[90vw] lg:w-[80vw] h-auto object-cover"
                    priority
                />
                {/* Title - Inside banner, top center */}
                <div className="absolute top-8 sm:top-12 lg:top-16 left-1/2 transform -translate-x-1/2 z-20 px-4">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white font-hero text-center">
                        BLINDBOXES EXCLUSIVAS
                    </h2>
                </div>
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="mx-auto w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[70vw] px-4 sm:px-8 lg:px-12">
                    <div className="flex flex-col lg:flex-row items-center gap-6 sm:gap-8 lg:gap-12">
                        {/* Left Side - Text Content Card */}
                        <div className="flex-1 order-2 lg:order-1 max-w-2xl mx-auto lg:mx-0 w-full">
                            {/* Beige Card */}
                            <div className="rounded-2xl sm:rounded-3xl bg-cream-2 p-4 sm:p-6 lg:p-8 shadow-lg">
                                <p className="mb-4 sm:mb-6 text-sm sm:text-base lg:text-lg leading-relaxed text-brown-1 text-left">
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
                            <h3 className="mt-4 sm:mt-6 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-cream-1 font-hero text-center px-4">
                                Assine já e deixe a inspiração
                                <br />
                                te encontrar!
                            </h3>
                        </div>

                        {/* Right Side - Box Image */}
                        <div className="hidden lg:block relative w-full max-w-md lg:max-w-lg order-1 lg:order-2">
                            <div className="relative w-full transform scale-125 lg:scale-150 xl:scale-[1.75] translate-x-8 lg:translate-x-12 xl:translate-x-16 translate-y-12 lg:translate-y-14 xl:translate-y-20">
                                <Image
                                    src="/assets/exclusiveblindboxes/box.png"
                                    alt="Exclusive Blindbox"
                                    width={900}
                                    height={600}
                                    className="w-full h-auto"
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
