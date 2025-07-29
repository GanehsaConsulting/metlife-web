import { PhoneCall, ArrowRight } from 'lucide-react';

export const Banner = () => {
    return (
        <main id="beranda" className="relative mt-3 w-auto h-screen rounded-main bg-gradient-to-b from-mainColor via-secondaryColor to-transparent m-3 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 patternSquare opacity-20">
            </div>

            {/* Content */}
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-8 py-12">
                {/* Left content */}
                <div className="max-w-2xl text-left md:w-1/2">
                    <div className="mb-6 inline-block bg-white text-blue-800 px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                        #1 Distributor Alkes Terpercaya
                    </div>

                    <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-6 bg-gradient-to-b from-white via-white to-thirdColor text-transparent bg-clip-text">
                        Distributor Terpercaya Alat Kesehatan
                        <br />
                        & BMHP Berkualitas Kelas Dunia
                    </h1>

                    <p className="text-lg text-white mb-8 leading-relaxed max-w-lg">
                        Menyediakan solusi lengkap alat kesehatan, bahan medis habis pakai,
                        dan layanan purnajual untuk meningkatkan taraf hidup masyarakat
                        Indonesia
                    </p>

                    <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-12">
                        <button className="bg-mainColor hover:bg-blue-600 text-white text-md font-medium px-6 py-3 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl">
                            Konsultasi Sekarang
                        </button>
                        <button className="text-white bg-darkColorTwo/10 backdrop-blur-sm text-md font-medium px-6 py-3 rounded-full border border-white/30 hover:bg-white hover:text-blue-800 transition-all duration-300">
                            Pelajari Lebih Lanjut
                        </button>
                    </div>

                </div>

                {/* Right content - Medical equipment */}
                <div className="md:w-1/2 flex justify-end items-center relative h-full">
                    {/* DOctor model */}
                    <div className="absolute -top-20 -right-30 z-20">
                        <img
                            src="/doc.png"
                            alt="Heart Model"
                            className="w-230 h-230 object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* Stethoscope */}
                    <div className="absolute bottom-32 right-8 z-10">
                        <img
                            src="/stetoscop.png"
                            alt="Stethoscope"
                            className="w-40 h-40 object-contain drop-shadow-2xl"
                        />
                    </div>

                    {/* 24 hour service badge */}
                    <div className="absolute bottom-16 left-50 bg-white/30 backdrop-blur-sm text-darkColor px-4 py-3 rounded-xl shadow-lg flex items-center gap-3 z-30">
                        <div className="w-10 h-10 bg-mainColor drop-shadow-2xl text-white rounded-full flex items-center justify-center">
                            <PhoneCall className="w-5 h-5" />
                        </div>
                        <div>
                            <p className="text-xs text-darkColorTwo">24 hour service</p>
                            <p className="text-sm font-medium">(302) 555-0107</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};