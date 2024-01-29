import React from 'react'
import Left from './Left'
import Right from './Rigth'

export default function Hero() {
    return (
        <section className="flex flex-col-reverse p-5 gap-4  w-full h-screen overflow-y-hidden items-center bg-transparent pt-20 md:h-screen md:max-h-screen md:p-20 md:flex-row md:gap-0
        before:bg-wave before:w-full before:h-2/5 before:absolute before:left-0 before:-z-10 before:top-0 before:bg-cover before:-scale-y-100 
        after:w-full after:h-1/2 after:absolute after:left-0 after:bottom-0 after:bg-cover after:-z-10 after:bg-wave after:-scale-x-100">

            <Left />

            <Right />

        </section>
    )
}
