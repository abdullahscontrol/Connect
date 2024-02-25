import './footer.css'
import { TypeAnimation } from 'react-type-animation';

function Footer() {
    return (
        <div className="footer">
            <h1>
                <ExampleComponent />
            </h1>
        </div>
    )
}
const ExampleComponent = () => {
    return (
        <TypeAnimation
            sequence={[
                // Same substring at the start will only be typed out once, initially
                'Connect is for Artists',
                1000, // wait 1s before replacing "Mice" with "Hamsters"
                'Connect is for Musicians',
                1000,
                'Connect is for Entrepreneurs',
                1000,
                'Connect is for Professionals',
                1000,
                'Connect is for Friends and Family',
                1000,
                'Connect is for Travelers',
                1000
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}
        />
    );
};
export default Footer;