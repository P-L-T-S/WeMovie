"use client";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import MovieContext from "./Contexts/MovieContext";
import { useState } from "react";
import { IMovie } from "./Models/IMovies";
import { Header } from "./Components/Header";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [moviesOnCart, setMoviesOnCart] = useState<IMovie[]>([]);

  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <MovieContext.Provider
          value={{
            moviesOnCart,
            setMoviesOnCart,
          }}
        >
          <Header/>
          {children}
        </MovieContext.Provider>
      </body>
    </html>
  );
}
