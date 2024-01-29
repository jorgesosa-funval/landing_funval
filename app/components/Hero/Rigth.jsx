import React from 'react'

export default function Right() {
    return (
        <div className="md:h-[calc(100vh-200px)] md:w-1/2   rounded-2xl w-full h-1/2 overflow-hidden flex-shrink-0">

            <div className="w-full h-full rounded-2xl  bg-gradient-to-b from-green-vogue-500 to-green-vogue-800">

                <div className="flex flex-col items-center h-full overflow-x-hidden px-[2%] pb-0 text-white  md:p-8 md:pb-0 ">

                    <p className="text-2xl md:text-4xl font-semibold mt-8 md:mt-0 md:mb-10 max-w-96 text-center ">
                        ¡Bienvenido a tu emocionante viaje hacia el éxito!
                    </p>
                    <div className="   flex-grow flex">


                        <div className="border-gray-900 p-3  rounded-tl-[4px] bg-gradient-to-r from-pink-500 to-red-500 self-end h-2/6 md:h-2/5 w-4/12 box-content max-w-36">
                            <p className="text-xl font-bold">Explora</p>
                            <p className="text-xs md:text-sm">Descubre nuevas posibilidades</p>
                        </div>
                        <div className="border-gray-900 p-3  bg-gradient-to-r rounded-tl-[4px] from-green-500 to-teal-500 self-end h-3/6 md:h-3/5 w-4/12 box-content max-w-36">
                            <p className="text-xl font-bold">Supérate</p>
                            <p className="text-xs md:text-sm">Desarrolla tus habilidades</p>
                        </div>
                        <div className=" border-gray-900 p-3  rounded-t-[4px] bg-gradient-to-r from-yellow-500 to-orange-500 self-end h-4/6 md:h-4/5 w-4/12 box-content max-w-36">
                            <p className="text-xl font-bold">Triunfa</p>
                            <p className="text-xs md:text-sm">Alcanza tus metas</p>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}
