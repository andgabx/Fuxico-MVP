"use client";

import Image from "next/image";

export function AboutUs() {
    return (
        <section className="relative w-full bg-cream-1 overflow-hidden">
            {/* Background Image - Preserving scalloped borders */}
            <div className="relative w-full z-[1]">
                <Image
                    src="/assets/redbg.png"
                    alt="Background"
                    width={1920}
                    height={1080}
                    className="w-full h-full"
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
                                <div className="absolute inset-0 flex items-center justify-center bg-[#FCD8B3] rounded-2xl m-4 overflow-hidden">
                                    <video
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        className="w-full h-full object-contain"
                                    >
                                        <source
                                            src="/assets/aboutus/motion.mp4"
                                            type="video/mp4"
                                        />
                                    </video>
                                </div>
                            </div>
                        </div>

                        {/* Left Side - Text Content (Below on mobile) */}
                        <div className="flex-1 order-2 md:order-1 text-center md:text-left">
                            <h2 className="mb-6 text-4xl font-bold text-[#FFE1BE] font-hero md:text-5xl lg:text-6xl">
                                PRAZER,
                                <br />
                                SOMOS A{" "}
                                <span className="text-blue-1">FUXICO!</span>
                            </h2>
                            <p className="mb-6 max-w-2xl mx-auto md:mx-0 text-base leading-relaxed text-white md:text-lg">
                                Chegou a hora de transformar suas ideias em
                                realidade – personalize do seu jeito e
                                surpreenda o mundo.
                            </p>
                            <button className="rounded-full bg-[#FFE1BE] px-6 py-3 text-sm font-medium text-[#FF355A] shadow-lg transition-all duration-300 hover:opacity-90 md:px-18 md:py-4 md:text-base">
                                Sobre nós
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
