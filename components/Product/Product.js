import Link from 'next/link'
import Card from 'components/Card/Card'

export default function Product({project}){
    return (
        <Link href={project.url}>
            <Card 
            subtitle={project.title} 
            description={project.description}
            img={project.thumbnail}
            />
        </Link>
    )
}