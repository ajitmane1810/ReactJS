import './Why.css';
import image1 from '../assets/delicious.png';
import image2 from '../assets/pleasant.png';
import image3 from '../assets/hospitality.png';

function Why() {
    return(
        <div className='why' id='why-us'>
            <h1>Why Us ?</h1>
            <div className='why-flex'>
                <div className='card-why'>
                    <img src={image1}/>
                    <div className='why-text'>
                        <h2>Delicious Food</h2>
                        <p>With a lavish spread of finger licking food, we serve to satisfy your palate and take you on a culinary treat.</p>
                    </div>
                </div>
                <div className='card-why'>
                    <img src={image2}/>
                    <div className='why-text'>
                        <h2>Pleasant Ambience</h2>
                        <p>We seek to serve all our guests with the perfect dining experience. We provide perfect ambbience to cherish special moments.</p>
                    </div>
                </div>
                <div className='card-why'>
                    <img src={image3}/>
                    <div className='why-text'>
                        <h2>Hospitality</h2>
                        <p>Our staff members are happy to help. We go the extra mile to make you happy.</p>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default Why;