"use client";

import { Mail, ArrowRight, X, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import { Separator } from "./ui/separator";

export function Footer() {

    const year = new Date().getFullYear();

    return (
        <footer className="bg-black rounded-t-4xl">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw] sm:px-[6vw] lg:px-[8vw] pt-[4vh]">
                {/* Newsletter Subscription Section */}
                <div className="rounded-2xl bg-gray-100 px-[2vw] py-8 shadow-lg">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        {/* Left: Text Content */}
                        <div className="flex-1">
                            <h2 className="mb-2 text-lg font-bold uppercase text-black">
                                ACOMPANHE NOSSA NEWSLETTER
                            </h2>
                            <p className="text-sm text-black">
                                Receba todas as novidades e ofertas!
                            </p>
                        </div>

                        {/* Right: Input and Button */}
                        <div className="flex w-full flex-1 items-center gap-3 md:w-auto">
                            <div className="relative flex-1">
                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-400" />
                                <input
                                    type="email"
                                    placeholder="Coloque seu e-mail favorito"
                                    className="w-full rounded-full bg-white py-3 pl-12 pr-4 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                            </div>
                            <button className="flex items-center gap-2 rounded-full bg-black px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-gray-800">
                                <span>Inscreva-se</span>
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                    </div>
                </div>

                {/* Main Footer Content */}
                <div className="pb-[4vh] pt-[6vh]">
                    <div className="mx-auto w-full">
                        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                            {/* Left Column: Brand Information */}
                            <div className="lg:col-span-2">
                                <Link href="/" className="mb-4 inline-block">
                                    <h2 className="text-3xl font-bold text-white font-hero">
                                        fuxico
                                    </h2>
                                </Link>
                                <p className="mb-6 text-sm leading-relaxed text-white">
                                    Nascemos do desejo de aproximar pessoas da
                                    arte de maneira viva e significativa.
                                </p>
                                {/* Social Media Icons */}
                                <div className="flex items-center gap-4">
                                    <Link
                                        href="https://twitter.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-black"
                                    >
                                        <TwitterIcon className="h-5 w-5" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-white hover:text-black"
                                    >
                                        <InstagramIcon className="h-5 w-5" />
                                    </Link>
                                </div>
                            </div>

                            {/* Middle Columns: Navigation Links */}
                            {/* INSTITUCIONAL */}
                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase text-white">
                                    INSTITUCIONAL
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/sobre-nos"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Sobre nós
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/parceiros"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Parceiros
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/contato"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Contato
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* AJUDA */}
                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase text-white">
                                    AJUDA
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/customer-support"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Customer Support
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/detalhes-entrega"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Detalhes de Entrega
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/termos-condicoes"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Termos & Condições
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/politica-privacidade"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Política de Privacidade
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* FAQ */}
                            <div>
                                <h3 className="mb-4 text-sm font-bold uppercase text-white">
                                    FAQ
                                </h3>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/faq/account"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Account
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/faq/manage-deliveries"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Manage Deliveries
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/faq/orders"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Orders
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/faq/payments"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Payments
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <div className="my-8">
                            <Separator className="bg-gray-600" />
                        </div>

                        {/* Copyright Information */}
                        <div className="text-left">
                            <p className="text-sm text-white">
                                Fuxico © {year}, Todos os direitos reservados.
                            </p> 
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
