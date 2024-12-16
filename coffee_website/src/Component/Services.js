import './Services.css';
import img1 from '../assets/hot_beverages.png';
import img2 from '../assets/cold_beverages.png';
import img3 from '../assets/refreshment.png';
import img4 from '../assets/special_combos.png';
import img5 from '../assets/burger_frenchFries.png';
import img6 from '../assets/dessert.png';



function Services() {
    return( 
        <div className='services' id='services'>
            <h1>OUR SERVICES</h1>
           <div className='cards'>

           <div className='card'>
                <img src={img1}/>
                <div className='card-text'>
                    <h2>Hot Beverages</h2>
                    <p>Wide range of Steaming hot coffees to make you fresh and light.</p>
                </div>
            </div>
            <div className='card'>
                <img src={img2}/>
                <div className='card-text'>
                    <h2>Cold Beverages</h2>
                    <p>Creamy and frothy cold coffee to make you feel cool from inside.</p>
                </div>
            </div>
            <div className='card'>
                <img src={img3}/>
                <div className='card-text'>
                    <h2>Refreshment</h2>
                    <p>Fruit and icy refreshing drink to make you feel good.</p>
                </div>
            </div>
            <div className='card'>
                <img src={img4}/>
                <div className='card-text'>
                    <h2>Special Combos</h2>
                    <p>Now it's really easy to chose your favourite eating and drinking combinations.</p>
                </div>
            </div>
            <div className='card'>
                <img src={img5}/>
                <div className='card-text'>
                    <h2>Burger & French Fries</h2>
                    <p>Yummy! Quick bites to satisfy your small size hunger.</p>
                </div>
            </div>
            <div className='card'>
                <img src={img6}/>
                <div className='card-text'>
                    <h2>Desserts</h2>
                    <p>This for sure would satiate your palate and take you on a culinary treat.</p>
                </div>
            </div>

           </div>
        </div>
    );
}

export default Services;