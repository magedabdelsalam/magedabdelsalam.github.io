// Components
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
// Styles
import '../styles/globals.css'

export default function App({ Component, pageProps }) {
  return <div>
      <Meta />
      <Header />
        <Component {...pageProps} />
      <Footer />
    </div>
  }
