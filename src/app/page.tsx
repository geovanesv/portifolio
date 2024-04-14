import Encryption from "@/components/Encryption";
import Hero from "@/components/Hero";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <Skills />
        <Encryption />
        <About />
      </div>
    </main>
  );
}
