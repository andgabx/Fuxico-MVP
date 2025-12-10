"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
    ArrowLeft,
    ArrowRight,
    ArrowRight as ArrowRightIcon,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Header } from "./Header";

interface HeroSlide {
    id: number;
    banner: string;
    image: string;
    text?: string;
    imageSize?: {
        mobile?: string;
        tablet?: string;
        desktop?: string;
    };
    translateY?: {
        mobile?: string;
        tablet?: string;
        desktop?: string;
    };
    translateX?: {
        mobile?: string;
        tablet?: string;
        desktop?: string;
    };
}

const heroSlides: HeroSlide[] = [
    {
        id: 1,
        banner: "/assets/hero/banner1.png",
        image: "/assets/hero/image1.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        imageSize: {
            mobile: "h-[130%]",
            tablet: "sm:h-[120vh]",
            desktop: "lg:h-[160vh]",
        },
        translateY: {
            mobile: "translate-y-32",
            tablet: "sm:translate-y-40",
            desktop: "lg:translate-y-105",
        },
        translateX: {
            mobile: "translate-x-8",
            tablet: "sm:translate-x-12",
            desktop: "lg:translate-x-16",
        },
    },
    {
        id: 2,
        banner: "/assets/hero/banner2.png",
        image: "/assets/hero/image2.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        translateY: {
            mobile: "translate-y-20",
            tablet: "sm:translate-y-28",
            desktop: "lg:translate-y-32",
        },
        translateX: {
            mobile: "translate-x-4",
            tablet: "sm:translate-x-6",
            desktop: "lg:translate-x-8",
        },
    },
    {
        id: 3,
        banner: "/assets/hero/banner3.png",
        image: "/assets/hero/image3.png",
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.",
        imageSize: {
            mobile: "h-[100vh]",
            tablet: "sm:h-[120vh]",
            desktop: "lg:h-[180%]",
        },
        translateY: {
            mobile: "translate-y-80",
            tablet: "sm:translate-y-96",
            desktop: "lg:translate-y-[50vh]",
        },
        translateX: {
            mobile: "translate-x-8",
            tablet: "sm:translate-x-12",
            desktop: "lg:translate-x-16",
        },
    },
];

