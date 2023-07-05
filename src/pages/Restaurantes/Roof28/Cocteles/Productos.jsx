import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import { AiOutlineArrowLeft } from 'react-icons/ai';
import { AiOutlinePlus } from 'react-icons/ai';

const Productos = () => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const fetchAllProductos = async () => {
      try {
        const res = await axios.get("http://localhost:8800/productos");
        setProductos(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllProductos();
  }, []);

  console.log(productos);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/productos/${id}`);
      window.location.reload()
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
    <header className="fixed-header">
      <Link to="/Restaurantes/roof28" className="left-button">
        <AiOutlineArrowLeft size={20}/> 
      </Link>
      CÓCTELES

        <Link to="/Restaurantes/Roof28/cocteles/add" className="mas-button">
          <AiOutlinePlus size={20}/>
        </Link>

    </header>
      <div className="productos">
      <div className="productos-grid">
        {productos.map((producto) => (
          <div key={producto.id} className="producto">
            <img src={`http://localhost:8800/${producto.imagen}`} alt="" />
            <h2>{producto.titulo}</h2>
            <p>{producto.descripcion}</p>
            <span>${producto.precio}.00 MXN</span>
            <button className="delete" onClick={() => handleDelete(producto.id)}>Eliminar</button>
            <button className="update">
              <Link
                to={`/Restaurantes/Roof28/Cocteles/Update/${producto.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Actualizar
              </Link>
            </button>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default Productos;
