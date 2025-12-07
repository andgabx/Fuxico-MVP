"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";

export function Hero() {
    return (
        <section className="relative w-full overflow-hidden bg-[#FF6600] py-[1vh]">
            
            <Header />


            <div className="relative z-10 mx-auto w-full max-w-[90vw] px-[4vw]">
                <div className="flex flex-col items-center gap-8 lg:flex-row lg:items-end lg:justify-between">
                    {/* Left Side - Text Content */}
                    <div className="flex-1 space-y-6">
                        <h1 className="text-4xl font-bold leading-tight text-[#FFE1BE] font-hero sm:text-5xl md:text-6xl lg:text-7xl">
                            RETALHOS QUE
                            <br />
                            COSTURAM ARTE E
                            <br />
                            AFETO
                        </h1>
                        <p className="max-w-2xl text-base leading-relaxed text-[#FFE1BE] sm:text-lg">
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. Sed do eiusmod tempor incididunt ut labore et
                            dolore magna aliqua. Ut enim ad minim veniam, quis
                            nostrud exercitation.
                        </p>
                        <Link
                            href="/planos"
                            className="inline-flex items-center gap-2 rounded-full border-2 border-[#FF6600] bg-[#FFE1BE] px-6 py-3 text-base font-medium text-[#FF6600] transition-all duration-300 hover:bg-[#FFF4E6] hover:scale-105"
                        >
                            <ArrowRight className="h-5 w-5" />
                            <span>Ver nossos planos</span>
                        </Link>
                    </div>

                    {/* Right Side - Hero Boxes */}
                    <div className="flex-1">
                        <div className="relative sm:    top-40">
                            <Image
                                src="/assets/heroboxes.png"
                                alt="Fuxico Hero Boxes"
                                width={1920}
                                height={1080}
                                className="h-auto w-full"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Navigation Dots */}
                <div className="mt-12 flex justify-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-white"></div>
                    <div className="h-2 w-2 rounded-full border border-white"></div>
                    <div className="h-2 w-2 rounded-full border border-white"></div>
                </div>
            </div>
        </section>
    );
}
