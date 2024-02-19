import React from 'react'
// import logo from '/assets/LOGO-FUNVAl.png'
import Image from 'next/image';
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
            <div className="w-40 cursor-pointer">
                <Image src="/assets/LOGO-FUNVAl.png" height={256} width={512} className="w-full" alt="Company Logo" />
                {/* <h1 className="text-4xl font-bold text-blue-900">FUNVAL</h1> */}
            </div>
            <nav className="hidden md:flex-grow md:flex md:justify-end">
                <ul className="flex justify-end gap-4">
                    {
                        menuOptions.map((menu) => (
                            <li className='cursor-pointer' key={menu.title}>
                                <a className='cursor-pointer' href={menu.url}>{menu.title}</a>
                            </li>
                        ))
                    }
                </ul>
            </nav>
            <button className="text-blue-900 md:hidden">
                <svg className="w-8 h-8  hover:text-green-vogue-900 text-green-vogue-950">
                    <use xlinkHref={"/assets/icons/menu.svg" + '#menuIcon'} />
                </svg>
            </button >
        </header>
    )
}
