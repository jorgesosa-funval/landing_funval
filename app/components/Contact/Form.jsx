import React from 'react'

export default function Form() {
    return (
        <div className="flex justify-center w-1/2 flex-shrink-0">
            <form className="w-96 border rounded-md p-8 flex flex-col gap-6 bg-white">
                <h2 className="font-semibold text-xl text-center py-4">CONTACTANOS</h2>

                <div>
                    <label for="name" className="text-xs">Nombre:</label>
                    <div className="flex shadow-lg h-9 rounded-md items-center gap-2 px-3">
                        <img src="/assets/icons/user.svg" alt="" width="40" height="40" className="w-6 h-6" />
                        <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Juan Hernandez "
                            className="bg-transparent flex-grow outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label for="email" className="text-xs">Correo:</label>
                    <div className="flex shadow-lg h-9 rounded-md items-center gap-2 px-3">
                        <img src="/assets/icons/mail.svg" alt="" width="40" height="40" className="w-6 h-6" />
                        <input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="ejemplo@ejemplo.com"
                            className="bg-transparent flex-grow outline-none"
                        />
                    </div>
                </div>

                <div>
                    <label for="phone" className="text-xs">Teléfono:</label>
                    <div className="flex shadow-lg h-9 rounded-md items-center gap-2 px-3">
                        <img src="/assets/icons/phone.svg" alt="" width="30" height="40" className="w-6 h-6" />
                        <input
                            type="tel"
                            name="phone"
                            id="phone"
                            placeholder="(+000)-000-0000"
                            className="bg-transparent flex-grow outline-none"
                        />
                    </div>
                </div>

                <div className="flex flex-col">
                    <label for="coment" className="text-xs">Comentario:</label>
                    <textarea
                        name="coment"
                        id="coment"
                        className="shadow-lg rounded-md h-28 resize-none outline-none p-4"
                    ></textarea>
                </div>

                <button type="button" className="px-4 py-2 bg-blue-400">Enviar</button>
            </form>
        </div>
    )
}
