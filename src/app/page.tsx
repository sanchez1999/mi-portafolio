import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";

export default function Home() {
  return (
      <main className="flex flex-col items-center">
        <Navbar />
        <Hero />
        <About />
      </main>
  );
}
