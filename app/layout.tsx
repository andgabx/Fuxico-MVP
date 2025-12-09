import type { Metadata } from "next";
import { Poppins, Londrina_Solid } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
    subsets: ["latin"],
});

const londrinaSolid = Londrina_Solid({
    variable: "--font-hero",
    weight: "400",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "Fuxico",
    description: "Retalhos que costuram arte e afeto",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${poppins.variable} ${londrinaSolid.variable} antialiased relative`}
            >
                <div className="relative z-10">{children}</div>
            </body>
        </html>
    );
}
