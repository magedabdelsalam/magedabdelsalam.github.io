import Product from 'components/Product/Product'
import styles from 'app/(home)/Page.module.css'

async function getProjects(){
    const res = await fetch(`http://localhost:3000/api/projects`)  
    const projects = await res.json()
    return projects
}

export default async function Home() {
    const projects = await getProjects()
    return <section>
        <h3>Work</h3>
        <div className={styles.cards}>
                {projects.map((project) => (
                    <Product key={project.id} project={project}/>
                ))}
        </div>
    </section>
}

