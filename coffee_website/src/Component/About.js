import './About.css';
import coffee2 from '../assets/about_coffee.png';
function About() {
    return(
        <div className='about' id='about'>
             <div className='about-text'>
                <h1>ABOUT US</h1>
                <p>We at Coffee House, located in Berndorf, Germany, are one of the favorite hangouts for coffee and conversations. Our goal is to offer the best experience to our guests, ensuring an authentic coffee drinking experience in a warm, friendly, and relaxed environment. We aim to bring a sense of relaxation to the city with our cozy space, complete with comfortable couches to lounge in while you enjoy your coffee.</p>
            </div>
            <div className='about-img'>
                <img src={coffee2} alt='not found'/>
            </div>
        </div>
    );
}


export default About;