
const cardData = [
    {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    },
    {
        cardImage: "./src/icons/instant-icon.png",
        cardTitle: " Instant Access",
        cardContent: "Your contacts can now reach you directly on their preferred platform with single click"
    }, {
        cardImage: "./src/icons/discover-icon.jpg",
        cardTitle: "Dicover the Possibilities",
        cardContent: "Explorer profiles with just a tap (Intriguing and Openend)."
    }, {
        cardImage: "./src/icons/effortless-icon.png",
        cardTitle: "Effortless Sharing",
        cardContent: "Share your personalized connect link and let others explore your digital presence effortlessly."
    }, {
        cardImage: "./src/icons/connecting-icon.webp",
        cardTitle: "Connecting the World",
        cardContent: "One link at a time (Catchy and Aspirational)"
    }, {
        cardImage: "./src/icons/unify-icon.png",
        cardTitle: "Unify our Social Presence",
        cardContent: "Never fumble for links again"
    },

];
import './Navbar.css'
export default function Navbar() {
    return (
        <div className="navbar">
            <div className="hero"></div>
            <Hero />
            <Hero2 />
        </div>
    )
}
function Hero() {
    return (
        <div className="">
            <div className="sections">
                <div className="section">
                    <h1>Connect</h1>
                    <p>Connect with anyone, anywhere. All their links,
                        one click away." (Simple and direct)</p>
                </div>
                <div className="section">  <form action="">
                    <div className="inputs">
                        <input type="text" placeholder="Email" />
                        <input type="password" placeholder="Password" />
                    </div>
                    <input type="submit" log id="submit" />
                    Sign Up
                </form>
                </div>
            </div>
            <div className="sections">
                <div className="section">
                </div>
                <div className="section"></div>
            </div>
        </div>
    )
}


function Hero2() {
    return (
        <div >
            <Welcome name="   Welcome to connect!"
                infos="Connecting with people has never been this seamless!
            Introducing Connect App, the ultimate tool to bring all your social links together in one place.
            Simply input your social media links into the designated box, and let Connect App do the rest."
            />
            <Welcome name="Why connect!"
                infos="      Connecting with people has never been this seamless!
            Introducing Connect App, the ultimate tool to bring all your social links together in one place.
            Simply input your social media links into the designated box, and let Connect App do the rest.
        "/>
            <ExplorerMore name="Explore More" />
            <div className='explore'>
                {cardData.map(card => <Card cardObj={card} key={card.cardTitle} />)}
            </div>
            <Welcome other="The Future of Social Interaction is here. Are ready to Connect! Fusristic and Engaging)" />
            <Welcome
                other="Experience the power  of seamless social connections.
        Whether it's professional networking or staying in touch with loved ones,
        Connect App is your go-to solution. Make your online presence more
        accessible than ever before."
            />
            <ExplorerMore name="Connect App - Where Convenience Meets Connectivity." />
        </div>
    )
}
function Welcome(Props) {
    return (
        <div>
            <div className="welcome" >
                <div className="others">{Props.other}</div>
                <h1>{Props.name}</h1>
                <p>{Props.infos}</p>
            </div>
        </div>
    )
}

function Card(Props) {
    return (
        <div className="cards" >
            <div className='card'>
                <div className="card-image">
                    <img src={Props.cardObj.cardImage} alt="" /></div>
                <div className="card-title">
                    {Props.cardObj.cardTitle}
                </div>
                <div className="card-content">
                    {Props.cardObj.cardContent}
                </div>
            </div>
        </div >
    )
}
function ExplorerMore(Props) {
    return (
        <div className='explore-more'>
            {Props.name}
        </div>
    )
}



