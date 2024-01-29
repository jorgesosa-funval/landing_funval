import About from "./components/About";
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
      
      <section
        class="flex items-center  justify-center md:justify-between py-24 courses-section relative px-20 overflow-hidden"
      >
        <div className="flex justify-center w-1/2 flex-shrink-0">
          <form class="w-96 border rounded-md p-8 flex flex-col gap-6 bg-white">
            <h2 class="font-semibold text-xl text-center py-4">CONTACTANOS</h2>

            <div>
              <label for="name" class="text-xs">Nombre:</label>
              <div class="flex shadow-lg h-9 rounded-md items-center gap-2 px-3">
                <img src="/assets/icons/user.svg" alt="" width="40" height="40" className="w-6 h-6"/>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Juan Hernandez "
                  class="bg-transparent flex-grow outline-none"
                />
              </div>
            </div>

            <div>
              <label for="email" class="text-xs">Correo:</label>
              <div class="flex shadow-lg h-9 rounded-md items-center gap-2 px-3">
                <img src="/assets/icons/mail.svg" alt="" width="40" height="40" className="w-6 h-6"/>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="ejemplo@ejemplo.com"
                  class="bg-transparent flex-grow outline-none"
                />
              </div>
            </div>

            <div>
              <label for="phone" class="text-xs">Teléfono:</label>
              <div class="flex shadow-lg h-9 rounded-md items-center gap-2 px-3">
                <img src="/assets/icons/phone.svg" alt="" width="30" height="40" className="w-6 h-6"/>
                <input
                  type="tel"
                  name="phone"
                  id="phone"
                  placeholder="(+000)-000-0000"
                  class="bg-transparent flex-grow outline-none"
                />
              </div>
            </div>

            <div class="flex flex-col">
              <label for="coment" class="text-xs">Comentario:</label>
              <textarea
                name="coment"
                id="coment"
                class="shadow-lg rounded-md h-28 resize-none outline-none p-4"
              ></textarea>
            </div>

            <button type="button" class="px-4 py-2 bg-blue-400">Enviar</button>
          </form>
        </div>

        <div className="hidden w-1/2 md:flex items-center h-full justify-center relative after:bg-slate-900 after:absolute after:w-[540px] after:h-[540px] after:rounded-2xl after:-rotate-45 after:-right-1/2 after:opacity-55 after:-z-10 after:bg-gradient-to-r after:from-green-vogue-400 after:to-green-vogue-100">
                <img src="/assets/fondos/screen.svg" alt="screen icon" className="w-4/5 -rotate-[30deg]"/>
        </div>
      </section>
      <section class="flex w-full h-24 bg-green-vogue-700">

        Companies Logos

      </section>
    </>
  );
}
