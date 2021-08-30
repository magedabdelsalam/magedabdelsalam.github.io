import photo from "../assets/maged.png"
import thumbnail_1 from '../assets/boomspace_5.jpg'
import thumbnail_2 from '../assets/boomspace_4.jpg'

let pages = [
    {
        author: "Maged Abdelsalam", 
        photo: photo,
        title: "ChoiceMap",
        subtitle: "Healthcare shared decision-making",
        thumbnail: thumbnail_1,
        path:"/work/choicemap",
        note:"Healthcare is hella slow",
        category: "Design",
        color: "rgba(180,120,60,1)",
        content:
            <div>
                <div style={{margin: "36px -50%",width: "200%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>
                
                <h1>ChoiceMap</h1>
                <h2>Vision</h2>
                <p>Humans suck at choosing between multiple complicated options. Computers are extremely good at it. That’s why “ChoiceMap”, a decision support software company, wants to help patients make a better more informed life-changing treatment decision. ChoiceMap hired me to help bring that vision to reality.</p>

                <div style={{margin: "36px -25%",width: "150%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>

                <h2>Challenges</h2>
                <ul>
                    <li>How do patients make a treatment decision today?</li>
                    <li>How do physicians explain treatment options and recommend a treatment today?</li>
                    <li>Which conditions are complicated enough to need decision support?</li>
                    <li>How do we get physicians onboard without overstepping?</li>
                    <li>How do we integrate ChoiceMap into the physician’s current workflow?</li>
                </ul>

                <div style={{margin: "36px -25%",width: "150%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>

                <p>Patients are either unaware of treatment options or find it very hard to make a confident decision between multiple treatment options
                Physician don’t always have all the time necessary to explain all the pros and cons of each treatment.</p>

                <p>The burden of follow up is usually put on the patient. If the treatment recommended was too difficult to administer.Chances are the patient will stop the treatment and move on until it gets worse to visit again.</p>

                <div style={{margin: "36px -25%",width: "150%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>

                <h2>Prototype</h2>
                <h3>How do we craft a tool to instill confidence and trust?</h3>
            </div>
    },
    {
        author: "Maged Abdelsalam", 
        photo: photo,
        title: "Heircut",
        subtitle: "The barber experience reimagined",
        thumbnail: thumbnail_2,
        path:"/work/heircut",
        note:"This all started because I hated my barber.",
        category: "Development",
        color: "rgba(60,120,180,1)",
        content:
            <div>
                <div style={{margin: "36px -50%",width: "200%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>
                
                <h1>Heircut</h1>
                <h2>Vision</h2>
                <p>Humans suck at choosing between multiple complicated options. Computers are extremely good at it. That’s why “ChoiceMap”, a decision support software company, wants to help patients make a better more informed life-changing treatment decision. ChoiceMap hired me to help bring that vision to reality.</p>

                <div style={{margin: "36px -25%",width: "150%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>

                <h2>Challenges</h2>
                <ul>
                    <li>How do patients make a treatment decision today?</li>
                    <li>How do physicians explain treatment options and recommend a treatment today?</li>
                    <li>Which conditions are complicated enough to need decision support?</li>
                    <li>How do we get physicians onboard without overstepping?</li>
                    <li>How do we integrate ChoiceMap into the physician’s current workflow?</li>
                </ul>

                <div style={{margin: "36px 0",width: "100%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>

                <p>Patients are either unaware of treatment options or find it very hard to make a confident decision between multiple treatment options
                Physician don’t always have all the time necessary to explain all the pros and cons of each treatment.</p>

                <p>The burden of follow up is usually put on the patient. If the treatment recommended was too difficult to administer.Chances are the patient will stop the treatment and move on until it gets worse to visit again.</p>

                <div style={{margin: "36px -25%",width: "150%"}}>
                    <img src={thumbnail_1} alt="ChoiceMap"/>
                </div>

                <h2>Prototype</h2>
                <h3>How do we craft a tool to instill confidence and trust?</h3>
            </div>
    },
]

export default pages