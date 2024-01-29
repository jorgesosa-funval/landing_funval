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
        class="flex items-center justify-between py-24 courses-section relative px-20"
      >
        <div>
          <form class="w-96 border rounded-md p-8 flex flex-col gap-6 bg-white">
            <h2 class="font-semibold text-xl text-center py-4">CONTACTANOS</h2>

            <div>
              <label for="name" class="text-xs">Nombre:</label>
              <div class="flex shadow-lg h-9 rounded-md">
                <img src="../public/icons/email.svg" alt="" width="40" height="40" />
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
              <div class="flex shadow-lg h-9 rounded-md">
                <img src="../public/icons/email.svg" alt="" width="40" height="40" />
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
              <div class="flex shadow-lg h-9 rounded-md">
                <img src="../public/icons/email.svg" alt="" width="40" height="40" />
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
      </section>
      <section class="flex w-full h-24 bg-green-vogue-700">

        Companies Logos

      </section>
    </>
  );
}
