import Section from '../components/Section'
import Products from '../components/Products'
import Process from '../components/Process'
import Clients from '../components/Clients'
import Chat from '../components/Chat'

const Home = () => {
    return(
        <article className='home'>
            <Chat title="Hi. I'm Maged Abdelsalam Ma-jed Ab-dl-salam" content="A product designer based in the Seattle Area."/>
            <Section title={"Products"} content={<Products/>}/>
            <Chat title="People before product" content="Let's chat. Email me at hello @ magedabdelsalam.com"/>
            <Section title={"Process"} content={<Process/>}/>
            <Chat title="Hi. I'm Maged Abdelsalam Ma-jed Ab-dl-salam" content="A product designer based in the Seattle Area."/>
            <Section title={"Clients"} content={<Clients/>}/>
        </article>
    )
}

export default Home;