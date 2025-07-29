import { Eye, Target, CheckCircle, Users, Award, Shield, TrendingUp, Building } from 'lucide-react';

export const VisionMission = () => {
    const missions = [
        {
            id: 1,
            icon: <Award className="w-6 h-6" />,
            text: "Menyediakan produk-produk berkualitas tinggi yang dibutuhkan oleh masyarakat kesehatan Indonesia",
            color: "blue"
        },
        {
            id: 2,
            icon: <TrendingUp className="w-6 h-6" />,
            text: "Meningkatkan Kualitas Layanan Penjualan dan Layanan Purnajual yang baik dan unggul",
            color: "green"
        },
        {
            id: 3,
            icon: <Users className="w-6 h-6" />,
            text: "Meningkatkan Kesejahteraan Sumber Daya Manusia",
            color: "purple"
        },
        {
            id: 4,
            icon: <Building className="w-6 h-6" />,
            text: "Mengembangkan Profesionalisme Perusahaan",
            color: "red"
        },
        {
            id: 5,
            icon: <Shield className="w-6 h-6" />,
            text: "Konsisten dalam mematuhi peraturan perundang-undangan, khususnya alat kesehatan",
            color: "orange"
        },
        {
            id: 6,
            icon: <Target className="w-6 h-6" />,
            text: "Meningkatkan kinerja mutu",
            color: "teal"
        }
    ];

    return (
        <section  id="visi-misi" className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
                        Visi & Misi
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
                    {/* Vision Section */}
                    <div className="bg-neutral-100 rounded-main p-8">
                        {/* Vision Header */}
                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-blue-600">
                                <Eye className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="text-2xl font-bold text-gray-900">Visi Kami</h3>
                                <p className="text-gray-600 text-sm">Our Vision</p>
                            </div>
                        </div>

                        {/* Vision Content */}
                        <p className="text-gray-700 leading-relaxed">
                            Menjadi perusahaan distributor yang selalu memberikan pelayanan dan produk
                            berkualitas kelas dunia dengan teknologi terkini dan memberikan layanan unggul
                            dan terpercaya yang selalu diandalkan untuk meningkatkan taraf hidup masyarakat Indonesia
                        </p>
                    </div>

                    {/* Vision Image */}
                    <div>
                        <img
                            className="rounded-main w-full h-[300px] object-cover"
                            src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                            alt="Medical professionals in discussion"
                        />
                    </div>
                </div>

                {/* Mission Section */}
                <div>
                    {/* Mission Header */}
                    <div className="flex items-center gap-4 mb-8">
                        <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center text-green-600">
                            <Target className="w-6 h-6" />
                        </div>
                        <div>
                            <h3 className="text-2xl font-bold text-gray-900">Misi Kami</h3>
                            <p className="text-gray-600 text-sm">Our Mission</p>
                        </div>
                    </div>

                    {/* Mission Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                        {missions.map((mission) => (
                            <div
                                key={mission.id}
                                className="bg-neutral-100 rounded-main p-4 hover:shadow-xl transition-all duration-300 hover:scale-105"
                            >
                                <div className="text-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 mx-auto mb-4">
                                        {mission.icon}
                                    </div>
                                    <div className="flex items-center justify-center gap-2 mb-3">
                                        <span className="text-sm font-bold text-gray-900">Misi {mission.id}</span>
                                        <CheckCircle className="w-4 h-4 text-green-600" />
                                    </div>
                                    <p className="text-sm text-gray-700 leading-relaxed">
                                        {mission.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};