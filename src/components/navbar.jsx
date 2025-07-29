"use client"

import { useEffect, useState } from "react";
import { IoIosFlower } from "react-icons/io";

export const Navbar = ({ children }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            setIsScrolled(scrollPosition > 0);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const items = ["Beranda", "Tentang", "Visi Misi", "Keunggulan", "Produk",]

    function urlFriendly(text) {
        return `${text.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return (
        <>

            {/* Navbar Mobile */}
            <div className={`md:hidden block text-white md:mx-10 navbar absolute top-1 left-0 right-0 w-auto md:px-2 rounded-full h-14 min-h-14 z-999`}>
                <a className="px-4 py-2 bg-main/35 rounded-full text-md font-bold">PT. Medlife Abadi Jaya</a>
            </div>

            {/* Navbar Desktop */}
            <div className={`hidden md:flex text-white navbar md:mx-3 mt-3 top-3 left-3 right-3 w-auto md:px-1.5 rounded-full h-12 min-h-12 z-50 transition-all duration-300
                ${isScrolled ? "md:mx-24 bg-mainColor/50 md:sticky shadow-custom border border-base/10 backdrop-blur-sm top-1" : "bg-mainColor"}
                `}>
                <div className="navbar-start">
                    <div className="-mr-1 w-9 h-9 flex items-center justify-center bg-white rounded-full text-black text-3xl">
                        <IoIosFlower />
                    </div>
                    <a className="px-4 py-2 bg-main/15 rounded-full text-md font-bold">PT. Medlife Abadi Jaya</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="flex px-1 gap-1">
                        {items.map((item, id) => (
                            <li key={item}>
                                <a
                                    href={id === 0 ? "#beranda" : `#${urlFriendly(item)}`}
                                >
                                    <button
                                        variant={"ghost"}
                                        className={`cursor-pointer backdrop-blur-sm text-sm px-4 py-2 shadow-xs hover:bg-other text-white font-medium hover:text-mainColor hover:bg-white rounded-full duration-300 ease-in-out
                                        `}
                                    >
                                        {item}
                                    </button>
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="navbar-end">
                    <a href="#contact" className={`px-4 py-2 bg-white text-darkColor font-medium rounded-full text-sm transition-all duration-300 hover:bg-main hover:shadow-custom`}>
                        Contact Us!
                    </a>
                </div>
            </div>



            <div className="">
                {children}
            </div>
        </>
    )
}