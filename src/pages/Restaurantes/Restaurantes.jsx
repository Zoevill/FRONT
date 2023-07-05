// /pages/Restaurantes.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const CardRes = ({ title, description, imgSrc, imgSrc2, linkTo }) => (
  <Link to={linkTo} className="CardRes">
    <img src={imgSrc} alt={title} />
    <div className="FondoRes">
    <div className="LogoRes">
    <img src={imgSrc2} alt={title} />
    </div>
    </div>
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
    
  </Link>
)

const Restaurantes = () => {
  return (
    <div className="Restaurant-container">
      <div className="CardRes-container">
      <header className="fixed-header">
        <img src="/Logos/Reef28.SVG" alt="" /></header>
        <CardRes
          description="Arriba, donde los huéspedes tienen la oportunidad de relajarse. Disfruta en lo alto de nuestro magnífico hotel de una vista espéctacular del océano visto desde nuestra piscina infinita. Música, bar completo, deliciosa comida y buenos momentos te esperan. El público en general puede acceder a nuestro rooftop con un consumo mínimo de $500 MXN de lunes a jueves y $700 MXN de viernes a domingo en alimentos y bebidas."
          imgSrc="/Restaurantes/Roof28.JPG"
          imgSrc2="/Logos/Roof28.PNG"
          linkTo="/Restaurantes/roof28/"
        />
        <CardRes
          description="Con su estilo moderno y romántico, Cachito combina platos de la auténtica tradición Mexicana con los más actuales. Disfruta de nuestras deliciosas especialidades, desde tacos hasta ceviches, carnes y mariscos, ó sopas y otras delicias locales preparadas por nuestro equipo culinario reconocido internacionalmente. "
          imgSrc="/Restaurantes/Cachito.JPG"
          imgSrc2="/Logos/Cachito.PNG"
          linkTo="/Restaurantes/cachito"
        />
        <CardRes
          description="Asiático te trae los sabores del Lejano Oriente en platillos refinados y ligeros. Disfruta todo de lo sofisticado de la cocina internacional en el corazón de la Riviera Maya."
          imgSrc="/Restaurantes/Asiatico.JPG"
          imgSrc2="/Logos/Asiatico.PNG"
          linkTo="/Restaurantes/asiatico"
        />
      </div>
    </div>
  );
};

export default Restaurantes;
