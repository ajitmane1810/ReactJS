import img1 from "../assets/logo-removebg.png";

import "./Contact.css";

function Contact() {
  return (
    <div className="contact">
      <img src={img1}></img>
      <div className="title-contact">
        <p>CONTACT</p>
        <h1>Visit shop Today</h1>
      </div>

      <div className="contact-row">
        <div className="contact-left">
          <h1>Opening Hours</h1>
          <p>
          <i class="far fa-clock"></i>
            Monday to Friday - 9am to 9pm
          </p>
          <p>
          <i class="far fa-clock"></i>
            saturday to sunday - 8am to 11pm</p>
        </div>

        <div className="contact-right">
          <h1>Get In Touch</h1>
          <p>
            #30IN abc colony,xyz City IN
            <i class='fas fa-map-marker-alt'></i>
          </p>
          <p>
            example@gmail.com <i class='fas fa-paper-plane'></i>
          </p>
          <p>
            1233456677 <i class='fas fa-phone'></i>
          </p>
        </div>
      </div>
      <div className="social-links">
        <i class="fab fa-facebook"></i>
        <i class="fab fa-twitter"></i>
        <i class="fab fa-instagram"></i>
        <i class="fab fa-youtube"></i>
        <p>This website designed by Ajit Mane and contain ©2024</p>
      </div>
    </div>
  );
}

export default Contact;
