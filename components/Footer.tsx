"use client";

import { Mail, ArrowRight, InstagramIcon, TwitterIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { Separator } from "./ui/separator";

export function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer className="bg-[#732C03] rounded-t-4xl">
            <div className="mx-auto w-full max-w-[90vw] px-[4vw] sm:px-[6vw] lg:px-[8vw] pt-[4vh]">
                {/* Newsletter Subscription Section */}
                <div className="rounded-2xl bg-[#9E5B34] px-[2vw] py-8 shadow-lg">
                    <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
                        {/* Left: Text Content */}
                        <div className="flex-1">
                            <h2 className="mb-2 text-lg font-bold uppercase tracking-widest text-[#FFE1BE]">
                                ACOMPANHE NOSSA NEWSLETTER
                            </h2>
                            <p className="text-sm text-[#FFE1BE]">
                                Receba todas as novidades e ofertas!
                            </p>
                        </div>

                        {/* Right: Input and Button */}
                        <div className="flex w-full flex-1 items-center gap-3 md:w-auto">
                            <div className="relative flex-1">
                                <Mail className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-gray-500" />
                                <input
                                    type="email"
                                    placeholder="Coloque seu e-mail favorito"
                                    className="w-full rounded-full bg-[#FFF4E6] py-3 pl-12 pr-4 text-sm placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-300"
                                />
                            </div>
                            <button className="flex items-center gap-2 rounded-full bg-[#FFE1BE] px-6 py-3 text-sm font-medium text-[#732C03] transition-colors hover:opacity-90">
                                <ArrowRight className="h-4 w-4" />
                                <span>Inscreva-se</span>
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
                                    <Image
                                        src="/assets/logos/logofooter.svg"
                                        alt="Fuxico"
                                        width={150}
                                        height={50}
                                        className="h-auto w-auto"
                                        priority
                                    />
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
                                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-[#9E5B34] hover:text-white"
                                    >
                                        <TwitterIcon className="h-5 w-5 group-hover:fill-[#9E5B34]" />
                                        <span className="sr-only">Twitter</span>
                                    </Link>
                                    <Link
                                        href="https://instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-[#9E5B34] hover:text-white"
                                    >
                                        <InstagramIcon className="h-5 w-5 group-hover:fill-[#9E5B34]" />
                                    </Link>
                                    <Link
                                        href="https://tiktok.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="group flex h-10 w-10 items-center justify-center rounded-full border border-white text-white transition-colors hover:bg-[#9E5B34] hover:text-white"
                                    >
                                        <Image
                                            src="/icons/tiktok.svg"
                                            alt="TikTok"
                                            width={20}
                                            height={20}
                                            className="tiktok-icon-white hover:text-[#9E5B34] h-5 w-5 transition-all"
                                        />
                                        <span className="sr-only">TikTok</span>
                                    </Link>
                                </div>
                            </div>

                            {/* Middle Columns: Navigation Links */}
                            {/* INSTITUCIONAL */}
                            <div>
                                <div className="mb-4 font-bold text-sm tracking-widest uppercase text-white">
                                    INSTITUCIONAL
                                </div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Sobre nós
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Parceiros
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Contato
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* AJUDA */}
                            <div>
                                <div className="mb-4 font-bold text-sm tracking-widest uppercase text-white">
                                    AJUDA
                                </div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Suporte
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Detalhes de Entrega
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Termos & Condições
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Política de Privacidade
                                        </Link>
                                    </li>
                                </ul>
                            </div>

                            {/* FAQ */}
                            <div>
                                <div className="mb-4 font-bold text-sm tracking-widest uppercase text-white">
                                    FAQ
                                </div>
                                <ul className="space-y-3">
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Conta
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Gerenciar Entregas
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Pedidos
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            href="/"
                                            className="text-sm text-white transition-colors hover:text-gray-300"
                                        >
                                            Pagamentos
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* Separator Line */}
                        <div className="my-8">
                            <Separator className="bg-white" />
                        </div>

                        {/* Copyright Information */}
                        <div className="text-center">
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
