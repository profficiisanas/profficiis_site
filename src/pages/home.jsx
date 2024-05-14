import  { useEffect } from 'react';
import Img1 from '../assets/images/img1.jpeg';
import Img2 from '../assets/images/img2.jpg';
import { Card } from 'primereact/card';
import './home.css';
import { Container, Row, Col, Button } from "reactstrap";
import AOS from 'aos';
import 'aos/dist/aos.css';
import ImageCarousel from './ImageCarousel';

const Home = () => {
  useEffect(() => {
    document.title="Home"
    AOS.init({
      duration: 2000,
      once: true, 
      delay: 100, 
      anchorPlacement: 'top-bottom', 
    });
  }, []);

  return (
    <>
      <br /><br /><br />         

      <Container  className="w-screen h-[60vh] overflow-hidden flex justify-center items-center "> 
        
         <ImageCarousel  />
         
      </Container>

      <br /><br /><br /><br /><br /><br />

      <Container>
    <Row>
      <Col lg='6'>
        <div className='home_img2' >
          <img src={Img2} alt="" />
        </div>
      </Col>
      <Col lg='6'><br /><br />
      <h2  style={{ fontVariant: 'all-petite-caps' }}>Notre Mission: Fournir des services professionnels de qualité</h2>

        <p className='home_par' >
          Profficiis est une entreprise spécialisée dans les services professionnels et le centre de contact intelligent.
          Nous nous engageons à fournir des solutions de haute qualité pour répondre aux besoins de nos clients.
          Avec notre expertise et notre technologie de pointe, nous aidons les entreprises à atteindre leurs objectifs et à se démarquer de la concurrence.
        </p>
        <div className="btns d-flex gap-3" >
          <Button className='btn1'>En savoir plus</Button>
          <Button className='btn3'>Inscrivez-vous {'>'} </Button>
        </div>
      </Col>
    </Row><br /><br /><br />
    <Row>
      <Col lg='6' order-lg='2'><br /><br />
        <h2  data-aos="fade-right" style={{ fontVariant: 'all-petite-caps' }} >Notre Mission: Fournir des services professionnels de qualité</h2>
        <p className='home_par' data-aos="fade-right">
          Profficiis est une entreprise spécialisée dans les services professionnels et le centre de contact intelligent.
          Nous nous engageons à fournir des solutions de haute qualité pour répondre aux besoins de nos clients.
          Avec notre expertise et notre technologie de pointe, nous aidons les entreprises à atteindre leurs objectifs et à se démarquer de la concurrence.
        </p>
        <div className="btns d-flex gap-3" data-aos="fade-right">
          <Button className='btn1'>En savoir plus</Button>
          <Button className='btn3'>Inscrivez-vous {'>'} </Button>
        </div>
      </Col>
      <Col lg='6' order-lg='1'>
        <div className='home_img2' data-aos="fade-left">
          <img src={Img2} alt="" />
        </div>
      </Col>
    </Row>
  </Container>


      <div className="horizontal-line" data-aos="zoom-in">
        <div className="wave"></div>
        <div className="wave"></div>
        <div className="wave"></div>
      </div>

      <Container>
      <Row>
        <Col lg='4' data-aos="zoom-in">
        <br />
          <Card style={{borderRadius: '0.75rem', border: '2px solid #D4AF37'}} className="card_body ">
            <h5 className="card_title"><i className="ri-archive-fill"></i></h5>
            <h6 className="card_subtitle">Découvrez nos services professionnels</h6>
            <h6 className="card_subtitles">de qualité</h6>
            <p className="card-text">
              Profficiis offre une large gamme de services professionnels pour répondre à vos besoins spécifiques.
              Que vous ayez besoin d'une assistance administrative, de services de centre d'appels ou de solutions de gestion de la relation client, nous sommes là pour vous aider.
            </p><br></br>
          </Card>
        </Col>
        <Col lg='4' data-aos="zoom-in">
          <br />
          <Card style={{borderRadius: '0.75rem', border: '2px solid #D4AF37' }} className="card_body ">
            <h5 className="card_title"><i className="ri-customer-service-2-fill"></i></h5>
            <h6 className="card_subtitle">Optimisez votre relation client avec notre</h6>
            <h6 className="card_subtitles">centre de contact intelligent</h6>
            <p className="card-text">
              Notre centre de contact intelligent utilise les dernières technologies pour offrir une expérience client exceptionnelle.
              Grâce à notre chatbot et à notre équipe d'experts, nous sommes en mesure de répondre rapidement et efficacement aux besoins de vos clients.
            </p><br></br>
          </Card>
        </Col>
        <Col lg='4' data-aos="zoom-in">
        <br />
          <Card style={{borderRadius: '0.75rem', border: '2px solid #D4AF37'}} className="card_body ">
            <h5 className="card_title"><i className="ri-stack-fill"></i></h5>
            <h6 className="card_subtitle">Restez informé avec notre section</h6>
            <h6 className="card_subtitles">de blog</h6>
            <p className="card-text">
              Notre section de blog est remplie d'articles et d'actualités pertinents pour vous tenir au courant des dernières tendances et des meilleures pratiques dans le domaine des services professionnels.
              Rejoignez notre communauté et ne manquez aucune mise à jour.
            </p><br></br>
          </Card>
        </Col>
      </Row>
      
      <br /><br /><br /><br />
    </Container>
    </>
  );
}

export default Home;
