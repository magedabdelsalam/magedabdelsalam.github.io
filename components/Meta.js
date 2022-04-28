import Head from 'next/head'

const Meta = ({title, keywords, description}) => {
    return(
        <Head>
            <meta name='viewport' content='width=device-width,initial-scale=1'/>
            <meta name='description' content={description}/>
            <meta name='keywords' content={keywords}/>
            <meta charSet='utf-8'/>
            <link rel='icon' href='/photo_1.png'/>
            <title>{title}</title>
        </Head>
    )
}

Meta.defaultProps = {
    title: 'Maged Abdelsalam',
    description: 'Product Designer',
    keywords: 'product design, ux design, product designer, ux designer, seattle, cairo',
}

export default Meta