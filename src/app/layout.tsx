import type { Metadata } from 'next'
import { Outfit, Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'

const outfit = Outfit({ subsets: ['latin'], variable: '--font-outfit' })
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const cormorant = Cormorant_Garamond({
    subsets: ['latin'],
    variable: '--font-heading',
    weight: ['400', '600', '700']
})

export const metadata: Metadata = {
    title: 'Dongar To Darya | Premium Indian Exports',
    description: 'Seamlessly connecting Indian Farms (Dongar) to Global Markets (Darya). Exporting premium Alphonso Mangoes, Cashews, and Pulp worldwide.',
    keywords: ['Indian Export', 'Alphonso Mango', 'Cashew Export', 'Mango Pulp', 'Ratnagiri', 'Global Logistics', 'Dongar to Darya'],
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://dongartodarya.com',
        title: 'Dongar To Darya | Premium Indian Exports',
        description: 'From Indian Farms to Global Markets. Premium export of Mangoes, Cashews, and Agricultural products.',
        siteName: 'Dongar To Darya',
    },
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
            <body className={`${inter.variable} ${outfit.variable} ${cormorant.variable} font-sans bg-brand-beige text-brand-navy antialiased flex flex-col min-h-screen`}>
                <Navbar />
                <main className="flex-grow pt-20">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
