import Header from './Header'
import Footer from './Footer'
import Meta from './Meta'

import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then(res => res.json())
 
export default function Layout({ children }) {
    const { data, error } = useSWR('/api/data', fetcher)
 
    if (error) return <header><h1>Failed to load</h1></header>
    if (!data) return <header><h1>Loading...</h1></header>
  return (
    <>
        <Meta data={data}/>
        <Header data={data}/>
        <main>{children}</main>
        <Footer data={data}/>
    </>
  )
}