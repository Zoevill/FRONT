// /pages/Restaurantes/Roof28.jsx
import React from 'react';
import { Link } from 'react-router-dom';


const Card = ({ title, description, imgSrc, linkTo }) => (
  <Link to={linkTo} className="card">
    <img src={imgSrc} alt={title} />
    <div className="content">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  </Link>
)

const Roof28 = () => {
  return (
    <div className="roof-container">
      <div className="card-container">



      <div className="logo">
      <Card
          title=""
          description=""
          imgSrc="/Categorias/Roof28.JPG"
          linkTo=""
        />
        </div>
        <hr></hr>
        <Card
          title="Cocteles"
          description="Descubre nuestra exquisita selección de cócteles, creados por nuestros expertos mixólogos que han combinado años de experiencia y una inmensa pasión por su oficio para ofrecerte creaciones únicas."
          imgSrc="/Categorias/Cocteles.JPG"
          linkTo="/Restaurantes/roof28/cocteles/productos"
        />
        <Card
          title="Licores"
          description="Explora nuestra amplia gama de licores selectos. Desde whiskys añejos, tequilas de agave puro, hasta rones caribeños y ginebras artesanales."
          imgSrc="/Categorias/Licores.JPG"
          linkTo="/Restaurantes/roof28/licores/productos"
        />
        <Card
          title="Vinos"
          description="Sumérgete en nuestro surtido de vinos cuidadosamente seleccionados. Desde robustos tintos y elegantes blancos, hasta espumosos champagnes y delicados rosados."
          imgSrc="/Categorias/Vinos.JPG"
          linkTo="/Restaurantes/roof28/vinos/productos"
        />
      </div>
    </div>
  );
};

export default Roof28;

