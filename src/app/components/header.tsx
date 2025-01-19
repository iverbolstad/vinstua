"use client";

import { getLogo } from "../lib/sanity";
import { useState, useEffect } from "react";
import Image from "next/image";
import { Button } from "./ui/Button";
import Link from "next/link";

// interface Logo {
//   title: string;
//   imageUrl: string;
// }

export const Header = () => {
  // const [logo, setLogo] = useState<Logo[]>([]);

  // useEffect(() => {
  //   async function fetchEvents() {
  //     try {
  //       const data = await getLogo();
  //       setLogo(data);
  //     } catch (error) {
  //       console.error("Error fetching events:", error);
  //     } finally {
  //     }
  //   }

  //   fetchEvents();
  // }, []);

  return (
    <header className="text-center p-4 border-b border-gray-200 shadow-md">
      <div className="flex justify-between items-center w-full">
        <div className="flex items-center space-x-4">
          {/* <Image src={logo[0]?.imageUrl} width={70} height={70} alt="Logo" /> */}
          <Link href={"/"}>
            <Image src={"/logo_vinstua.png"} width={250} height={70} alt="Logo" />
          </Link>
          {/* <p className="font-semibold text-xl">Anleggsgartner 1</p> */}
        </div>
        <div className="flex items-center space-x-4">
          <Button variant="link">
            <Link href={"/"}>Hjem</Link>
          </Button>
          {/* <Button variant="link">
            <Link href={"/om"}>Om oss</Link>
          </Button> */}
          <Button variant="link">
            <Link href={"/produkter"}>Produkter</Link>
          </Button>
          <Button variant="link">
            <Link href={"/kontakt"}>Kontakt</Link>
          </Button>
          {/* <Button variant="link">
            <Link href={"/galleri"}>Galleri</Link>
          </Button> */}
        </div>
      </div>
    </header>
  );
};
