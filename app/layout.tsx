
import type { Metadata } from 'next'
import { Outfit, Fira_Sans } from 'next/font/google'
import './globals.scss'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ViewTransitions } from 'next-view-transitions'
import { ThemeProvider } from 'next-themes'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--ff-heading',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
})

const firaSans = Fira_Sans({
  subsets: ['latin'],
  variable: '--ff-body',
  weight: ['400', '700'],
})

export const metadata: Metadata = {
  title: 'FungiFinders',
  description: 'Discover the World of Mushroom Foraging',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (

      <ViewTransitions>
        <html
          lang="en"
          className={`${outfit.variable} ${firaSans.variable}`}
          suppressHydrationWarning
        >
          <body>
            <ThemeProvider attribute="data-theme" defaultTheme="light">
              <Header />
              {children}
              <Footer />
            </ThemeProvider>
          </body>
        </html>
      </ViewTransitions>
  )
}
