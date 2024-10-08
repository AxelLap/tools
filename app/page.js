"use client";
import { useState } from "react";

import Image from "next/image";

import Menu from "./components/Menu";
import Buttons from "./components/Buttons";
import Displayer from "./components/Displayer";

export default function Home() {
  const [image, setImage] = useState(null);
  const [settings, setSettings] = useState({
    padding: null,
    radius: null,
    shadow: null,
  });

  return (
    <div className="flex flex-col items-center justify-start w-3/4 min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className=" flex flex-col w-full h-full gap-8 row-start-2 items-center justify-center ">
        <h1 className="text-6xl">Image crop</h1>
        <div className="w-full flex border-2 border-black rounded-xl gap[10px]">
          <Menu setImage={setImage} setSettings={setSettings} />
          <Displayer image={image} settings={settings} />
        </div>
        <Buttons />
      </main>

      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://nextjs.org/icons/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
