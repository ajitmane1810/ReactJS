import { FaClock, FaEnvelope, FaLocationCrosshairs, FaPhone} from 'react-icons/fa6';
import './Contact.css';


function Contact() {
    return (
        <div className='contact' id='contact'>
            <h1>Contact Us</h1>
            <div className='contact-flex'>
                <div className='form'>
                    <form>
                        <div>
                            <label>Full Name</label>
                            <br/>
                            <input type='text' placeholder='Your Name' required/>
                        </div>
                        <div>
                            <label>Your Email</label>
                            <br/>
                            <input type='email' placeholder='Your Email' required/>
                        </div>
                        <div>
                            <label>Your Number</label>
                            <br/>
                            <input type='number' placeholder='Your Contact Number' required/>
                        </div>
                        <div>
                            <label>Textarea</label>
                            <br/>
                            <textarea name='textarea' placeholder='Your Message' required></textarea>
                        </div>
                        <button class="button" id="submit">Submit</button>
                    </form>
                </div>

                <div >
                <div className='contact-info-flex'>
                    <i><FaLocationCrosshairs/></i>
                    <div>
                        <h4>Our Location</h4>
                        <p>Bikwell Satara</p>
                    </div>
                </div>
                <div className='contact-info-flex'>
                    <i><FaEnvelope/></i>
                    <div>
                        <h4>General Enquries</h4>
                        <p>coffeeshop@xyz.com</p>
                    </div>
                </div>
                <div className='contact-info-flex'>
                    <i><FaPhone/></i>
                    <div>
                        <h4>Call Us</h4>
                        <p>+91 92728239</p>
                    </div>
                </div>
                <div className='contact-info-flex'>
                    <i><FaClock/></i>
                    <div>
                        <h4>Our Timing</h4>
                        <p>Mon-Sun : 10:00 AM - 7:00 PM</p>
                    </div>
                </div>
                </div>
            </div>
        </div>
    );
}

export default Contact;

