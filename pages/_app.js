// Components
import Meta from '../components/Meta'
import Header from '../components/Header'
import Footer from '../components/Footer'
// Styles
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return <div>
      <Header />
      <Meta />
        <Component {...pageProps} />
      <Footer />
    </div>
  }

export default MyApp
