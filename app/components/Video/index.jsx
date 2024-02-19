import React from 'react'

export default function Video() {
    return (
        <section className="h-full flex flex-col items-center p-8 md:p-10 gap-10 w-full relative before:bg-poligon before:w-full before:h-1/2 before:absolute before:left-0 before:-z-10 before:top-0 before:bg-cover before:bg-top after:-scale-y-100  after:bg-poligon after:w-full after:h-1/2 after:absolute after:left-0 after:-z-10 after:bottom-0 after:bg-cover after:bg-bottom  overflow-y-hidden">
            <div className="w-full flex flex-col items-center gap-4 ">
                <h2 className="text-center text-3xl font-semibold font-source_s_4">¿Que es Funval?</h2>
                <div className="w-full md:w-4/6 max-w-4xl shadow-xl rounded-md h-80 md:h-[30rem] bg-gradient-to-t from-green-vogue-400 to-green-vogue-800 p-2">

                    <iframe src="https://www.youtube.com/embed/Q1arLuPF_zY?si=B2Ai3-JMubIo63ps" title="YouTube video player"   allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-full h-full'></iframe>
                </div>
            </div>

            <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-center text-3xl font-semibold font-source_s_4">Servicio a la comunidad</h2>
                <div className="w-full md:w-4/6 max-w-4xl shadow-xl rounded-md h-80 md:h-[30rem] bg-gradient-to-b from-green-vogue-400 to-green-vogue-800 p-2">
                    <iframe   src="https://www.youtube.com/embed/aDComfZBa-U" title="¿Qué es Funval? - Animado"          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-full h-full'></iframe>
                </div>
            </div>
        </section>
    )
}
