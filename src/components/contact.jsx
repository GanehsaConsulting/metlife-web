"use client"
import { MapPin, Phone, MessageCircle, Mail, Globe, Clock, Navigation } from 'lucide-react';

export const ContactSection = () => {
    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6" />,
            title: "Alamat",
            content: "Jl. Merpati III, Komplek Perumahan Jati Wangi No.16 RT 007 RW 000, Semangat Dalam, Alalak, Barito Kuala, Kalimantan Selatan 70582",
            color: "blue",
            action: "Lihat di Maps"
        },
        {
            icon: <Phone className="w-6 h-6" />,
            title: "Telepon",
            content: "+62 82246222302",
            color: "green",
            action: "Hubungi Sekarang"
        },
        {
            icon: <MessageCircle className="w-6 h-6" />,
            title: "WhatsApp",
            content: "+62 82246222302",
            color: "emerald",
            action: "Chat WhatsApp"
        }
    ];

    const getColorClasses = (color) => {
        const colorMap = {
            blue: "bg-blue-50 text-blue-600 border-blue-200 hover:bg-blue-600 hover:text-white",
            green: "bg-green-50 text-green-600 border-green-200 hover:bg-green-600 hover:text-white",
            emerald: "bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-600 hover:text-white"
        };
        return colorMap[color];
    };

    const handleContactClick = (type, content) => {
        switch (type) {
            case 'Lihat di Maps':
                window.open('https://maps.app.goo.gl/JvxspGjjDb3BspP57', '_blank');
                break;
            case 'Hubungi Sekarang':
                window.open(`tel:${content}`, '_self');
                break;
            case 'Chat WhatsApp':
                window.open(`https://wa.me/${content.replace(/[^0-9]/g, '')}`, '_blank');
                break;
            default:
                break;
        }
    };

    return (
        <section id="contact" className="py-20 px-4 bg-gray-50">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
                        Kontak & Lokasi Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                {/* Contact Cards */}
                <div className="grid md:grid-cols-3 gap-6 mb-16">
                    {contactInfo.map((info, index) => (
                        <div
                            key={index}
                            className={`group bg-white border-2 rounded-main p-4 transition-all duration-300 hover:shadow-xl hover:scale-105 cursor-pointer border-mainColor text-black`}
                            onClick={() => handleContactClick(info.action, info.content)}
                        >
                            <div className="text-left">
                                <div className="w-14 h-14 bg-mainColor text-white rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                    {info.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-3 transition-colors duration-300">
                                    {info.title}
                                </h3>
                                <p className="text-sm leading-relaxed mb-4 transition-colors duration-300">
                                    {info.content}
                                </p>
                                <div className="flex items-center justify-center gap-2 text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300">
                                    <span>{info.action}</span>
                                    <Navigation className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Map Section */}
                <div className="bg-white rounded-main shadow-lg overflow-hidden">
                    <div className="p-6 text-center border-b border-gray-100">
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">
                            Lokasi Kami
                        </h3>
                        <p className="text-gray-600">
                            Kunjungi kantor kami di Barito Kuala, Kalimantan Selatan
                        </p>
                    </div>
                    <div className="relative h-80 bg-gray-100 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 mb-4">Peta interaktif akan dimuat di sini</p>
                            <button
                                onClick={() => window.open('https://maps.app.goo.gl/JvxspGjjDb3BspP57', '_blank')}
                                className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg flex items-center gap-2 mx-auto"
                            >
                                <Navigation className="w-5 h-5" />
                                Buka di Google Maps
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};