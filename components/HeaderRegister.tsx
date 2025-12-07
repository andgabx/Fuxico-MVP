"use client";

import { User, ShoppingCart } from "lucide-react";
import Link from "next/link";

export function HeaderRegister() {
    return (
        <header className="w-full">
            <div className="mx-auto max-w-[90vw] px-4 py-4">
                {/* Cream Container */}
                <div className="rounded-2xl bg-[#FAE7D5] px-6 py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo FUXICO Colorido */}
                        <Link href="/" className="shrink-0">
                            <div className="flex items-center gap-1 text-3xl font-bold font-hero">
                                <span className="text-[#FF6600]">Fu</span>
                                <span className="text-[#00C4D8]">x</span>
                                <span className="text-[#FF355A]">i</span>
                                <span className="text-[#FF6600]">c</span>
                                <span className="text-[#FF6600]">o</span>
                            </div>
                        </Link>

                        {/* Right Actions */}
                        <div className="flex items-center gap-6">
                            {/* Login/Register */}
                            <Link
                                href="/login"
                                className="flex items-center gap-2 text-sm font-medium text-[#732C03] hover:text-[#FF355A] transition-colors"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#732C03]">
                                    <User className="h-5 w-5 text-[#732C03]" />
                                </div>
                                <span>Entrar/Cadastrar</span>
                            </Link>

                            {/* Shopping Cart */}
                            <Link
                                href="/cart"
                                className="flex items-center gap-2 text-sm font-medium text-[#732C03] hover:text-[#FF355A] transition-colors"
                            >
                                <ShoppingCart className="h-5 w-5 text-[#732C03]" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFE1BE] text-xs font-medium text-[#732C03]">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

