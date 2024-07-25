import Image from "next/image";
import { MovieOnCartCardWrapper } from "./style";
import { IMovie } from "@/app/Models/IMovies";
import { useContext, useEffect } from "react";
import MovieCartContext from "@/app/Contexts/MovieContext";

interface IProps extends IMovie {
  qtd?: number;
}

export function MovieOnCartCard({ movie }: { movie: IProps }) {
  const { moviesOnCart, setMoviesOnCart } = useContext(MovieCartContext);

  function Add() {
    delete movie.qtd;
    setMoviesOnCart([...moviesOnCart, movie]);
  }

  function Remove() {
    const i = moviesOnCart.findIndex((m) => m.id === movie.id);
    if (i >= 0) {
      moviesOnCart.splice(i, 1);

      setMoviesOnCart([...moviesOnCart]);
    }
  }

  return (
    <MovieOnCartCardWrapper>
      <div className="row main">
        <div className="product">
          <Image
            src={movie.image}
            alt={`capa do filme ${movie.title}`}
            width={147}
            height={188}
          />
          <p>
            <span>{movie.title}</span>
            <span>
              R${" "}
              {movie.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </span>
          </p>
        </div>

        <div className="inputWrapper">
          <button type="button" onClick={Remove}>
            -
          </button>
          <input
            type="text"
            name="qtd"
            id="qtd"
            value={movie.qtd}
            onChange={() => {}}
          />
          <button type="button" onClick={Add}>
            +
          </button>
        </div>

        <p className="subtotal">
          R${" "}
          {Number(movie.price * movie.qtd!).toLocaleString("pt-BR", {
            minimumFractionDigits: 2,
          })}
        </p>

        <p className="delete">
          <img src="/deleteIcon.svg" alt="excluir" />
        </p>
      </div>
    </MovieOnCartCardWrapper>
  );
}
