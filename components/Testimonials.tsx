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
        name: "Acácio Espíndola",
        text: "Fiquei impressionada com a qualidade e o estilo dos produtos que recebi da Fuxico. Desde peças casuais até itens mais elaborados, cada compra superou minhas expectativas. Recomendo de olhos fechados!",
        rating: 5,
    },
    {
        id: 2,
        name: "Hélio Cipriano",
        text: "Loja incrível, nunca para de surpreender. Os produtos são únicos e têm uma qualidade excepcional. Já comprei várias vezes e sempre fico satisfeito. O atendimento também é nota 10!",
        rating: 5,
    },
    {
        id: 3,
        name: "Sérgio Frederico",
        text: "Como alguém que sempre procura peças únicas e diferentes, fiquei encantado ao descobrir a Fuxico. A seleção de produtos é diversa e está sempre alinhada com as últimas tendências. Adorei!",
        rating: 5,
    },
    {
        id: 4,
        name: "Cecília Santos",
        text: "A qualidade e atenção aos detalhes em cada peça é impressionante. Já recebi vários elogios sobre minhas compras da Fuxico! Os produtos são realmente especiais e únicos.",
        rating: 5,
    },
    {
        id: 5,
        name: "Rafaela Oliveira",
        text: "Encontrar produtos que combinam com meu estilo pessoal sempre foi um desafio, até descobrir a Fuxico. A variedade de opções é incrível e atende diferentes gostos e ocasiões. Super recomendo!",
        rating: 5,
    },
    {
        id: 6,
        name: "Marcos Antônio",
        text: "Comprei um presente para minha esposa e ela amou! A qualidade dos materiais e o acabamento são impecáveis. Definitivamente voltarei a comprar aqui.",
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
        <section className="w-full bg-cream-1 py-[8vh]">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw]">
                {/* Header with Title and Navigation */}
                <div className="mb-8 flex items-center justify-between">
                    <h2 className="text-4xl font-bold text-brown-1 font-hero md:text-5xl lg:text-6xl">
                        O QUE NOSSOS CLIENTES DIZEM?
                    </h2>

                    {/* Navigation Arrows */}
                    <div className="flex items-center gap-3">
                        <button
                            onClick={prevTestimonial}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-1 transition-all duration-300 hover:scale-110 hover:opacity-90"
                            aria-label="Depoimento anterior"
                        >
                            <ArrowLeft className="h-5 w-5 text-cream-2" />
                        </button>
                        <button
                            onClick={nextTestimonial}
                            className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-1 transition-all duration-300 hover:scale-110 hover:opacity-90"
                            aria-label="Próximo depoimento"
                        >
                            <ArrowRight className="h-5 w-5 text-cream-2" />
                        </button>
                    </div>
                </div>

                {/* Testimonials Cards */}
                <div className="relative flex gap-6">
                    {visibleTestimonials.map((testimonial, index) => (
                        <motion.div
                            key={`${testimonial.id}-${currentIndex}`}
                            initial={{
                                opacity: 0,
                                x: index === 0 ? -100 : index === 1 ? 0 : 100,
                                y: 50,
                                rotate: index === 0 ? -5 : index === 1 ? 0 : 5,
                                scale: 0.8,
                            }}
                            animate={{
                                opacity: 1,
                                x: 0,
                                y: 0,
                                rotate: 0,
                                scale: 1,
                            }}
                            transition={{
                                type: "spring",
                                stiffness: 100,
                                damping: 15,
                                delay: index * 0.15,
                            }}
                            className="min-w-[300px] flex-1 rounded-2xl overflow-hidden bg-cream-2 p-6 shadow-lg"
                        >
                            {/* Stars */}
                            <motion.div
                                className="mb-4 flex gap-1"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.3,
                                    type: "spring",
                                    stiffness: 200,
                                    damping: 10,
                                }}
                            >
                                {Array.from({ length: testimonial.rating }).map(
                                    (_, i) => (
                                        <motion.div
                                            key={i}
                                            initial={{
                                                opacity: 0,
                                                scale: 0,
                                                rotate: -180,
                                            }}
                                            animate={{
                                                opacity: 1,
                                                scale: 1,
                                                rotate: 0,
                                            }}
                                            transition={{
                                                delay: 0.4 + i * 0.1,
                                                type: "spring",
                                                stiffness: 200,
                                                damping: 10,
                                            }}
                                            whileHover={{
                                                scale: 1.3,
                                                rotate: 360,
                                                transition: { duration: 0.3 },
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
                                transition={{
                                    delay: 0.6,
                                    type: "spring",
                                    stiffness: 150,
                                    damping: 12,
                                }}
                            >
                                <motion.span
                                    className="text-lg font-semibold text-brown-1"
                                    whileHover={{ scale: 1.1 }}
                                >
                                    {testimonial.name}
                                </motion.span>
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0,
                                        rotate: -180,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 0,
                                    }}
                                    transition={{
                                        delay: 0.7,
                                        type: "spring",
                                        stiffness: 200,
                                        damping: 10,
                                    }}
                                    whileHover={{
                                        scale: 1.3,
                                        rotate: 360,
                                        transition: { duration: 0.3 },
                                    }}
                                    className="flex h-5 w-5 items-center justify-center rounded-full bg-blue-1"
                                >
                                    <Check className="h-3 w-3 text-white" />
                                </motion.div>
                            </motion.div>

                            {/* Testimonial Text */}
                            <motion.p
                                className="text-sm leading-relaxed text-brown-1"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    delay: 0.8,
                                    type: "spring",
                                    stiffness: 100,
                                    damping: 15,
                                }}
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
