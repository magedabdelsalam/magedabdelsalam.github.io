import Link from 'next/link'

export default function KonanAI() {
    return <article>
        <header>
            <h4><Link href="/"><a>{`<-`} Back</a></Link></h4>
            <img src="konan.png"/>
            <h1>Konan AI</h1>
            <p>Credit Decisioning</p>
        </header>
        <section>
            <span>Role</span>
            <h2>Original Goal</h2>
            <p>My initial role was to design a use-case Machine Learning Operations (MLOps) tool from scratch. But after working on this goal for a year, focusing entirely on technical users, we saw that Konan was barely being used inside organizations. Data scientists used our API to perform most of their goals and business users didn't understand our frontend from all the technical jargon aimed at data scientist.</p>
            <h3>Remembering our Roots</h3>
            <p>Having a sticky and highly visible product was essential to the survival of the company. This lead to a pivotal change in our focus. We decided to go back to our original vision of a USECASE MLOps tool with a heavy emphasis on the USECASE.</p>
        </section>
        <section>
            <span>Pivot</span>
            <h2>New Goal</h2>
            <p>So we looked at our most used use case, credit scoring, as the perfect place to start. This caused a whole deep dive into understanding what credit scoring is being used for, who uses it, how do they use it, what tools do they use, and so much more.</p>
            <p>Now, my role was to turn Konan from a use-case MLOps tool, focused on engineers and data scientists, into a AI Credit Risk Decisioning tool for risk officers and business users.</p>
        </section>
        <section>
            <span>Discovery</span>
            <h2>First: Who are risk officers anyway?</h2>
            <p>To answer this question, we hired a risk officer for 3 reasons; </p>
            <ol>
                <li>Deeply understand risk officer needs and barriers.</li>
                <li>Tap into his network of risk officers </li>
                <li>Refine our credit scoring models. </li>
            </ol>
            <p>This helped us jump start our research by setting up 4 interviews with risk officers across banks and business that provide installments.</p>
        </section>
        <section>
            <span>Insights</span>
            <h2>Shocking Truth: AI is not the most important feature (Right now)</h2>
            <p>Maybe, it's not so shocking afterall.</p>
            <ol>
                <li><strong>Data Visibility:</strong> Getting visibility using excel sheets, badly taken screenshots, presentations and emails, were tedious and time consuming.</li>
                <li>Policy Testing: Testing policy required manual </li>
                <li>Automate Policy Decisions: AI is cool, but our customers are focused more on automating policy decisions using their own policy rules</li>
            </ol>
        </section>
        <section>
            <span>Framing</span>
            <h2>How might we help risk officers create, test ,and deploy policies with ease?</h2>
            <p></p>
        </section>
        <section>
            <span>Solution</span>
            <h2>How might we help risk officers create, test ,and deploy policies with ease?</h2>
            <p></p>
        </section>
        <section>
            <span>Impact</span>
            <h2>How might we help risk officers create, test ,and deploy policies with ease?</h2>
            <p></p>
            <h4><Link scroll={false} href="#top">↑ Top</Link></h4>

        </section>
    </article>
}