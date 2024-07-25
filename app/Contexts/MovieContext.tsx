import { createContext, Dispatch, SetStateAction, useState } from "react";
import { IMovie } from "../Models/IMovies";

interface IProps {
  moviesOnCart: IMovie[];
  setMoviesOnCart: Dispatch<SetStateAction<IMovie[]>>;
}

const MovieCartContext = createContext<IProps>({
  moviesOnCart: [],
  setMoviesOnCart: () => {},
});

export default MovieCartContext;
