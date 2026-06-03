import {
  peliculas,
  buscarPorGenero,
  mejorPuntuada,
  filtrarPorYear,
} from "./peliculas.js";
import { fichaCorta, resumenCatalogo } from "./formato.js";

export default function ejecutar(params) {
  console.log(resumenCatalogo());

  const mejor = mejorPuntuada();
  console.log(`Película mejor puntuada: ${fichaCorta(mejor)}`);

  const peliculasGenero = buscarPorGenero("Comedia");
  console.log(`Películas del género "Comedia": `);
  peliculasGenero.forEach((pelicula) => {
    console.log(fichaCorta(pelicula));
  });
}

ejecutar();
