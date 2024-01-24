import React from 'react'
import Left from './Left'
import Right from './Rigth'

export default function Hero() {
    return (
        <section className="flex flex-col-reverse p-5 gap-4   pt-20  w-full  h-screen md:h-screen md:max-h-screen  md:p-20  md:flex-row   items-center bg-transparent">

            <Left />

            <Right />

        </section>
    )
}
