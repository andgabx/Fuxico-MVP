"use client";

import { Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface Product {
    id: number;
    name: string;
    image: string;
    rating: number;
    price: number;
    originalPrice?: number;
    discount?: number;
}

const products: Product[] = [
    {
        id: 1,
        name: "Produto 1",
        image: "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=400&h=400&fit=crop",
        rating: 4.5,
        price: 120,
    },
    {
        id: 2,
        name: "Produto 2",
        image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&h=400&fit=crop",
        rating: 3.5,
        price: 240,
        originalPrice: 260,
        discount: 20,
    },
    {
        id: 3,
        name: "Produto 3",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=400&h=400&fit=crop",
        rating: 4.5,
        price: 180,
    },
    {
        id: 4,
        name: "Produto 4",
        image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?w=400&h=400&fit=crop",
        rating: 4.5,
        price: 130,
        originalPrice: 160,
        discount: 30,
    },
];

export function Releases() {
    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;
        const stars = [];

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star
                    key={i}
                    className="h-4 w-4 fill-yellow-400 text-yellow-400"
                />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative h-4 w-4">
                    <Star className="absolute h-4 w-4 fill-gray-300 text-gray-300" />
                    <div className="absolute left-0 top-0 h-4 w-2 overflow-hidden">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
            );
        }

        const emptyStars = 5 - Math.ceil(rating);
        for (let i = 0; i < emptyStars; i++) {
            stars.push(
                <Star
                    key={`empty-${i}`}
                    className="h-4 w-4 fill-gray-300 text-gray-300"
                />
            );
        }

        return stars;
    };

    return (
        <section className="w-full py-[8vh]">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw]">
                {/* Title */}
                <h2 className="mb-8 text-4xl font-bold text-[#732C03] font-hero md:text-5xl lg:text-6xl">
                    LANÇAMENTOS
                </h2>

                {/* Products Grid */}
                <div className="mb-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                    {products.map((product) => (
                        <div
                            key={product.id}
                            className="group rounded-2xl p-4"
                        >
                            {/* Product Image */}
                            <div className="relative mb-4 aspect-square w-full overflow-hidden rounded-xl">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    fill
                                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                                />

                            </div>

                            {/* Product Name */}
                            <h3 className="mb-2 text-lg font-semibold text-gray-800">
                                {product.name}
                            </h3>

                            {/* Rating */}
                            <div className="mb-3 flex items-center gap-1">
                                {renderStars(product.rating)}
                            </div>

                            {/* Price */}
                            <div className="flex items-center gap-2">
                                <span className="text-xl font-bold text-gray-900">
                                    ${product.price}
                                </span>
                                {product.originalPrice && (
                                    <>
                                        <span className="text-sm text-gray-500 line-through">
                                            ${product.originalPrice}
                                        </span>
                                    </>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* See All Button */}
                <div className="flex justify-center">
                    <Link
                        href="/"
                        className="rounded-full bg-[#FF6600] px-8 py-3 text-base font-medium text-white transition-all duration-300 hover:bg-[#FF8533] hover:scale-105"
                    >
                        Ver todos
                    </Link>
                </div>
            </div>
        </section>
    );
}

