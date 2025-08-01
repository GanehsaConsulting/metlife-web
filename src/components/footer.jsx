import React from 'react';
import { MapPin, Phone } from 'lucide-react';
import { IoIosFlower } from "react-icons/io";
import Image from 'next/image';


export default function MedicalFooter() {
    const items = ["Beranda", "Tentang", "Visi Misi", "Keunggulan", "Produk",]

    function urlFriendly(text) {
        return `${text.toLowerCase().replace(/\s+/g, '-')}`;
    }
    return (
        <footer className="bg-base text-white">
            {/* Main Footer Content */}
            <div className="mx-4 md:mx-16 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-15">

                    {/* Company Logo & Info */}
                    <div className="lg:col-span-1">
                        <div className="flex md:flex-row flex-col gap-4 md:gap-0 md:items-center mb-4">
                            <div className="bg-white w-17 h-17 flex items-center justify-center rounded-full mr-3">
                                <Image
                                    width={100}
                                    height={100}
                                    src="/logo.png"
                                    alt="Medlife Logo"
                                    className='w-19 h-19 object-cover'
                                 />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-white">PT. Medlife Abadi Jaya</h3>
                                <p className="text-[#d5d5ff] text-sm">Professional Healthcare Solutions</p>
                            </div>
                        </div>
                        <p className="text-[#d5d5ff] text-sm leading-relaxed">
                            Solusi kesehatan profesional dan terpercaya untuk kebutuhan medis Anda dengan standar internasional.
                        </p>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Navigasi</h4>
                        <div className="space-y-3">

                            <div className="flex flex-col gap-1 font-medium ">
                                {items.map(((el, idx) => (

                                    <a
                                        key={idx}
                                        href={el === 0 ? "#beranda" : `#${urlFriendly(el)}`}
                                        className='text-white text-sm link link-hover'
                                    >
                                        {el}
                                    </a>
                                )))}
                            </div>
                        </div>
                    </div>
                    <div>
                        <h4 className="text-xl font-semibold text-white mb-4">Contact</h4>
                        <div className="space-y-3">
                            <div className="flex items-start space-x-3">
                                <MapPin className="h-4 w-4 mt-1 text-[#d5d5ff] flex-shrink-0" />
                                <div className="text-sm text-[#9e9eff]">
                                    <p className="font-medium text-white mb-1">Alamat</p>
                                    <p>Jl. Merpati III, Komplek Perumahan Jati Wangi No.16</p>
                                    <p>RT 007 RW 000, Semangat Dalam, Alalak</p>
                                    <p>Barito Kuala, Kalimantan Selatan 70582</p>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <Phone className="h-4 w-4 text-[#d5d5ff]" />
                                <div className="text-sm">
                                    <span className="text-white font-medium">Phone/WhatsApp: </span>
                                    <a href="tel:+6282246222302" className="text-[#9e9eff] hover:text-white transition-colors">
                                        +62 822-4622-2302
                                    </a>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <MapPin className="h-4 w-4 text-[#d5d5ff]" />
                                <a
                                    href="https://maps.app.goo.gl/JvxspGjjDb3BspP57"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-sm text-[#9e9eff] hover:text-white transition-colors"
                                >
                                    Lihat Lokasi di Google Maps
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-[#9e9eff]/30 bg-surface">
                <div className="max-w-6xl mx-auto px-6 py-4">
                    <div className="flex flex-col justify-between items-center text-center">
                        <div className="text-sm text-[#d5d5ff] mb-2 md:mb-0">
                            © 2025 MedCare. All rights reserved. Professional Healthcare Solutions
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}