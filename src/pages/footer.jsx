import React, { useEffect } from 'react';
import './footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <footer className="footer-distributed">
      <FooterLeft />
      <FooterCenter />
      <FooterRight />
    </footer>
  );
};

const FooterLeft = () => {
  return (
    
    <div className="footer-left" data-aos="fade-up">
      <h3 >PROF<span>FICIIS</span></h3>
      <p className="footer-links">
        <a href="#" className="link-1">Home</a>
        <a href="#">Blog</a>
        <a href="#">Pricing</a>
        <a href="#">About</a>
        <a href="#">Faq</a>
        <a href="#">Contact</a>
      </p>
      <p className="footer-company-name">PROFFICIIS © 2024</p>
    </div>
  );
};

const FooterCenter = () => {
  return (
    <div className="footer-center" data-aos="fade-up" data-aos-delay="200">
      <div>
        <i className="fa fa-map-marker"></i>
        <p><span>Rabat </span> maroc</p>
      </div>
      <div>
        <i className="fa fa-phone"></i>
        <p>+2126000000</p>
      </div>
      <div>
        <i className="fa fa-envelope"></i>
        <p><a href="mailto:profficiis@gmail.com">profficiis@gmail.com</a></p>
      </div>
    </div>
  );
};

const FooterRight = () => {
  return (
    <div className="footer-right" data-aos="fade-up" data-aos-delay="400">
      <div className="map-container">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d489.69137309994323!2d-6.850701101227258!3d34.01419767112546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda76d02df00255b%3A0x6e90002b8ecb3171!2sR%C3%A9sidence%20Cecilia!5e1!3m2!1sfr!2sma!4v1714643276668!5m2!1sfr!2sma"
          width="450"
          height="250"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
