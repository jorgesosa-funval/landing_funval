import React from 'react'

export default function Graduates() {
  return (
    <section className="h-full flex flex-col items-center p-10 gap-6 w-full relative md:flex-row  md:justify-around md:after:h-full after:bg-poligon after:w-full after:h-1/2 after:absolute after:left-0 after:-z-10 after:bottom-0 after:bg-cover after:bg-bottom">
    <div className="">
      <h1 className="text-center font-semibold text-2xl py-3">Egresados</h1>
      <div className="w-72 h-80 shadow-lg bg-white rounded-md"></div>
    </div>

    <div className="">
      <div className="w-80 h-80 shadow-lg rounded-full bg-white"></div>
      <h1 className="text-center font-semibold text-2xl py-3">Egresados</h1>
    </div>
  </section>
  )
}
