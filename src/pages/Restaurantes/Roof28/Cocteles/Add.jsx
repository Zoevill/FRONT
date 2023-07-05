import axios from "axios";
import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const [producto, setProducto] = useState({
    titulo: "",
    descripcion: "",
    precio: null,
    imagen: "",
  });
  const [error,setError] = useState(false)

  const navigate = useNavigate();

  const handleChange = (e) => {
    setProducto((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const [imagen, setImagen] = useState(null);

  const handleFileChange = (e) => {
    setImagen(e.target.files[0]);
  };
  
  const handleClick = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('titulo', producto.titulo);
    formData.append('descripcion', producto.descripcion);
    formData.append('precio', producto.precio);
    formData.append('imagen', imagen);
  
    try {
      await axios.post("http://localhost:8800/productos", formData);
      navigate("/Restaurantes/Roof28/Cocteles/Productos");
    } catch (err) {
      console.log(err);
      setError(true)
    }
  };

  return (
    <div className="form">
    <header className="fixed-header">
      AÑADIR UN PRODUCTO
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
      <input type="file" onChange={handleFileChange} />
        <button onClick={handleClick}>Añadir</button>
      {error && "¡Algo salió mal!"}
      <Link to="/Restaurantes/Roof28/Cocteles/Productos">Ver todos los productos</Link>
    </div>
  );
};

export default Add;
