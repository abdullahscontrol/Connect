
const cardData = [
    {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    },
    {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    }, {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    }, {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    }, {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    }, {
        cardImage: "./src/icons/centralized-icon.webp",
        cardTitle: "Centralized Hub",
        cardContent: "Consolidational link in one location"
    },

];
import './hero.css'
function Hero() {
    return (
        <div>
            <Welcome />
            <ExplorerMore />
            <Card cardImage="./src/icons/centralized-icon.webp"
                cardTitle="Centralized Hub"
            />
            {/* {cardData.map(card => <Card image={card.cardImage}
                title={card.cardTitle}
                content={card.cardContent}

            />)} */}

        </div>
    )
}
function SomeText() {
    return (
        <div>
            {/* <p>Connect with Ease, Connect with Connect App</p> */}
            <p> Experience the power of seamless social connections.
                Whether it's professional networking or staying in touch with loved ones,
                Connect App is your go-to solution. Make your online presence more
                accessible than ever before.</p>
            <p> Connect App - Where Convenience Meets Connectivity.</p>
        </div>
    )
}

function Welcome() {
    return (
        <div>

            <div className="welcome" >
                <h1>Welcome to connect!</h1> <br />
                <p>
                    Connecting with people has never been this seamless!
                    Introducing Connect App, the ultimate tool to bring all your social links together in one place.
                    Simply input your social media links into the designated box, and let Connect App do the rest.
                </p>
            </div>
            <div className="welcome" >
                <h1>Why connect!</h1> <br />
                <p>
                    Connecting with people has never been this seamless!
                    Introducing Connect App, the ultimate tool to bring all your social links together in one place.
                    Simply input your social media links into the designated box, and let Connect App do the rest.
                </p>
            </div>

        </div>
    )
}

function Card(Props) {
    return (
        <div className="cards" >
            <div className='card'>
                <div className="card-image">
                    <img src={Props.cardImage} alt="" /></div>
                <div className="card-title">
                    {Props.cardTitle}
                </div>
                <div className="card-content">
                    {Props.cardContent}
                </div>
            </div>
        </div >
    )
}
function ExplorerMore() {
    return (
        <div className='explore-more'>
            Explore More
        </div>
    )
}
export default Hero;

