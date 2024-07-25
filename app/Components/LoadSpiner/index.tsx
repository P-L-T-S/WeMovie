"use client";
import Image from "next/image";
import { LoadSpinerWrapper } from "./style";

export function LoadSpiner() {
  return (
    <LoadSpinerWrapper>
      {/* <Image src="/LoaderIcon.svg" height={238} width={247} alt="Carregando" /> */}
      <div className=""></div>
      <div className=""></div>
    </LoadSpinerWrapper>
  );
}
