"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Link from "next/link";

export function PromoBanner() {
    const [isOpen, setIsOpen] = useState(true);

    if (!isOpen) return null;

    return (
        <div className="relative w-full">
            {/* Main Banner Section */}
            <div className="relative bg-[#FFE1BE] px-4 py-2">
                <div className="mx-auto flex max-w-[90vw] items-center justify-between">
                    {/* Promo Text */}
                    <p className="flex-1 text-center text-sm font-medium text-[#732C03] sm:text-base">
                        Cadastre-se e receba um desconto de 20% no seu primeiro
                        pedido.
                    </p>

                    {/* Close Button */}
                    <button
                        onClick={() => setIsOpen(false)}
                        className="ml-4 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[#732C03] transition-colors hover:bg-[#FFE1BE]/80"
                        aria-label="Fechar banner"
                    >
                        <X className="h-5 w-5" />
                    </button>
                </div>
            </div>

            <div className="h-1 w-full bg-[#FF6600]"></div>
        </div>
    );
}
