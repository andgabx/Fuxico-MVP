"use client";

import { useState } from "react";
import { Search, User, ShoppingCart, ChevronDown, Menu } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "./ui/sheet";

export function Header() {
    const [isOpen, setIsOpen] = useState(false);

    const navItems = [
        { href: "/", label: "Catálogo", hasDropdown: true },
        { href: "/", label: "Promoções" },
        { href: "/", label: "Sobre nós" },
        { href: "/", label: "Clube" },
        { href: "/", label: "Parceiros" },
        { href: "/", label: "Contato" },
    ];

    return (
        <header className="">
            <div className="mx-auto max-w-[90vw] px-4 sm:px-6 lg:px-4 py-4">
                {/* White Container */}
                <div className="rounded-2xl bg-[#FAE7D5]">
                    {/* Top Section */}
                    <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 sm:gap-8 lg:gap-16">
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
                                                src="/assets/logos/logoheader.svg"
                                                alt="Fuxico"
                                                width={150}
                                                height={50}
                                                className="h-10 w-auto"
                                            />
                                        </Link>
                                    </SheetTitle>
                                </SheetHeader>
                                <div className="px-6 pb-6 space-y-6">
                                    {/* Mobile Search */}
                                    <div className="relative">
                                        <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                        <input
                                            type="text"
                                            placeholder="Buscar por hobbie..."
                                            className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#732C03]"
                                        />
                                    </div>

                                    <Separator className="bg-[#732C03]" />

                                    {/* Mobile Navigation */}
                                    <nav className="flex flex-col space-y-3">
                                        {navItems.map((item) => (
                                            <Link
                                                key={item.label}
                                                href={item.href}
                                                onClick={() => setIsOpen(false)}
                                                className="flex items-center justify-between py-2 text-base font-medium text-[#732C03] hover:text-[#FF355A] transition-colors"
                                            >
                                                <span>{item.label}</span>
                                                {item.hasDropdown && (
                                                    <ChevronDown className="h-4 w-4" />
                                                )}
                                            </Link>
                                        ))}
                                    </nav>

                                    <Separator className="bg-[#732C03]" />

                                    {/* Mobile User Actions */}
                                    <div className="space-y-3">
                                        <Link
                                            href="/login"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 py-2 text-base font-medium text-[#732C03] hover:text-[#FF355A] transition-colors"
                                        >
                                            <User className="h-5 w-5" />
                                            <span>Entrar/Cadastrar</span>
                                        </Link>
                                        <Link
                                            href="/cart"
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center gap-3 py-2 text-base font-medium text-[#732C03] hover:text-[#FF355A] transition-colors"
                                        >
                                            <ShoppingCart className="h-5 w-5" />
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
                                src="/assets/logos/logoheader.svg"
                                alt="Fuxico"
                                width={150}
                                height={50}
                                className="h-8 w-auto sm:h-10"
                                priority
                            />
                        </Link>

                        {/* Search Bar - Desktop Only */}
                        <div className="hidden lg:block relative flex-1 max-w-2xl">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por hobbie..."
                                className="w-full rounded-full bg-gray-100 py-3 pl-12 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-3 sm:gap-6">
                            {/* Login/Register - Desktop */}
                            <Link
                                href="/login"
                                className="hidden sm:flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600"
                            >
                                <User className="h-5 w-5" />
                                <span className="hidden md:inline">
                                    Entrar/Cadastrar
                                </span>
                            </Link>

                            {/* Shopping Cart */}
                            <Link
                                href="/cart"
                                className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600 relative"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span className="absolute -top-2 -right-2 flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-medium">
                                    0
                                </span>
                                <span className="sr-only">Carrinho</span>
                            </Link>
                        </div>
                    </div>

                    {/* Divider - Desktop Only */}
                    <div className="hidden lg:block px-6">
                        <Separator className="bg-[#732C03]" />
                    </div>

                    {/* Navigation Menu - Desktop Only */}
                    <nav className="hidden lg:flex items-center justify-center gap-8 px-6 py-4">
                        {navItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className={`flex items-center gap-1 text-sm font-body font-medium text-[#732C03] hover:text-gray-600 ${
                                    item.hasDropdown ? "" : ""
                                }`}
                            >
                                {item.label}
                                {item.hasDropdown && (
                                    <ChevronDown className="h-4 w-4" />
                                )}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
}
