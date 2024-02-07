import About from "./components/About";
import Contact from "./components/Contact";
import Graduates from "./components/Graduates";
import Hero from "./components/Hero";
import Video from "./components/Video";




export default function Home() {
  return (
    <>

      <Hero />
      <About />
      <Video />
      <Graduates />
     {/*  <Contact/> */}
     
     {/*  <section class="flex w-full h-24 bg-green-vogue-700">

        Companies Logos

      </section> */}
    </>
  );
}
