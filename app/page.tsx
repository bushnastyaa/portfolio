import AboutMe from "./components/AboutMe";
import Contacts from "./components/Contacts";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

export default function Home() {
  return (
    <main className="w-[1360px] mx-auto flex min-h-screen flex-col">
      <Navbar />
      <div className="mt-16 mx-auto px-12 py-4">
        <Hero />
        <AboutMe />
        <Projects />
        <Contacts />
      </div>
    </main>
  )
};
