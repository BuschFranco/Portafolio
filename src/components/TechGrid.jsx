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
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/js.webp" alt="imagen de JavaScripts" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/dynamics.webp" alt="imagen de Dynamics 365" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/astro.webp" alt="imagen de Astro" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/wordpress.webp" alt="imagen de WordPress" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/git.webp" alt="imagen de Git" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/c.webp" alt="imagen de C#" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/php.webp" alt="imagen de php" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/sql.webp" alt="imagen de SQL" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/tailwind.webp" alt="imagen de tailwind css" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/unity.webp" alt="imagen de Unity" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/react.webp" alt="imagen de React" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/bos.webp" alt="imagen de Bootstrap 5" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/x.webp" alt="imagen de X++" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/node.webp" alt="imagen de node" /></SwiperSlide>
      <SwiperSlide style={swiperStyles.slide}><img style={swiperStyles.image} src="/assets/py.webp" alt="imagen de python" /></SwiperSlide>
 
    </Swiper>
  );
}
