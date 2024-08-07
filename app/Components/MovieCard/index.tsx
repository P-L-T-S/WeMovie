import Image from "next/image";
import { IMovie } from "@/app/Models/IMovies";
import { CardWrapper } from "./style";
import React, {
  useContext,
  useEffect,
  useState,
} from "react";
import MovieContext from "@/app/Contexts/MovieContext";

interface IProps {
  movie: IMovie;
}

export default function MovieCard({ movie }: IProps) {
  const { moviesOnCart, setMoviesOnCart } = useContext(MovieContext);
  const [alreadyOncart, setAlreadyOnCart] = useState(false);

  useEffect(() => {
    function MovieAlreadyOnCart() {
      const oncart = moviesOnCart.find((onCart) => movie.id === onCart.id);

      setAlreadyOnCart(oncart !== undefined);
    }

    MovieAlreadyOnCart();
  }, [movie.id, moviesOnCart]);

  function setMovieOnContext(movie: IMovie) {
    setMoviesOnCart([...moviesOnCart, movie]);
  }

  return (
    <CardWrapper>
      <Image
        src={movie.image}
        alt={`capa do filme ${movie.title}`}
        width={147}
        height={188}
      />

      <h5>{movie.title}</h5>

      <h4>
        R${" "}
        {movie.price.toLocaleString("pt-BR", {
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        })}
      </h4>

      <button
        type="button"
        onClick={() => setMovieOnContext(movie)}
        className={alreadyOncart ? "added" : ""}
      >
        <img
          src="/cartIcon.svg"
          alt="icone de adicionar no carrinho"
          height={20}
          width={20}
        />
        Carrinho
      </button>
    </CardWrapper>
  );
}
