"use client";

import Image from "next/image";

export function AboutUs() {
    return (
        <section className="relative w-full">
            {/* Background Image - Preserving scalloped borders */}
            <div className="relative w-full">
                <Image
                    src="/assets/redbg.png"
                    alt="Background"
                    width={1920}
                    height={1080}
                    className="w-full h-[70vh]"
                    priority
                    style={{ display: "block" }}
                />
            </div>

            {/* Content Overlay */}
            <div className="absolute inset-0 z-10 flex items-center justify-center">
                <div className="mx-auto w-full max-w-[90vw] px-[4vw]">
                    <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                        {/* Right Side - Logo Container (First on mobile) */}
                        <div className="relative w-full max-w-md md:max-w-lg order-1 md:order-2">
                            <div className="relative w-full">
                                <Image
                                    src="/assets/creambg.png"
                                    alt="Cream background"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                />
                                <div className="absolute inset-0 flex items-center justify-center bg-[#FFE1BE] rounded-2xl m-4">
                                    <Image
                                        src="/assets/logos/oficial.svg"
                                        alt="Fuxico Logo"
                                        width={250}
                                        height={80}
                                        className="h-auto w-2/3"
                                        priority
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Left Side - Text Content (Below on mobile) */}
                        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                            <h2 className="mb-6 text-4xl font-bold text-[#FFE1BE] font-hero md:text-5xl lg:text-6xl">
                                Sua ideia,
                                <br />
                                nossa criação
                            </h2>
                            <p className="mb-6 max-w-2xl mx-auto md:mx-0 text-base leading-relaxed text-white md:text-lg">
                                Chegou a hora de transformar suas ideias em
                                realidade – personalize do seu jeito e
                                surpreenda o mundo.
                            </p>
                            <button className="rounded-full bg-[#FFE1BE] px-6 py-3 text-sm font-medium text-[#FF355A] shadow-lg transition-all duration-300 hover:opacity-90 md:px-8 md:py-4 md:text-base">
                                Sobre nós
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
