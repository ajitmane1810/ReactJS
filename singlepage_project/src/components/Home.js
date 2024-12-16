import Header from "./Header";
import './Home.css';
function Home() {
    return(
        <div className="home">
            <Header/>
            <div className="home-div">
                <div className="middle-div">
                    <h1>Cake Shop</h1>
                    <p>Baking With Heart</p>
                    <div className="button-div">
                        <a href="">
                            <span></span>find out
                        </a>
                        <a href="">
                            <span></span>Read
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Home;