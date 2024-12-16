import './Services.css';
import image1 from '../assets/p1.jpg'
import image2 from '../assets/p2.jpg'
import image3 from '../assets/p3.jpg'
import image4 from '../assets/p4.jpg'

function Services() {
    return(
        <div className="services">
            <p>SERVICRS</p>
            <h1>We Provide Better</h1>
            <div className="services-box">
                <div className='single-box'>
                    <img src={image1}></img>
                    <div className='overlay'></div>
                    <div className='overlay-text'>
                        <h1>Custom Cakes</h1>
                        <hr/>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className='single-box'>
                    <img src={image2}></img>
                    <div className='overlay'></div>
                    <div className='overlay-text'>
                        <h1>Pastries</h1>
                        <hr/>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className='single-box'>
                    <img src={image3}></img>
                    <div className='overlay'></div>
                    <div className='overlay-text'>
                        <h1>Baking Items</h1>
                        <hr/>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className='single-box'>
                    <img src={image4}></img>
                    <div className='overlay'></div>
                    <div className='overlay-text'>
                        <h1>Cup Cakes</h1>
                        <hr/>
                        <p>
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                
            </div>
        </div>
    );
}

export default Services;