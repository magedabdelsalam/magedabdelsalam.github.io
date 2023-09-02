import Head from 'next/head'

export default function Meta({data}){
    return(
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1'/>
            <meta name='keywords' content={data.keywords}/>
            <meta name='description' content={data.description}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href='/photo_1.jpg'/>
            <title>{data.title}</title>
        </Head>
    )
}