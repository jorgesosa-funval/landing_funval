import React from 'react'
import Form from './form'

export default function Contact() {
    return (
        <section
            className="flex items-center  justify-center md:justify-between py-24 courses-section relative px-20 overflow-hidden"
        >

            <Form />
            <div className="hidden w-1/2 md:flex items-center h-full justify-center relative after:bg-slate-900 after:absolute after:h-full after:rounded-2xl after:-rotate-45  after:opacity-55 after:-z-10 after:bg-gradient-to-tl after:from-green-vogue-100 after:to-green-vogue-400 after:aspect-square after:-right-1/2">
                <img src="/assets/fondos/screen.svg" alt="screen icon" className="w-4/5 -rotate-[30deg]" />
            </div>
        </section>
    )
}
