import Image from "next/image";
import { useContext } from "react";
import { MovieOnCartCardMobileWrapper } from "./style";
import { IMovie } from "@/app/Models/IMovies";
import MovieCartContext from "@/app/Contexts/MovieContext";

interface IProps extends IMovie {
  qtd?: number;
}

export default function MovieOnCartCardMobile({ movie }: { movie: IProps }) {
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
    <MovieOnCartCardMobileWrapper>
      <div className="product">
        <Image
          src={movie.image}
          alt={`capa do filme ${movie.title}`}
          width={67}
          height={108}
        />
        <div>
          <p>{movie.title}</p>
          <div className="inputWrapper">
            <button type="button" onClick={Remove}>
              -
            </button>
            <input type="text" value={movie.qtd} />
            <button type="button" onClick={Add}>
              +
            </button>
          </div>
        </div>
      </div>
      <div className="subtotal">
        <p>
          R$ {movie.price.toLocaleString("pt-BR", { minimumFractionDigits: 2 })}
          <img src="/deleteIcon.svg" alt="excluir" />
        </p>
        <div>
          <span>SUBTOTAL</span>
          <p>
            R${" "}
            {Number(movie.price * movie.qtd!).toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
            })}
          </p>
        </div>
      </div>
    </MovieOnCartCardMobileWrapper>
  );
}
