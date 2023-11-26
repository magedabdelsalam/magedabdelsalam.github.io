import './globals.css'
import Header from 'components/Header/Header'
import Footer from 'components/Footer/Footer'
import { PHProvider, PostHogPageview } from './providers'
import { Suspense } from 'react'
 
export const metadata = {
  title: 'Maged Abdelsalam -- Product Designer',
  description: 'Product designer with 8+ years of experience working with startups to understand human frustration (research) and imagine better solutions (prototypes).',
  keywords: 'maged abdelsalam, product designer',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
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