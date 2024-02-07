import React from 'react'

export default function Video() {
    return (
        <section className="h-full flex flex-col items-center p-8 md:p-10 gap-6 w-full relative before:bg-poligon before:w-full before:h-3/5 before:absolute before:left-0 before:-z-10 before:top-0 before:bg-cover before:bg-top before:-scale-y-100  overflow-y-hidden">
            <div className="w-full flex flex-col items-center gap-4 ">
                <h2 className="text-center text-3xl font-semibold">¿Que es Funval?</h2>
                <div className="w-full md:w-4/6 max-w-4xl shadow-xl rounded-md h-96 bg-gradient-to-t from-green-vogue-400 to-green-vogue-800 p-2">

                    <iframe src="https://www.youtube.com/embed/Q1arLuPF_zY?si=B2Ai3-JMubIo63ps" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-full h-full'></iframe>
                </div>
            </div>

            <div className="w-full flex flex-col items-center gap-4">
                <h2 className="text-center text-3xl font-semibold">Servicio a la comunidad</h2>
                <div className="w-full md:w-4/6 max-w-4xl shadow-xl rounded-md h-96 bg-gradient-to-b from-green-vogue-400 to-green-vogue-800 p-2">
                    <iframe   src="https://www.youtube.com/embed/aDComfZBa-U" title="¿Qué es Funval? - Animado" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='w-full h-full'></iframe>
                </div>
            </div>
        </section>
    )
}
