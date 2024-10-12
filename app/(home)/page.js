'use client'

import styles from 'app/(home)/Page.module.css'
import Card from 'components/Card/Card'
import MiniCard from 'components/MiniCard/MiniCard'

import projectsData from '../api/projects/data'
import experiencesData from '../api/experiences/data'
import workshopsData from '../api/workshops/data'

import { usePostHog } from 'posthog-js/react'
import { useEffect, useState } from 'react'

export default function Home() {
    const posthog = usePostHog()
    const [variant, setVariant] = useState(null)

    useEffect(() => {
        if (posthog) {
            setVariant(posthog.getFeatureFlag('serious-vs-play'))
        }
    }, [posthog])

    const projects = projectsData
    const experiences = experiencesData
    const workshops = workshopsData

    if (variant === 'play') {
        return (
            <article>
                <section>
                    <h2>Dancing with Design</h2>
                    <div className={styles.minicards}>
                        {experiences.map((experience, index) => (
                            <MiniCard key={index} img={experience.img} title={experience.title} description={experience.description}/>
                        ))}
                    </div>
                </section>
                <section>
                    <h2>Select work</h2>
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
        )
    }
    
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
                <h2>Select work</h2>
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
                    <li><strong>Teamwork as the foundation for anything successful.</strong> <br/>Nothing brings me joy like a well synced team. This is the one thing I look for in any team I work, or play (basketball) with.</li>
                    <li><strong>Background in Visual Arts & Design. </strong> <br/>Became a jack of all trades; Drawing, Painting, Illustration, Sculpting, Photography, Stop-motion animation, etc. Found my calling in software design.</li>
                    <li><strong>Lead design workshops since college.</strong> <br/>I love showing people the invisiable impact design has on their lives (both good and bad) and how they can use it to create change.</li>
                    <li><strong>Started with social impact focused work with non-profits.</strong> <br/>Got stuck with the reality that most non-profits are politically motivated to maintain the status quo. I really hope this changes.</li>
                    <li><strong>Found startups as the best way to create impact.</strong> <br/>Despite the low odds of success (I've experienced two failed startups myself), being part of a startup is still one of the best ways to have impact on millions of people.</li>
                </ol>
            </section>
        </article>
    )
}

