import React from 'react'

export default function About() {
    return (
        <section className=" p-5 py-8 flex flex-col items-center ">
            <h2 className="text-3xl font-semibold font-source_s_4">Sobre Nosotros</h2>

            <div className="flex flex-col py-8 items-center gap-5 md:flex-row  md:p-6 w-full md:justify-center">

                <div className="w-full md:w-3/5 gap-4 h-96 mt-10 grid grid-cols-2 bg-world bg-no-repeat bg-cover bg-center">

                    <div className='w-full h-full rounded-lg shadow-lg flex items-center justify-center flex-col bg-gradient-to-tl from-green-vogue-500 to-green-vogue-50-glass max-w-56 justify-self-end'>
                        <h4 className='text-2xl md:text-4xl font-bold'>
                            <strong>+30,000</strong>
                        </h4>
                        <p>Egresados</p>
                    </div>

                    <div className='w-5/6 h-5/6 flex items-center justify-center flex-col  rounded-lg shadow-lg self-end bg-gradient-to-tr from-green-vogue-300 to-green-vogue-50-glass max-w-48'>
                        <h4 className='text-2xl md:text-4xl font-bold'><strong>+12</strong></h4>
                        <p>Paises</p>
                    </div>

                    <div className='w-4/6 h-4/6 flex items-center justify-center flex-col  rounded-lg shadow-lg justify-self-end bg-gradient-to-bl from-green-vogue-200 to-green-vogue-50-glass max-w-36'>
                        <h4 className='text-2xl md:text-4xl font-bold'><strong>+50</strong></h4>
                        <p>Instructores</p>
                    </div>

                    <div className='w-4/5 h-4/5 flex items-center justify-center flex-col  rounded-lg shadow-lg bg-gradient-to-br from-green-vogue-400 to-green-vogue-50-glass max-w-40'>
                        <h4 className='text-2xl md:text-4xl font-bold'><strong>+10</strong></h4>
                        <p>Cursos</p>
                    </div>
                </div>
  
                <div className="max-w-2xl text-justify w-full md:w-2/5 ">
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
