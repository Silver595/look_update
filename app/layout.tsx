import Header from "@/components/header";
import "./globals.css";
import { Inter } from "next/font/google";
import ActiveSectionContextProvider from "@/context/active-section-context";
import Footer from "@/components/footer";
import ThemeSwitch from "@/components/theme-switch";
import ThemeContextProvider from "@/context/theme-context";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "The Silver Touch",
    description: "I'm just a learner trying to learn new things",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="!scroll-smooth">
        <body className="relative bg-gray-50 dark:bg-gray-900 text-gray-950 dark:text-gray-50 min-h-screen overflow-x-hidden">

        <div
            className="absolute inset-0 -z-10 bg-gradient-to-r from-rose-100 via-teal-100 to-rose-100 animate-gradient-x dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 transition-all duration-700 ease-in-out"
        ></div>

        <div className="absolute inset-0 -z-10 pointer-events-none">
            <div
                className="absolute top-[-20%] left-[10%] h-[40rem] w-[40rem] rounded-full blur-[8rem] bg-rose-100 opacity-50 animate-pulse dark:bg-gray-700 dark:opacity-70 transition-opacity duration-700 ease-in-out"
            ></div>
        </div>

        <div className="relative flex flex-col min-h-screen overflow-x-hidden">
            <ThemeContextProvider>
                <ActiveSectionContextProvider>
                    <Header />

                    <main className="flex-grow pt-36 px-4 sm:px-6 lg:px-8 max-w-full">
                        {children}
                    </main>
                    <Footer />
                    <Toaster position="top-right" />
                    <ThemeSwitch />
                </ActiveSectionContextProvider>
            </ThemeContextProvider>
        </div>
        </body>
        </html>
    );
}
