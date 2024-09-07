import styles from 'app/(home)/Page.module.css'
import Card from 'components/Card/Card'
import MiniCard from 'components/MiniCard/MiniCard'

async function getProjects(){
    const res = await fetch(`http://localhost:3000/api/projects/`)  
    return  res.json()
}
async function getExperiences(){
    const res = await fetch(`http://localhost:3000/api/experiences/`)  
    return  res.json()
}
async function getWorkshops(){
    const res = await fetch(`http://localhost:3000/api/workshops/`)  
    return  res.json()
}

export default async function Home() {
    const projectData = await getProjects()
    const experienceData = await getExperiences()
    const workshopData = await getWorkshops()
    const [projects, experiences, workshops] = await Promise.all([projectData, experienceData, workshopData])
    return <article>
        <section>
            <h2>9+ years designing enterprise B2B software.</h2>
            <div className={styles.minicards}>
                {experiences.map((experience, index) => (
                    <MiniCard key={index} img={experience.img} title={experience.title} description={experience.description}/>
                ))}
            </div>
        </section>
        <section>
            <h2>Featured work</h2>
            <div className={styles.cards}>
                {projects.map((project, index) => (
                    <Card key={index} url={project.url} thumbnail={project.thumbnail} title={project.title} description={project.description}/>
                ))}
            </div>
        </section>
        <section>
            <h2>Teaching design since 2015</h2>
            <div className={styles.minicardsalt}>
                {workshops.map((workshop, index) => (
                    <MiniCard key={index} img={workshop.img} title={workshop.title} description={workshop.description}/>
                ))}
            </div>
        </section>
    </article>
}

