import type { Metadata } from "next";
import { Bagel_Fat_One, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

const bagelFatOne = Bagel_Fat_One({
    variable: "--font-bagel",
    weight: "400",
    subsets: ["latin"],
});

const poppins = Poppins({
    variable: "--font-poppins",
    weight: ["300", "400", "500", "600", "700"],
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
                className={`${bagelFatOne.variable} ${poppins.variable} antialiased`}
            >
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    );
}
