import urlApi from "../api/api";
import { IMovie } from "../Models/IMovies";

export async function GetMovies(): Promise<IMovie[]> {
  const res = await fetch(urlApi);

  const content = await res.json();

  return content.products;
}
