"use client";

import { Search, User, ShoppingCart, ChevronDown } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function Header() {
    return (
        <header className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
                {/* White Container */}
                <div className="rounded-2xl bg-white">
                    {/* Top Section */}
                    <div className="flex items-center justify-between gap-4 px-6 py-4">
                        {/* Logo */}
                        <Link href="/" className="shrink-0">
                            <h1 className="text-4xl font-bold text-black font-title">
                                Fuxico
                            </h1>
                        </Link>

                        {/* Search Bar */}
                        <div className="relative flex-1 max-w-2xl">
                            <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Buscar por hobbie..."
                                className="w-full rounded-full bg-gray-100 py-3 pl-12 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                            />
                        </div>

                        {/* Right Actions */}
                        <div className="flex items-center gap-6">
                            {/* Login/Register */}
                            <Link
                                href="/login"
                                className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600"
                            >
                                <User className="h-5 w-5" />
                                <span>Entrar/Cadastrar</span>
                            </Link>

                            {/* Shopping Cart */}
                            <Link
                                href="/cart"
                                className="flex items-center gap-2 text-sm font-medium text-black hover:text-gray-600"
                            >
                                <ShoppingCart className="h-5 w-5" />
                                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-gray-200 text-xs font-medium">
                                    0
                                </span>
                            </Link>
                        </div>
                    </div>

                    {/* Divider */}
                    <div className="px-16">
                        <Separator className="bg-black" />
                    </div>

                    {/* Navigation Menu */}
                    <nav className="flex items-center gap-8 px-6 py-4">
                        <Link
                            href="/catalogo"
                            className="flex items-center gap-1 text-sm font-body font-medium text-black hover:text-gray-600"
                        >
                            Catálogo
                            <ChevronDown className="h-4 w-4" />
                        </Link>
                        <Link
                            href="/promocoes"
                            className="text-sm font-body font-medium text-black hover:text-gray-600"
                        >
                            Promoções
                        </Link>
                        <Link
                            href="/sobre-nos"
                            className="text-sm font-body font-medium text-black hover:text-gray-600"
                        >
                            Sobre nós
                        </Link>
                        <Link
                            href="/clube"
                            className="text-sm font-body font-medium text-black hover:text-gray-600"
                        >
                            Clube
                        </Link>
                        <Link
                            href="/parceiros"
                            className="text-sm font-body font-medium text-black hover:text-gray-600"
                        >
                            Parceiros
                        </Link>
                        <Link
                            href="/contato"
                            className="text-sm font-body font-medium text-black hover:text-gray-600"
                        >
                            Contato
                        </Link>
                    </nav>
                </div>
            </div>
        </header>
    );
}
