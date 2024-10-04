import styles from 'app/(home)/Page.module.css'
import Card from 'components/Card/Card'
import MiniCard from 'components/MiniCard/MiniCard'

async function getProjects(){
    const res = await fetch(`${process.env.BASE_URL}/api/projects/`)  
    return res.json()
}
async function getExperiences(){
    const res = await fetch(`${process.env.BASE_URL}/api/experiences/`)  
    return res.json()
}
async function getWorkshops(){
    const res = await fetch(`${process.env.BASE_URL}/api/workshops/`)  
    return res.json()
}

export default async function Home() {
    const projectData = await getProjects()
    const experienceData = await getExperiences()
    const workshopData = await getWorkshops()
    const [projects, experiences, workshops] = await Promise.all([projectData, experienceData, workshopData])
    return (
    <article>
        <section>
            <h2>9+ years designing enterprise B2B software.</h2>
            <div className={styles.minicards}>
                {experiences.map((experience, index) => (
                    <MiniCard key={index} img={experience.img} title={experience.title} description={experience.description}/>
                ))}
            </div>
        </section>
        <section>
            <h2>Selected work</h2>
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
        <section>
            <h2>5 things to know about me</h2>
            <ol className={styles.matchList}>
                <li><strong>Teamwork as the foundation for anything successful.</strong> Nothing brings me joy like a well synced team. This is the one thing I look for in any team I work or play with.</li>
                <li><strong>Background in Visual Arts & Design. </strong>Became a jack of all trades; Drawing, Sculpting, Painting, Photography, Animation, etc. But found my passion in web design.</li>
                <li><strong>Lead design workshops since college.</strong> I love showing people the invisiable impact design has on their lives (good and bad) and how they can use it to create change.</li>
                <li><strong>Started with social impact focused work with non-profits.</strong> Got stuck with the reality that most non-profits are politically motivated to maintain the status quo.</li>
                <li><strong>Found startups as the best way to create impact.</strong> I've been fortunate to work with amazing teams to build products that change millions of lives.</li>
            </ol>
        </section>
    </article>
    )
}

