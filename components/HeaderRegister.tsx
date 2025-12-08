"use client";

import { useState } from "react";
import { User, ShoppingCart, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

export function HeaderRegister() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="w-full">
            <div className="mx-auto max-w-[90vw] px-4 py-4">
                {/* Cream Container */}
                <div className="rounded-2xl bg-[#FAE7D5] px-4 py-4 sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                        {/* Mobile Menu Button */}
                        <Sheet open={isOpen} onOpenChange={setIsOpen}>
                            <SheetTrigger asChild className="lg:hidden">
                                <button className="flex h-10 w-10 items-center justify-center rounded-lg text-[#732C03] hover:bg-[#FFE1BE] transition-colors">
                                    <Menu className="h-6 w-6" />
                                    <span className="sr-only">Abrir menu</span>
                                </button>
                            </SheetTrigger>
                            <SheetContent
                                side="left"
                                className="w-[300px] bg-[#FAE7D5] rounded-r-2xl border-r-0 p-0"
                            >
                                <SheetHeader className="px-6 pt-6 pb-4">
                                    <SheetTitle className="text-left">
                                        <Link
                                            href="/"
                                            onClick={() => setIsOpen(false)}
                                            className="inline-block"
                                        >
                                            <Image
                                                src="/assets/logos/registerheaderlogo.svg"
                                                alt="Fuxico"
                                                width={150}
                                                height={50}
                                                className="h-10 w-auto"
                                            />
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="px-6 pb-6 space-y-6">
                                    {/* Mobile User Actions */}
                                    <div className="space-y-3">
                                        <Link
                                            href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 py-2 text-base font-medium text-[#732C03] hover:text-[#FF355A] hover:font-bold transition-colors"
                                        >
                                            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#732C03]">
                                                <User className="h-5 w-5 text-[#732C03]" />
                                            </div>
                                            <span>Entrar/Cadastrar</span>
                                        </Link>
                                        <Link
                                            href="/cart"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 py-2 text-base font-medium text-[#732C03] hover:text-[#FF355A] hover:font-bold transition-colors"
                                        >
                                            <ShoppingCart className="h-5 w-5 text-[#732C03]" />
                                            <span>Carrinho</span>
                                            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFE1BE] text-xs font-medium text-[#732C03]">
                                                0
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </SheetContent>
                        </Sheet>

                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <Image
                                src="/assets/logos/registerheaderlogo.svg"
                                alt="Fuxico"
                                width={150}
                                height={50}
                                className="h-8 w-auto sm:h-10"
                                priority
                            />
                        </Link>

                        {/* Right Actions - Desktop Only */}
                        <div className="hidden lg:flex items-center gap-6">
                            {/* Login/Register */}
                            <Link
                                href="/login"
                                className="flex items-center gap-2 text-sm font-medium text-[#732C03] hover:text-[#FF355A] hover:font-bold transition-colors"
                            >
                                <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#732C03]">
                                    <User className="h-5 w-5 text-[#732C03]" />
                                </div>
                                <span>Entrar/Cadastrar</span>
                            </Link>

                            {/* Shopping Cart */}
                            <Link
                                href="/cart"
                                className="flex items-center gap-2 text-sm font-medium text-[#732C03] hover:text-[#FF355A] hover:font-bold transition-colors"
                            >
                                <ShoppingCart className="h-5 w-5 text-[#732C03]" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#FFE1BE] text-xs font-medium text-[#732C03]">
                                    0
                                </span>
                            </Link>
                        </div>

                        {/* Right Actions - Mobile Only (Icons) */}
                        <div className="flex lg:hidden items-center gap-3">
                            <Link
                                href="/cart"
                                className="flex items-center text-[#732C03] hover:text-[#FF355A] hover:font-bold transition-colors relative"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-[#FFE1BE] text-xs font-medium text-[#732C03]">
                                    0
                                </span>
                                <span className="sr-only">Carrinho</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
