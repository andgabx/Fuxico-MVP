"use client";

import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function Step5Success() {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-1 flex-col justify-center rounded-2xl bg-[#FFF4E6] p-8 shadow-lg text-center w-full"
        >
            {/* Success Icon */}
            <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#FF355A]"
            >
                <CheckCircle2 className="h-12 w-12 text-white" />
            </motion.div>

            {/* Success Message */}
            <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mb-4 text-2xl font-bold text-[#732C03]"
            >
                Oba! Compra finalizada com sucesso :D
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mb-8 text-sm leading-relaxed text-[#732C03]"
            >
                Perfeito! Agora é só acompanhar os próximos passos. Você
                receberá todos os detalhes da sua compra por e-mail e pode
                conferir o andamento do pedido a qualquer momento acessando a
                área "Meus pedidos" aqui no site.
            </motion.p>

            {/* Back to Home Button */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
            >
                <Link
                    href="/"
                    className="inline-block w-full rounded-lg bg-[#FF355A] px-6 py-4 text-lg font-semibold text-white transition-all hover:bg-[#E62E4F] hover:shadow-lg"
                >
                    Voltar ao início
                </Link>
            </motion.div>
        </motion.div>
    );
}

