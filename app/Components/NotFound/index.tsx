"use client";
import Image from "next/image";
import Link from "next/link";
import { NotFoundWrapper } from "./style";

export default function NotFound() {
  return (
    <NotFoundWrapper>
      <h1>Parece que não há nada por aqui :(!</h1>
      <Image
        src="/notFoundIcon.svg"
        height={238}
        width={247}
        alt="Não foi encontrado nenhum resultado"
      />
      <Link href="/">Voltar</Link>
    </NotFoundWrapper>
  );
}
