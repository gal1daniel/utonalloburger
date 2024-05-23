import Navbar from '@/components/Navbar';
import { Analytics } from "@vercel/analytics/react"
import type { Metadata } from 'next';
import { Kumbh_Sans } from 'next/font/google'
import './globals.css';
import Footer from '@/components/Footer';
import { usePathname } from 'next/navigation'; 

const kumbh = Kumbh_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Útonálló Burger',
    description: 'Kiváló minőségű, egyedi ízvilágú hamburgerek friss alapanyagokból. Kóstold meg az ország legfinomabb burgereit!',
    metadataBase: new URL("https://https://utonalloburger.hu"),
    openGraph: {
        title: "Útonálló Burger",
        description: 'Kiváló minőségű, egyedi ízvilágú hamburgerek friss alapanyagokból. Kóstold meg az ország legfinomabb burgereit!',
        url: "https://https://utonalloburger.hu",
        siteName: "Útonálló",
        images: [
            {
                url: 'https://utonalloburger.hu/og.png',
                width: 1260,
                height: 800,
            }
        ],
        locale: "hu-HU"
    }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    
    return (
        <html lang="en">
            <body className={kumbh.className}>
                {/* Add Navbar at the top */}
                <Navbar />
                {/* Render the children content */}
                <main>{children}</main>
                <Footer />
                <Analytics />
            </body>
        </html>
    );
}
