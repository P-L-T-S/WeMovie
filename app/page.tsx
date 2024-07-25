"use client";

import { useEffect, useState } from "react";
import { GetMovies } from "@/app/Services/GetMovies";
import { HomeWrapper } from "./Styles/HomeWrapper";
import MovieCard from "./Components/MovieCard";
import { IMovie } from "./Models/IMovies";
import { LoadSpiner } from "./Components/LoadSpiner";

export default function Home() {
  const [movies, setMovies] = useState<IMovie[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  async function fetchMovies() {
    setIsLoading(true);
    setTimeout(async () => {
      const res = await GetMovies();
      setMovies(res);
      
      setIsLoading(false);
    }, 5000);
  }

  useEffect(() => {
    fetchMovies();
  }, []);

  return !!isLoading ? (
    <LoadSpiner />
  ) : (
    <HomeWrapper>
      <section>
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </section>
    </HomeWrapper>
  );
}
