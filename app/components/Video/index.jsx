import React from 'react'

export default function Video() {
    return (
        <section class="h-full flex flex-col items-center p-10 gap-6 w-full relative before:bg-poligon before:w-full before:h-3/5 before:absolute before:left-0 before:-z-10 before:top-0 before:bg-cover before:bg-top before:-scale-y-100  overflow-y-hidden">
            <div class="w-full flex flex-col items-center gap-4 ">
                <h2 class="text-center text-3xl font-semibold">¿Que es Funval?</h2>
                <div class="w-4/5 max-w-4xl shadow-xl rounded-md h-96 bg-slate-100">
                    <video src=""></video>
                </div>
            </div>

            <div class="w-full flex flex-col items-center gap-4">
                <h2 class="text-center text-3xl font-semibold">Servicio a la comunidad</h2>
                <div class="w-4/5 max-w-4xl shadow-xl rounded-md h-96 bg-slate-100">
                    <video src=""></video>
                </div>
            </div>
        </section>
    )
}
