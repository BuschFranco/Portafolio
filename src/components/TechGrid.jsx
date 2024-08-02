// src/components/MySwiper.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// Estilos internos para personalizar el Swiper
const swiperStyles = {
  container: {
    width: '100%', // Ancho del contenedor
    height: '13rem', // Altura del contenedor

    padding: "1rem",

    border: "1px solid rgba(255, 255, 255, 0.095)",
    borderRadius: "1rem",


  },
  slide: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: '24px',
    color: '#fff',
  },
  image: {
    width: "100%",
    borderRadius: "0.5rem"
  }
};

export default function MySwiper() {
  return (
    <Swiper
    spaceBetween={16}
    slidesPerView={5}
    loop
    onAutoplay={2000}
    pagination={{ clickable: true }}
    style={swiperStyles.container}
    >
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/js.jpg" alt="imagen de JavaScripts" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/d365.jpg" alt="imagen de Dynamics 365" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/astro.jpg" alt="imagen de Astro" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/wordpress.jpg" alt="imagen de WordPress" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/git.jpg" alt="imagen de Git" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/c4.jpg" alt="imagen de C#" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/php.jpg" alt="imagen de php" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/sql.jpg" alt="imagen de SQL" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/tailwind.jpg" alt="imagen de tailwind css" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/unity.jpg" alt="imagen de Unity" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/react.jpg" alt="imagen de React" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/bos5.jpg" alt="imagen de Bootstrap 5" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/x++.jpg" alt="imagen de X++" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/node.jpg" alt="imagen de node" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/py.jpg" alt="imagen de python" /></SwiperSlide>
 
    </Swiper>
  );
}
