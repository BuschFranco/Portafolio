import React, { useState } from 'react';

const images = [
  { src: '/assets/certificates/GoogleDigitalMarketingandE-commerceBadge.webp', alt: 'Google Digital Marketing and E-commerce Badge', title: 'Google Digital Marketing and E-commerce Badge' },
  { src: '/assets/certificates/GoogleDigitalMarketingandE-commerceSpecializationCertificate.webp', alt: 'Google Digital Marketing and E-commerce Specialization', title: 'Google Digital Marketing and E-commerce Specialization' },

  { src: '/assets/certificates/SatisfactionGuaranteedDevelopCustomerLoyaltyOnline.webp', alt: 'Satisfaction Guaranteed Develop Customer Loyalty Online', title: 'Satisfaction Guaranteed Develop Customer Loyalty Online' },
  { src: '/assets/certificates/MakeTheSale.webp', alt: 'Certificado de Make The Sale: Build, Launch, and Manage E-commerce Stores', title: 'Make The Sale: Build, Launch, and Manage E-commerce Stores' },
  { src: '/assets/certificates/AssessForSuccess.webp', alt: 'Certificado de Asses for Success: Marketing Analytics and Measurement', title: 'Asses for Success: Marketing Analytics and Measurement' },
  { src: '/assets/certificates/AttractAndEngage.webp', alt: 'Certificado de Attract and Engage Customers with Digital Marketing', title: 'Attract and Engage Customers with Digital Marketing' },
  { src: '/assets/certificates/EmailMarketing.webp', alt: 'Certificado de Think Outside the Inbox: Email Marketing', title: 'Think Outside the Inbox: Email Marketing' },
  { src: '/assets/certificates/FromLikesToLeads.webp', alt: 'Certificado de From Likes To Leads: Interact with Customers Online', title: 'From Likes To Leads: Interact with Customers Online' },
  { src: '/assets/certificates/GoogleAI.webp', alt: 'Certificado de Google Ai Essentials', title: 'Google Ai Essentials' },
  { src: '/assets/certificates/FoundationsDigitalMarketing.webp', alt: 'Certificado de Foundations of Digital Marketing and E-commerce', title: 'Foundations of Digital Marketing and E-commerce' },
  
  { src: '/assets/certificates/Programacion.webp', alt: 'Certificado de Desarrollo Web con HTML5, CSS3, JS, AJAX, PHP y MySQL', title: 'Desarrollo Web con HTML5, CSS3, JS, AJAX, PHP y MySQL' },
  { src: '/assets/certificates/Laravel9API.webp', alt: 'Certificado de Curso de Laravel 9 desde cero + APIs RESTFULL', title: 'Curso de Laravel 9 desde cero + APIs RESTFULL' },
  { src: '/assets/certificates/frontend - fullstack - js.webp', alt: 'Certificado de Universidad Desarrollo Web - FrontEnd Web Developer', title: 'Universidad Desarrollo Web - FrontEnd Web Developer' },
  { src: '/assets/certificates/php-sql-certificado.webp', alt: 'Certificado de esarrolla un sistema web POS desde cero con PHP NATIVO', title: 'Desarrolla un sistema web POS desde cero con PHP NATIVO' },
  { src: '/assets/certificates/CSharpBasic.webp', alt: 'Certificado de Visual Studio 2022 C# - Nivel Básico', title: 'Visual Studio 2022 C# - Nivel Básico' },
];

const ImageGrid = () => {
  const [modalImage, setModalImage] = useState(null);

  const openModal = (src) => {
    setModalImage(src);
  };

  const closeModal = () => {
    setModalImage(null);
  };

  const gridStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(230px, 1fr))', // Keep auto-fill for responsiveness
    gap: '2rem',
    padding: '3.5rem 0 2rem 0',
    maxWidth: '100%', // Allow grid to scale responsively
    width: '65%',  // This will center the grid with a reasonable width
    margin: '0 auto', // Center the grid container
  };
  
  

  const imageContainerStyle = {
    position: 'relative',
    textAlign: 'center',
    cursor: 'pointer',
    overflow: 'hidden',
    transition: 'transform 0.3s ease',
    boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.5)",
  };

  const imageStyle = {
    width: '100%',
    height: 'auto',
    display: 'block',
  };

  const hoverStyle = {
    transform: 'scale(1.05)',
  };

  const titleStyle = {
    position: 'absolute',
    bottom: '0',
    left: '0',
    width: '100%',
    color: '#fff',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '0.5rem 0',
    textAlign: 'center',
    transition: 'transform 0.3s ease',
    zIndex: 2,
  };

  const modalStyle = {
    display: 'flex',
    position: 'fixed',
    zIndex: '1000',
    left: '0',
    top: '0',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const modalContentStyle = {
    maxWidth: '80%',
    maxHeight: '80%',
  };

  const closeStyle = {
    position: 'absolute',
    top: '10px',
    right: '20px',
    color: 'white',
    fontSize: '40px',
    cursor: 'pointer',
  };

  return (
    <>
      <section style={gridStyle}>
        {images.map((image) => (
          <div
            key={image.src}
            style={imageContainerStyle}
            onMouseOver={(e) => (e.currentTarget.style.transform = hoverStyle.transform)}
            onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={() => openModal(image.src)}
          >
            <img src={image.src} alt={image.alt} style={imageStyle} />
            <p style={titleStyle}>{image.title}</p>
          </div>
        ))}
      </section>

      {modalImage && (
        <div style={modalStyle} onClick={closeModal}>
          <span style={closeStyle} onClick={closeModal}>&times;</span>
          <img src={modalImage} alt="Modal" style={modalContentStyle} />
        </div>
      )}
    </>
  );
};

export default ImageGrid;
