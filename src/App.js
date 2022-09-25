import "./styles.css";
import { useState, useEffect } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./views/Home";
import Favoritos from "./views/Favoritos";
import MyContext from "./MyContext";

export default function App() {
  const [imagenes, setImagenes] = useState([]);
  const endpoint = "/fotos.json";

  const consultarImagenes = async () => {
    const response = await fetch(endpoint);
    let data = await response.json();
    let dataFiltrada = data.photos.map((e) => ({
      id: e.id,
      src: e.src.tiny,
      desc: e.alt,
      photografo: e.photographer,
      favorito: false
    }));
    setImagenes(dataFiltrada); // con setImagenes actualizamos el estado
    };

    useEffect(() => {
      consultarImagenes();
    }, []);

  return (
    <div className="App">
      <MyContext.Provider value={{imagenes, setImagenes}}>
      <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/favoritos" element={<Favoritos />} />
        </Routes>
      </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}
