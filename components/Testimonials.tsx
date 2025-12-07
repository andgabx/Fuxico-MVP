"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { Star, Check, ArrowLeft, ArrowRight } from "lucide-react";

interface Testimonial {
    id: number;
    name: string;
    text: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: "Sarah M.",
        text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
        rating: 5,
    },
    {
        id: 2,
        name: "Alex K.",
        text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
        rating: 5,
    },
    {
        id: 3,
        name: "James L.",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
    },
    {
        id: 4,
        name: "Moo",
        text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.",
        rating: 5,
    },
    {
        id: 5,
        name: "Maria S.",
        text: "The quality and attention to detail in every piece is outstanding. I've received so many compliments on my purchases from Shop.co!",
        rating: 5,
    },
];

export function Testimonials() {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextTestimonial = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevTestimonial = () => {
        setCurrentIndex(
            (prev) => (prev - 1 + testimonials.length) % testimonials.length
        );
    };

    // Mostrar 3 cards por vez
    const visibleTestimonials = [];
    for (let i = 0; i < 3; i++) {
        const index = (currentIndex + i) % testimonials.length;
        visibleTestimonials.push(testimonials[index]);
    }

    return (
        <section className="w-full  py-[8vh]">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw]">
                {/* Header with Title and Navigation */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-[#8B4513] font-hero md:text-5xl lg:text-6xl">
                        O QUE NOSSOS CLIENTES DIZEM?
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevTestimonial}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6600] transition-all duration-300 hover:scale-110 hover:opacity-90"
                            aria-label="Depoimento anterior"
                        >
                            <ArrowLeft className="h-5 w-5 text-[#FFE1BE]" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF6600] transition-all duration-300 hover:scale-110 hover:opacity-90"
                            aria-label="Próximo depoimento"
                        >
                            <ArrowRight className="h-5 w-5 text-[#FFE1BE]" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Cards */}
                <div className="relative flex gap-6 overflow-hidden rounded-2xl">
                    {visibleTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={`${testimonial.id}-${currentIndex}`}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                duration: 0.6,
                                ease: "easeOut",
                                delay: index * 0.1,
                            }}
                            className="min-w-[300px] flex-1 rounded-2xl overflow-hidden bg-white p-6 shadow-lg"
                        >
                            {/* Stars */}
                            <motion.div
                                className="mb-4 flex gap-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.2, duration: 0.3 }}
                            >
                                {Array.from({ length: testimonial.rating }).map(
                                    (_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{ opacity: 0, scale: 0 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{
                                                delay: 0.3 + i * 0.1,
                                                duration: 0.2,
                                            }}
                                        >
                                            <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        </motion.div>
                                    )
                                )}
                            </motion.div>

                            {/* Name with Checkmark */}
                            <motion.div
                                className="mb-4 flex items-center gap-2"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.4, duration: 0.3 }}
                            >
                                <span className="text-lg font-semibold text-black">
                                    {testimonial.name}
                                </span>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.5, duration: 0.2 }}
                                >
                                    <Check className="h-5 w-5 text-green-500" />
                                </motion.div>
                            </motion.div>

                            {/* Testimonial Text */}
                            <motion.p
                                className="text-sm leading-relaxed text-gray-700"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6, duration: 0.3 }}
                            >
                                {testimonial.text}
                            </motion.p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
