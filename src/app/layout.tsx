import type { Metadata } from 'next'
import { Josefin_Sans, Neuton, Nunito, Playfair_Display } from 'next/font/google'
import './globals.css'
import Menu from '@/components/Menu'

const josefinSans = Josefin_Sans({
  subsets: ['latin'],
  variable: '--font-josefin',
  display: 'swap',
})

const neuton = Neuton({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-neuton',
  display: 'swap',
})

const nunito = Nunito({
  subsets: ['latin'],
  variable: '--font-nunito',
  display: 'swap',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Cabaña Cantares del Río - Alojamiento frente al río',
  description: 'Cabaña Cantares del Río ofrece un refugio tranquilo frente al río con todas las comodidades modernas. Disfruta de la naturaleza y relájate en nuestro acogedor espacio.',
  keywords: ['cabaña', 'alojamiento', 'río', 'naturaleza', 'descanso', 'turismo', 'argentina'],
  authors: [{ name: 'Cabaña Cantares del Río' }],
  openGraph: {
    title: 'Cabaña Cantares del Río - Alojamiento frente al río',
    description: 'Cabaña Cantares del Río ofrece un refugio tranquilo frente al río con todas las comodidades modernas.',
    type: 'website',
    locale: 'es_AR',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#e5dccd',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es">
      <body className={`${josefinSans.variable} ${neuton.variable} ${nunito.variable} ${playfair.variable}`}>
        <Menu />
        {children}
      </body>
    </html>
  )
}