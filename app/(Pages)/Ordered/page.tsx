"use client";
import Image from "next/image";
import Link from "next/link";
import { OrderedWrapper } from "./style";

export default function Page() {
  return (
    <OrderedWrapper>
      <h1>Pedido Realizado com Sucesso!</h1>
      <Image src="/orderedIcon.svg" height={238} width={247} alt="compra realizada com sucesso" />
      <Link href="/">Voltar</Link>
    </OrderedWrapper>
  );
}
