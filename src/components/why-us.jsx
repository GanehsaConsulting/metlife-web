import {
    Award,
    Shield,
    Users,
    Truck,
    Heart
} from 'lucide-react';

export const WhyUs = () => {
    const whyUsReasons = [
        {
            icon: <Award className="w-6 h-6" />,
            text: "Kualitas Terjamin",
            desc: "Produk berkualitas kelas dunia dengan sertifikasi internasional dan standar ISO yang ketat"
        },
        {
            icon: <Shield className="w-6 h-6" />,
            text: "Terpercaya & Profesional",
            desc: "Pengalaman bertahun-tahun melayani fasilitas kesehatan dengan komitmen profesionalisme tinggi"
        },
        {
            icon: <Truck className="w-6 h-6" />,
            text: "Distribusi Luas",
            desc: "Jaringan distribusi yang mencakup seluruh Indonesia dengan sistem logistik yang handal"
        },
        {
            icon: <Users className="w-6 h-6" />,
            text: "Layanan Purnajual Unggul",
            desc: "Tim teknisi berpengalaman siap memberikan perawatan dan perbaikan alat kesehatan"
        },
        {
            icon: <Heart className="w-6 h-6" />,
            text: "Komitmen Kesehatan",
            desc: "Berkomitmen penuh untuk meningkatkan taraf hidup dan kesehatan masyarakat Indonesia"
        }
    ];

    return (
        <section  id="keunggulan" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
                        Keunggulan Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>
                {/* Why Us Cards */}
                <div className="flex flex-col lg:flex-row gap-5">
                    {whyUsReasons.map((reason, index) => (
                        <div
                            key={index}
                            className="flex-1 bg-neutral-100 rounded-main p-3 hover:shadow-xl transition-all duration-300 hover:scale-105"
                        >
                            {/* Icon */}
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center mb-6 text-mainColor">
                                {reason.icon}
                            </div>

                            {/* Text */}
                            <h3 className="text-xl font-bold text-gray-900 mb-4">
                                {reason.text}
                            </h3>

                            {/* Description */}
                            <p className="text-gray-600 leading-relaxed text-sm">
                                {reason.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};