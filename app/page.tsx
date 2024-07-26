import Image from "next/image";
import { Button } from 'flowbite-react';
import "./globals.css";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Clientele from "./components/Clientele";
import Team from "./components/Team";




export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Services />
      <Clientele />
      <Team />
    </main>
  );
};
