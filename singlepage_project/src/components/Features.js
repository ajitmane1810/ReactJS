import img1 from'../assets/cake-women.jpg'
import './Features.css';
function Features() {
    return (
        <div className='features-main-div'>
           <div className='features-title-text'>
            <p>FEATURES</p>
            <h1>Why Choose Us</h1>
           </div>
            <div className='features-desc'>
                <div className='features-text'>
                    <h2>Exprienced Staff</h2>
                    <div className='para'>
                    <i class="fas fa-shield-halved"></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                    </div>
                    
                    <h2>Pre Booking Online</h2>

                    <div className='para'>
                    <i class="fas fa-square-check"></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                    </div>
                    <h2>Affordable Cost</h2>
                    <div className='para'>
                    <i class="fas fa-indian-rupee-sign"></i>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere praesentium ad facilis.</p>
                    </div>
                </div>
                <div className='features-img'>
                    <img src={img1}></img>
                </div>
            </div>
        </div>
    );
}

export default Features;