"use client";
import MovieContext from "@/app/Contexts/MovieContext";
import React, { useContext, useEffect, useState } from "react";
import { CartWrapper } from "./style";
import { IMovie } from "@/app/Models/IMovies";
import { Header } from "@/app/Components/Header";
import { MovieOnCartCard } from "./Components/MovieOnCartCard/MovieOnCartCard";
import MovieOnCartCardMobile from "./Components/MovieOnCartCardMobile";
import Link from "next/link";
import NotFound from "@/app/Components/NotFound";

interface IProps extends IMovie {
  qtd?: number;
}

export default function Page() {
  const { moviesOnCart, setMoviesOnCart } = useContext(MovieContext);
  const [screenSize, setScreenSize] = useState(0);
  const [formatedMovies, setFormatedMovies] = useState<IProps[]>([]);

  useEffect(() => {
    const size = window.innerWidth;
    setScreenSize(size);
  }, []);

  useEffect(() => {
    const formated = formatQtd();

    setFormatedMovies([...formated]);
  }, [moviesOnCart]);

  function formatQtd() {
    const formatedMovies = moviesOnCart.reduce(
      (result: IProps[], movie: any, i: number) => {
        const item: IProps = { ...movie };

        const includ = result.findIndex((item) => item.id == movie.id);
        if (includ >= 0) {
          result[includ].qtd!++;

          return [...result];
        }

        item.qtd = 1;
        return [...result, item];
      },
      []
    );

    return [...formatedMovies];
  }

  function CalculateTotal() {
    return formatedMovies.reduce((result, item) => {
      const subtotal = item.qtd! * item.price;
      return subtotal + result;
    }, 0);
  }

  if (moviesOnCart.length == 0) {
    return <NotFound />;
  }

  // mobile
  if (screenSize <= 800) {
    return (
      <CartWrapper>
        {formatedMovies.map((movie) => (
          <MovieOnCartCardMobile key={movie.id} movie={movie} />
        ))}

        <div className="separator" />

        <div className="total mobile">
          <div>
            <span>TOTAL</span>
            <h3>
              R${" "}
              {CalculateTotal().toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}
            </h3>
          </div>
          <Link href="/Ordered">FINALIZAR PEDIDO</Link>
        </div>
      </CartWrapper>
    );
  }

  // desktop
  return (
    <CartWrapper>
      <div className="row header">
        <span>PRODUTO</span>
        <span>QTD</span>
        <span>SUBTOTAL</span>
      </div>

      {formatedMovies.map((movie, i) => (
        <MovieOnCartCard key={movie.id + i} movie={movie} />
      ))}

      <div className="separator" />

      <div className="total">
        <Link href="/Ordered">FINALIZAR PEDIDO</Link>

        <div>
          <span>TOTAL</span>
          <h3>
            R${" "}
            {CalculateTotal().toLocaleString("pt-BR", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
            })}
          </h3>
        </div>
      </div>
    </CartWrapper>
  );
}
