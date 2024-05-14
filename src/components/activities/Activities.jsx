import  { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';  
import img10 from '../../assets/images/img10.jpeg';

const Activités = () => {
  useEffect(() => {
    document.title="Activités";
    AOS.init({
      duration: 2000, 
      once: true,      
    });
  }, []);

  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto px-4"> <br /><br />
        <h1 className="text-4xl font-bold text-gray-900 mb-6 text-center" data-aos="zoom-in" style={{ color: "#5C636A" }}>
          Profficiis: Votre Partenaire Stratégique
        </h1>
        <br /><br />
        <img src={img10}   alt="Description of the image" className="mx-auto mb-6" style={{ height: '450px', width:'1600px',  borderRadius: '10px'}}   data-aos="fade-up"   />
        <br />


        <h2 className="text-3xl font-bold text-gray-800 mb-4 text-center" data-aos="fade-up">
          Nos Activités
        </h2>
        <br /><br />
        
        <div className="flex flex-col md:flex-row items-stretch mb-12">
          <div className="md:w-1/2 md:flex md:justify-start mb-6 md:mb-0" data-aos="fade-right">
            <div className="text-left md:text-left" style={{ paddingRight: '50%', md: '0' }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left" >Appel Sortant</h3>

              <p className="text-gray-600">
                Notre service d'appel sortant personnalisé vous permet d'établir des relations durables avec vos clients potentiels et existants. Nous nous engageons à maximiser vos opportunités commerciales grâce à une approche stratégique et ciblée dans la génération de leads, la prise de rendez-vous et la promotion de produits ou services.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 md:flex md:justify-end" data-aos="fade-left">
            <div className="text-left md:text-right" style={{ paddingLeft: '50%', md: '0' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left " >Appel Entrant</h3>
              <p className="text-gray-600">
                Nos services d'appel entrant sont axés sur la satisfaction client et la résolution efficace des problèmes. Nous offrons une assistance professionnelle et réactive pour répondre aux demandes de renseignements, fournir un support technique et garantir une expérience client exceptionnelle à chaque interaction.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 md:flex md:justify-start" data-aos="fade-right">
            <div className="text-left md:text-left" style={{ paddingRight: '50%', md: '0' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left" >Centre de Contact Intelligent</h3>
              <p className="text-gray-600">
                Notre centre de contact intelligent intègre les technologies de pointe telles que l'intelligence artificielle et l'apprentissage automatique pour offrir des interactions client optimisées. Nous personnalisons chaque interaction pour fournir une expérience client exceptionnelle, augmentant ainsi la satisfaction et la fidélité de la clientèle.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 md:flex md:justify-end" data-aos="fade-left">
            <div className="text-left md:text-right" style={{ paddingLeft: '50%', md: '0' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left" >Services d'Affaires</h3>
              <p className="text-gray-600">
                Nos services d'affaires couvrent une gamme complète d'activités administratives, de la gestion des e-mails à la coordination des appels avec les administrations. Nous simplifions les processus pour permettre à votre entreprise de fonctionner de manière efficace et sans heurts, vous permettant de vous concentrer sur votre cœur de métier.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 md:flex md:justify-start" data-aos="fade-right">
            <div className="text-left md:text-left" style={{ paddingRight: '50%', md: '0' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left" >Communication Multicanal</h3>
              <p className="text-gray-600">
                Nous offrons une communication fluide et cohérente sur tous les canaux, que ce soit par e-mail, téléphone ou autres plateformes numériques. Notre approche multicanal garantit une accessibilité maximale pour vos clients et une gestion efficace des interactions.
              </p>
            </div>
          </div>

          <div className="md:w-1/2 md:flex md:justify-end" data-aos="fade-left">
            <div className="text-left md:text-right" style={{ paddingLeft: '50%', md: '0' }}>
              <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center md:text-left" >Personnalisation et Flexibilité</h3>
              <p className="text-gray-600">
                Chaque solution que nous proposons est entièrement personnalisée pour répondre aux besoins spécifiques de votre entreprise. Que vous ayez besoin d'une assistance ponctuelle ou d'une solution complète clé en main, notre équipe s'adapte à vos exigences pour garantir des résultats optimaux.
              </p>
            </div>
          </div>
        </div>
      </div><br /> <br />
    </div>
  );
};

export default Activités;
