import Link from 'next/link';
import React from 'react'
const menuOptions = [
    {
        title: "HOME",
        url: "#",
        icon: "",
    },
    {
        title: "CURSOS",
        url: "#",
        icon: "",
    },
    {
        title: "NOSOTROS",
        url: "",
        icon: "",
    },
    {
        title: "TESTIMONIOS",
        url: "",
        icon: "",
    },
    {
        title: "CONTACTOS",
        url: "",
        icon: "",
    },
];
export default function Navbar() {

    return (
        <header className="w-full h-16 flex items-center px-8 absolute justify-between z-10">
            <div className="min-w-min">
                <h1 className="text-4xl font-bold text-blue-900">FUNVAL</h1>
            </div>
            <nav className="hidden md:flex-grow md:flex md:justify-end">
                <ul className="flex justify-end gap-4">
                    {
                        menuOptions.map((menu) => (
                            <li className='cursor-pointer'>
                                <Link className='cursor-pointer' href={menu.url}>{menu.title}</Link>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <button className="text-blue-900 md:hidden">
                <svg className="w-8 h-8  hover:text-cyan-600 text-blue-600">
                    <use xlinkHref={"/assets/menuIcon.svg" + '#menuIcon'} />
                </svg>
            </button >
        </header>
    )
}
