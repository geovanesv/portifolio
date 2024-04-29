"use client";
// import Encryption from "@/components/Encryption";
import Hero from "@/components/home/Hero";
import About from "@/components/sobre/About";
import Projects from "@/components/projects";
import Footer from "@/components/footer/Footer";
import Contact from "@/components/contact";
import Image from "next/image";

import Skills from "@/components/skills/Skills";

export default function Home() {
  return (
    <main className="w-full h-full">
      <div className="flex flex-col  gap-20">
        <Hero />
        <About />
        <Skills />
        <Projects />
        {/* <Contact /> */}
        <Footer />
      </div>
    </main>
  );
}
