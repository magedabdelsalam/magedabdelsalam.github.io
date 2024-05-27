import './globals.css'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { PHProvider, PostHogPageview } from './providers'
import { Suspense } from 'react'
import { Inter, Caveat } from 'next/font/google'
 
// If loading a variable font, you don't need to specify the font weight
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

const caveat = Caveat({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-caveat',
})
 
export const metadata = {
  title: 'Maged Abdelsalam - Product Designer',
  description: 'Product designer with 8+ years of experience working with startups to understand human frustration and imagine better solutions.',
  keywords: 'maged abdelsalam, product designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${caveat.variable}`}>
      <Suspense>
        <PostHogPageview />
      </Suspense>
      <PHProvider>
        <body>
          <Header/>
          {children}
          <Footer/>
        </body>
      </PHProvider>
    </html>
  )
}