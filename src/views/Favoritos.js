import { useContext } from "react";
import MyContext from "../MyContext";

export default function Favoritos() {
  const {imagenes, setImagenes} = useContext(MyContext);

  const unSetFavoritos = (id) =>{
    const imagenIndex = imagenes.findIndex((e) => e.id ===id);
    imagenes[imagenIndex].favorito = !imagenes[imagenIndex].favorito;
    setImagenes([...imagenes]);
    
  }
  
  return (
    <div>
      <h1>Fotos favoritas</h1>
      <div className="p-3 galeria grid-columns-4">
      {imagenes.filter((imagen) =>imagen.favorito).map((imagen) =>(
        <div
          key={imagen.id}
          className="imagenCard"
          style={{ backgroundImage: `url(${imagen.src})` }}
        >
          <i class="fa-solid fa-square-xmark" 
          onClick={() => unSetFavoritos(imagen.id)}>
          </i>
          <p>{imagen.desc}</p>
          <p className="autor">"{imagen.photografo}"</p>
        </div>
      ))}
       
      </div>
    </div>
  );
}
