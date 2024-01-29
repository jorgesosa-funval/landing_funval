import React from 'react'

export default function About() {
    return (
        <section class="relative  p-5 flex flex-col items-center">
            <h2 class="text-3xl font-semibold">Sobre Nosotros</h2>

            <div class="flex flex-col py-8 items-center gap-5 md:flex-row  md:p-6 w-full md:justify-evenly">

                <div class="shadow-lg w-72 h-80 shrink-0 rounded-md relative bg-white before:bg-green-vogue-400 before:w-full before:h-full before:absolute before:-left-2 before:-top-2 before:rounded-lg   before:-z-10  before:bg-cover before:-scale-y-100 before:opacity-80 before:shadow-lg after:bg-green-vogue-300 after:w-full after:h-full after:absolute after:-left-4 after:-top-4 after:rounded-lg  after:-z-20  after:bg-cover after:-scale-y-100 after:opacity-75 after:shadow-lg
          ">
                    <img src="https://picsum.photos/900/900?random=1" alt="" className="w-full h-full rounded-md" />
                </div>

                <div class="max-w-2xl text-justify px-4">
                    <p>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Numquam
                        aliquam obcaecati tempora, rem temporibus minima qui deserunt fuga,
                        sequi quam doloribus pariatur rerum eligendi iusto repellendus aperiam,
                        nisi ab. Consequatur?
                    </p>
                </div>
            </div>
        </section>
    )
}
