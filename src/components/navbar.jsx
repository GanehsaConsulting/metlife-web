"use client"

import { useEffect, useState } from "react";
import { IoIosFlower } from "react-icons/io";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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

    // Close mobile menu when clicking on a link
    const handleMobileMenuClick = () => {
        setIsMobileMenuOpen(false);
    };

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }

        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMobileMenuOpen]);

    const items = ["Beranda", "Tentang", "Visi Misi", "Keunggulan", "Produk"];

    function urlFriendly(text) {
        return `${text.toLowerCase().replace(/\s+/g, '-')}`;
    }

    return (
        <>
            {/* Navbar Mobile */}
            <div className={`md:hidden mt-3 mx-4 top-3 left-3 right-3 z-50 transition-all duration-300 ${isScrolled ? "bg-mainColor/50 backdrop-blur-sm shadow-lg sticky" : "bg-mainColor"} rounded-full`}>
                <div className="flex items-center justify-between px-4 py-3">
                    {/* Logo and Brand */}
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 flex items-center justify-center bg-white rounded-full text-black text-xl">
                            <IoIosFlower />
                        </div>
                        <span className="text-white font-bold text-sm">PT. Medlife Abadi Jaya</span>
                    </div>


                    <div className="dropdown dropdown-left dropdown-bottom">
                        <div tabIndex={0} role="button" className="w-10 h-10 flex items-center justify-center bg-white/20 hover:bg-white/30 rounded-full transition-colors duration-200">
                            <Menu className="w-5 h-5 text-white" />
                        </div>
                        <ul tabIndex={0} className="dropdown-content menu bg-white rounded-box z-1 w-52 p-2 shadow-sm">
                            <div className="px-4 space-y-1">
                                {items.map((item, id) => (
                                    <a
                                        key={item}
                                        href={id === 0 ? "#beranda" : `#${urlFriendly(item)}`}
                                        onClick={handleMobileMenuClick}
                                        className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-xl transition-colors duration-200"
                                    >
                                        {item}
                                    </a>
                                ))}
                            </div>
                        </ul>
                    </div>
                </div>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40" onClick={() => setIsMobileMenuOpen(false)} />
                )}

                {/* Mobile Menu */}
                <div className={`fixed top-20 left-3 right-3 bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 transform z-50 ${isMobileMenuOpen ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0 pointer-events-none'
                    }`}>
                    <div className="py-4">
                        {/* Navigation Items */}
                        <div className="px-4 space-y-1">
                            {items.map((item, id) => (
                                <a
                                    key={item}
                                    href={id === 0 ? "#beranda" : `#${urlFriendly(item)}`}
                                    onClick={handleMobileMenuClick}
                                    className="block px-4 py-3 text-gray-800 font-medium hover:bg-gray-100 rounded-xl transition-colors duration-200"
                                >
                                    {item}
                                </a>
                            ))}
                        </div>

                        {/* Contact Button */}
                        <div className="px-4 mt-4 pt-4 border-t border-gray-200">
                            <a
                                href="#contact"
                                onClick={handleMobileMenuClick}
                                className="block w-full px-4 py-3 bg-mainColor text-white font-medium text-center rounded-xl hover:bg-mainColor/90 transition-colors duration-200"
                            >
                                Contact Us!
                            </a>
                        </div>
                    </div>
                </div>
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
        </>
    )
}