import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Restaurantes/Roof28/Cocteles/Add";
import Productos from "./pages/Restaurantes/Roof28/Cocteles/Productos";
import Update from "./pages/Restaurantes/Roof28/Cocteles/Update";


import Restaurantes from "./pages/Restaurantes/Restaurantes";
import Roof28 from "./pages/Restaurantes/Roof28/Roof28";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/Restaurantes/Roof28/Cocteles/Productos" element={<Productos />} />
          <Route path="/Restaurantes/Roof28/Cocteles/add" element={<Add />} />
          <Route path="/Restaurantes/Roof28/Cocteles/update/:id" element={<Update />} />

          <Route path="/" element={<Restaurantes />} />
          <Route path="/Restaurantes/Roof28" element={<Roof28 />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
