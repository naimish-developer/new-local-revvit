import './globals.css'
import { Inter } from 'next/font/google'

import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'Revvit App',
    description: 'Revvit App',
}

export default function RootLayout({ children }) {
    return (
        <html lang='en'>
            <link
                rel='icon'
                href='/assets/logo/revvit-logo-2.png'
                type='image/png'
                sizes='32x32'
            />
            <body className={inter.className}>
                <Header />
                {children}
                <Footer />
            </body>
        </html>
    )
}
