import React, { useState } from 'react';

const images = [
  { src: '/assets/certificates/AttractAndEngage.webp', alt: 'Image 1', title: 'Attract and Engage Customers with Digital Marketing' },
  { src: '/assets/certificates/GoogleAI.webp', alt: 'Image 1', title: 'Google Ai Essentials' },
  { src: '/assets/certificates/FoundationsDigitalMarketing.webp', alt: 'Image 1', title: 'Foundations of Digital Marketing and E-commerce' },
  { src: '/assets/certificates/Programacion.webp', alt: 'Image 1', title: 'Desarrollo Web con HTML5, CSS3, JS, AJAX, PHP y MySQL' },
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