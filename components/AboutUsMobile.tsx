"use client";

import Image from "next/image";

export function AboutUsMobile() {
    return (
        <section className="relative w-full bg-cream-1 overflow-hidden">
            {/* Red Background Container */}
            <div className="relative w-full flex items-center justify-center min-h-[80vh] py-8">
                {/* Red Background Image */}
                <div className="absolute w-full inset-0 z-0">
                    <Image
                        src="/assets/redbg.svg"
                        alt="Background"
                        width={1920}
                        height={1080}
                        className="w-full h-full object-cover"
                        priority
                    />
                </div>

                {/* Content Container - Inside redbg (relative) */}
                <div className="relative z-10 mx-auto w-full max-w-[90vw] px-[4vw]">
                    <div className="flex flex-col items-center gap-8">
                        {/* Cream Background Container */}
                        <div className="relative w-full max-w-md">
                            {/* Cream Background - Contains motion */}
                            <div className="relative w-full">
                                <Image
                                    src="/assets/creambg.svg"
                                    alt="Cream background"
                                    width={600}
                                    height={600}
                                    className="w-full h-auto"
                                    priority
                                />
                                {/* Motion Video - Inside creambg */}
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

                        {/* Text Content */}
                        <div className="flex-1 text-center">
                            <h2 className="mb-6 text-4xl font-bold text-[#FFE1BE] font-hero">
                                PRAZER,
                                <br />
                                SOMOS A{" "}
                                <span className="text-blue-1">FUXICO!</span>
                            </h2>
                            <p className="mb-6 max-w-2xl mx-auto text-base leading-relaxed text-white">
                                Chegou a hora de transformar suas ideias em
                                realidade – personalize do seu jeito e
                                surpreenda o mundo.
                            </p>
                            <button className="rounded-full bg-[#FFE1BE] px-6 py-3 text-sm font-medium text-[#FF355A] shadow-lg transition-all duration-300 hover:opacity-90">
                                Sobre nós
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