export function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    const nextSlide = () => {
        setDirection(1);
        setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
    };

    const prevSlide = () => {
        setDirection(-1);
        setCurrentIndex(
            (prev) => (prev - 1 + heroSlides.length) % heroSlides.length
        );
    };

    const goToSlide = (index: number) => {
        setDirection(index > currentIndex ? 1 : -1);
        setCurrentIndex(index);
    };

    const currentSlide = heroSlides[currentIndex];
    const canGoPrev = currentIndex > 0;
    const canGoNext = currentIndex < heroSlides.length - 1;

    return (
        <section className="relative w-full overflow-hidden bg-cream-1">
            <div className="relative">
                <Header />

                {/* Carousel Container */}
                <div className="relative h-[70vh] w-full overflow-hidden sm:h-[80vh] lg:h-[90vh]">
                    <AnimatePresence custom={direction} initial={false}>
                        <motion.div
                            key={currentSlide.id}
                            custom={direction}
                            variants={{
                                enter: (dir: number) => ({
                                    x: dir > 0 ? "100%" : "-100%",
                                }),
                                center: { x: 0 },
                                exit: (dir: number) => ({
                                    x: dir > 0 ? "-100%" : "100%",
                                }),
                            }}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                type: "tween",
                                ease: "easeInOut",
                                duration: 0.5,
                            }}
                            className="absolute inset-0 h-full w-full"
                        >
                            {/* Background Banner */}
                            <div className="absolute inset-0">
                                <Image
                                    src={currentSlide.banner}
                                    alt={`Banner ${currentSlide.id}`}
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            {/* Content Container */}
                            <div className="my-2 relative z-10 flex h-full items-center">
                                {/* Left Side - Text Content */}
                                <div className="flex-1 space-y-6 px-8 sm:px-12 lg:px-16 sm:flex-1 lg:flex-1">
                                    <motion.h1
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                        }}
                                        className="text-4xl font-bold leading-tight text-cream-1 font-hero sm:text-5xl md:text-6xl lg:text-7xl"
                                    >
                                        RETALHOS QUE
                                        <br />
                                        COSTURAM ARTE E
                                        <br />
                                        AFETO
                                    </motion.h1>
                                    <motion.p
                                        initial={{ opacity: 0, x: -50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.3,
                                        }}
                                        className="max-w-2xl text-base leading-relaxed text-cream-1 sm:text-lg"
                                    >
                                        {currentSlide.text ||
                                            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis."}
                                    </motion.p>
                                    <motion.div
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.4,
                                        }}
                                    >
                                        <Link
                                            href="/planos"
                                            className="inline-flex items-center gap-2 rounded-full border-2 border-orange-1 bg-cream-1 px-6 py-3 text-base font-medium text-orange-1 transition-all duration-300 hover:bg-cream-2 hover:scale-105"
                                        >
                                            <ArrowRightIcon className="h-5 w-5" />
                                            <span>Ver nossos planos</span>
                                        </Link>
                                    </motion.div>
                                </div>

                                {/* Right Side - Overlay Image - Hidden on Mobile */}
                                <div className="hidden sm:flex flex-1 h-full items-end justify-end pr-0 sm:pr-0 lg:pr-0 pb-0">
                                    <motion.div
                                        initial={{ opacity: 0, x: 50 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{
                                            duration: 0.3,
                                            delay: 0.2,
                                        }}
                                        className={`relative w-auto ${
                                            currentSlide.imageSize?.mobile ||
                                            "h-full"
                                        } ${
                                            currentSlide.imageSize?.tablet ||
                                            "sm:h-[110%]"
                                        } ${
                                            currentSlide.imageSize?.desktop ||
                                            "lg:h-[130%]"
                                        } ${
                                            currentSlide.translateY?.mobile ||
                                            "translate-y-20"
                                        } ${
                                            currentSlide.translateY?.tablet ||
                                            "sm:translate-y-28"
                                        } ${
                                            currentSlide.translateY?.desktop ||
                                            "lg:translate-y-32"
                                        } ${
                                            currentSlide.translateX?.mobile ||
                                            "translate-x-4"
                                        } ${
                                            currentSlide.translateX?.tablet ||
                                            "sm:translate-x-6"
                                        } ${
                                            currentSlide.translateX?.desktop ||
                                            "lg:translate-x-8"
                                        }`}
                                    >
                                        <Image
                                            src={currentSlide.image}
                                            alt={`Image ${currentSlide.id}`}
                                            width={800}
                                            height={800}
                                            className="h-full w-auto object-contain"
                                            priority
                                        />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Arrows */}
                    <button
                        onClick={prevSlide}
                        className="absolute left-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Slide anterior"
                        disabled={!canGoPrev}
                    >
                        <ArrowLeft className="h-6 w-6 text-brown-1" />
                    </button>

                    <button
                        onClick={nextSlide}
                        className="absolute right-4 top-1/2 z-20 flex h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/80 backdrop-blur-sm transition-all duration-300 hover:bg-white hover:scale-110 disabled:opacity-50 disabled:cursor-not-allowed"
                        aria-label="Próximo slide"
                        disabled={!canGoNext}
                    >
                        <ArrowRight className="h-6 w-6 text-brown-1" />
                    </button>
                </div>

                {/* Navigation Dots */}
                <div className="absolute bottom-6 left-1/2 z-20 flex -translate-x-1/2 gap-2">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => goToSlide(index)}
                            className={`h-2 w-2 rounded-full transition-all duration-300 ${
                                index === currentIndex
                                    ? "bg-white w-8"
                                    : "bg-white/50 hover:bg-white/75"
                            }`}
                            aria-label={`Ir para slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}
