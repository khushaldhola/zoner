import { ClerkProvider } from '@clerk/nextjs'
import "../globals.css";
import { Inter } from "next/font/google";

export const metadata = {
    title: 'Auth',
    description: 'wanna be social media app',
}

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
    return (
        <ClerkProvider>
            <html lang="en">
                <body className={`${inter.className} bg-purple-2 text-light-1`}>{children}</body>
            </html>
        </ClerkProvider>
    )
}
