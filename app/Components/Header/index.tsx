import MovieCartContext from "@/app/Contexts/MovieContext";
import Link from "next/link";
import { useContext, useEffect } from "react";

export function Header() {
  const { moviesOnCart, setMoviesOnCart } = useContext(MovieCartContext);

  return (
    <header id="header">
      <Link href="/">
        <h2>Wefit</h2>
      </Link>
      <Link href="/Cart">
        <div>
          <h4>Meu Carrinho</h4>
          <p>{moviesOnCart.length} itens</p>
        </div>
        <span>
          <img src="/basketIcon.svg" alt="" />
        </span>
      </Link>
    </header>
  );
}
