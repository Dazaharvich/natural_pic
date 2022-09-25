import "../assets/css/galeria.css";
import { useContext } from "react";
import MyContext from "../MyContext";


export default function Galeria() {
  const { imagenes, setImagenes } = useContext(MyContext);

  const setFavoritos = (id) =>{
    const imagenIndex = imagenes.findIndex((e) => e.id ===id);
    imagenes[imagenIndex].favorito = !imagenes[imagenIndex].favorito;
    setImagenes([...imagenes]);
    
  }

  return (
    <div className="galeria grid-columns-5 p-3">
      {imagenes.map((imagen) =>(
        <div
          key={imagen.id}
          className="imagenCard"
          style={{ backgroundImage: `url(${imagen.src})` }}
        >
          <svg
            onClick={() => setFavoritos(imagen.id)}
            width="38px"
            viewBox="0 0 24 24"
            className="hover"
          >
            <path
              fill={imagen.favorito ? "red" : "white"}
              d="M12,21.35L10.55,20.03C5.4,15.36 2,12.27 2,8.5C2,5.41 4.42,3 7.5,3C9.24,3 10.91,3.81 12,5.08C13.09,3.81 14.76,3 16.5,3C19.58,3 22,5.41 22,8.5C22,12.27 18.6,15.36 13.45,20.03L12,21.35Z"
            />
          </svg>
          <p>{imagen.desc}</p>
          <p className="autor">"{imagen.photografo}"</p>
        </div>
      ))}
        </div>
  );
}
