import axios from 'axios';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Update = () => {
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    precio: null,
    imagen: null
  });
  const [error,setError] = useState(false)

  const location = useLocation();
  const navigate = useNavigate();

  const productoId = location.pathname.split("/")[5];
  console.log(`Product id from pathname: ${productoId}`);


  const handleChange = (e) => {
    setProducto((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleFileChange = (e) => {
    setProducto({ ...producto, imagen: e.target.files[0] });
  };

  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', producto.titulo);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio', producto.precio);
    formData.append('imagen', producto.imagen);

    try {
      const config = {
        headers: {
          'content-type': 'multipart/form-data'
        }
      };
      await axios.put(`http://localhost:8800/Productos/${productoId}`, formData, config);
      navigate("/Restaurantes/Roof28/Cocteles/Productos");
    } catch (err) {
      console.log(err);
      setError(true);
    }
  };



  


  return (
    <div className="form">
    <header className="fixed-header">
      ACTUALIZAR PRODUCTO
    </header>
      <input
        type="text"
        placeholder="Titulo del producto"
        name="titulo"
        onChange={handleChange}
      />
      <textarea
        rows={5}
        type="text"
        placeholder="Descripcion del producto"
        name="descripcion"
        onChange={handleChange}
      />
      <input
        type="number"
        placeholder="Precio del producto"
        name="precio"
        onChange={handleChange}
      />
      <input
        type="file"
        name="imagen"
        onChange={handleFileChange}
      />
      <button onClick={handleClick}>Actualizar</button>
      {error && "¡Algo salió mal!"}
      <Link to="/Restaurantes/Roof28/Cocteles/Productos">Ver todos los productos</Link>
    </div>
  );
};

export default Update;
