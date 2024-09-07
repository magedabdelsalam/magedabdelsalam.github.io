'use client'

import Link from 'next/link'
import Image from 'next/image'
import styles from 'app/konan/Page.module.css'
import Annotation from 'components/Annotation/Annotation'

export default function Konan() {
    return <article>
        <header>
            <section>
                <div className={styles.context}>
                    <h4><Link href="/">{`<-`} Back</Link></h4>
                    <div>
                        <span>Synapse Analytics</span>
                        <span>UX Lead</span>
                        <span>2 DSGN 4 ENG 1 PM</span>
                        <span>6 Months</span>
                    </div>
                </div>
                <figure>
                <Image className={styles.cover} fill={true} src="/projects.png" alt="Projects"/>
                </figure>
                <h1>Konan AI</h1>
                <p>A business focused MLOPs tool</p>
            </section>
        </header>
        <section>
            <span>Problem</span>
            <h2>Why I was Brought on</h2>
            <p>My role was to design a use-case Machine Learning Operations (MLOps) tool from scratch. But after working on this goal for a year, focusing entirely on technical users, we saw that Konan, at least the front-end part, was barely being used inside organizations.</p>
            <p>Data scientists used our API to perform most of their goals and business users didn&apos;t understand our frontend from all the technical jargon aimed at data scientist.</p>
        </section>
        <section>
            <span>Pivot</span>
            <h2>Finding Our North Star</h2>
            <p>Having a sticky and highly visible product was essential to the survival of the company. This lead to a pivotal change in our focus. We decided to go back to our original vision of a use-case MLOps tool with a heavy emphasis on ,use-case.</p>
            <p>We looked at our most used use case, credit scoring, as the perfect place to start. This caused a whole deep dive into understanding what credit scoring is being used for, who uses it, how do they use it, what other tools are used in its place, and so much more.</p>
            <p>Now, my role was to turn Konan from a MLOps tool, focused on engineers and data scientists, into a Use-case MLOPS tool focused on risk officers and business users.</p>
        </section>
        <section>
            <span>Discovery</span>
            <h2>First: Who are risk officers anyway?</h2>
            <p>To answer this question, we hired a risk officer for 3 reasons;</p>
            <ol>
                <li>Deeply understand risk officer needs and barriers.</li>
                <li>Tap into his network of risk officers </li>
                <li>Refine our credit scoring models.</li>
            </ol>
            <p>This helped us jump start our research by setting up 4+ interviews with risk officers across banks and business that provide loans/installments.</p>
        </section>
        <section>
            <span>Insights</span>
            <h2>Shocking Truth: AI is Not Important (Right Now)</h2>
            <p>Maybe, it&apos;s not so shocking after all. It makes sense that unless the core issues of their workflows are not being addressed, AI seemed far away. This forced us to focus more on quality of life features. Here are the issues we  identified;</p>
            <ol>
                <li><strong>Data Visibility:</strong> Getting visibility using excel sheets, badly taken screenshots, badly designed presentations and  emails, were tedious and time consuming.</li>
                <li><strong>Policy Testing:</strong> Testing policies was time-consuming and required a ton of manual copy-pasting through excel sheets</li>
                <li><strong>Automate Policy Decisions:</strong> AI is cool, but our customers are focused more on automating policy decisions using a combination of their own policy rules and regulation</li>
            </ol>
        </section>
        <section>
            <span>Framing</span>
            <h2>Restructuring Konan</h2>
            <p>We had two structural problems;</p>
            <ol>
                <li><strong>Workflow outgrew its size and didn&apos;t quite fit inside a project with a model.</strong> A user can create a project; only use it&apos;s MLOPS features, or only use its workflow features. This seemed confusing and restrictive for any future additions. We needed a way to separate different types of projects.</li>
                <li><strong>It was common that users created duplicate projects to start from a clean slate.</strong> This seemed like a hack. We needed a way to allow testing more freely without worrying about muddying the data</li>
            </ol>
        </section>
        <section>
            <span>Solution</span>
            <h2>Better Decisions Through Simplicity</h2>
            <p>With all the change of focus and additional knowledge we gained; we wanted to simplify and design the most essential Konan experience that aligns with our vision. Here are the main ideas that stuck out;</p>
            <ul>
                <li>Separate domains: Models & Workflows</li>
                <li>Separate stages: Test, Share, Deploy, Monitor, & Repeat</li>
                <li>Models Marketplace (Future)</li>
                <li>Common Templates (Future)</li>
            </ul>
            <figure>
                <Image fill={true} src="/usecases.png" alt="Usecases"/>
                <figcaption>Choosing between use-cases</figcaption>
            </figure>
            <figure>
                <Image fill={true} src="/model.png" alt="Model"/>
                <figcaption>Viewing at model output</figcaption>
            </figure>
            <figure>
                <Image fill={true} src="/retraining.png" alt="Retraining"/>
                <figcaption>Viewing retraining model report</figcaption>
            </figure>
            <figure>
                <Image fill={true} src="/workflow.png" alt="Workflow"/>
                <figcaption>Creating a workflow</figcaption>
            </figure>
            <figure>
                <Image fill={true} src="/blocks.png" alt="Blocks"/>
                <figcaption>Choosing between different blocks</figcaption>
            </figure>
            <figure>
                <Image fill={true} src="/simulation.png" alt="Simulation"/>
                <figcaption>Testing different scenarios and viewing reports</figcaption>
            </figure>
            <figure>
                <Image fill={true} src="/live.png" alt="Live"/>
                <Annotation>Hello world</Annotation>
                <figcaption>Viewing live data coming in</figcaption>
            </figure>
        </section>
        <section>
            <span>Impact</span>
            <h2>Cultural Change</h2>
            <p>This was one of the most challenging pivots I&apos;ve experienced, but we did it. Changing our focus from MLOPS into Workflows with MLOPS on the side, really challenged the team, as most of us joined the company to work solely on an AI product. But as with any product, things change. This change was great for the company, and our customers.</p>
        </section>
    </article>
}