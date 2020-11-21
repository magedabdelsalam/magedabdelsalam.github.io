import React from "react";
import Header from '../components/Header'

function Home() {
    return(
        <article>
            <Header/>
            <section>
                <h2>Work</h2>
                <ul>
                    {/*<li><a href="https://choicemap.co/">ChoiceMap</a>↗ (social, visual, interaction)</li>*/}
                    <li><a href="http://www.bramblelab.com">Bramble Lab</a>↗ (social, visual, interaction)</li>
                    <li><a href="https://boiling-beach-31279.herokuapp.com/">PODS</a>↗ (interaction)</li>
                    <li><a href="https://maxhanson07.github.io/Indecisive/">nDecisive</a>↗ (interaction)</li>
                    <li><a href="weather-dashboard">Weather Dashboard</a>↗ (interaction)</li>
                    <li><a href="work-day-scheduler">Work Day Scheduler</a>↗ (interaction)</li>
                    <li><a href="password-generator">Password Generator</a>↗ (interaction)</li>
                    <li><a href="code-quiz">Dune Quiz</a>↗ (interaction)</li>
                    <li><a href="#/designed-chaos">Designed Chaos Collection</a>↗ (visual)</li>
                    <li><a href="#/boomspace-workshop">Boomspace Workshop</a>↗ (social)</li>
                    <li><a href="#/january-25th">January 25th, 2011 Posters</a>↗ (social, visual)</li>
                    <li><a href="#/three-vessels">3 Vessels</a>↗ (social, visual, interaction)</li>
                </ul>
            </section>
        </article>
    )
}

export default Home;