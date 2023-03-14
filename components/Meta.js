import Head from 'next/head'

export default function Meta({title, keywords, description}){
    return(
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1'/>
            <meta name='keywords' content={keywords}/>
            <meta name='description' content={description}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href='/photo_1.jpg'/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Maged Abdelsalam',
    keywords: 'product designer, ux designer, seattle, cairo',
    description: 'Product Designer based in Seattle, WA'
}