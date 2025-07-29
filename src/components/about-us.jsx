import { MapPin, Target, Award, Users, Stethoscope, Heart } from 'lucide-react';

export const AboutUs = () => {
    return (
        <section  id="tentang" className="py-20 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
                        Tentang Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-tight">
                                PT. Medlife Abadi Jaya
                            </h3>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8 text-justify md:text-left">
                                PT. Medlife Abadi Jaya merupakan distributor perusahaan penyedia alat kesehatan,
                                bahan medis habis pakai (BMHP), aksesoris alat kesehatan, jasa perawatan dan
                                perbaikan alat kesehatan yang bertujuan untuk memberikan kepuasan terhadap
                                pelanggan secara maksimal dan menyediakan produk kesehatan yang lengkap
                                berkualitas kelas dunia.
                            </p>
                        </div>

                    </div>

                    {/* Right Content - Image */}
                    <div className="relative">
                        <div className="mx-3 relative bg-gray-200 rounded-3xl overflow-hidden shadow-xl">
                            <img
                                src="https://images.unsplash.com/photo-1710074213374-e68503a1b795?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="About PT. Medlife Abadi Jaya"
                                className="w-full h-96 object-cover"
                            />
                        </div>

                        {/* Floating Elements */}
                        <div className="absolute -top-6 md:-left-6 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center shadow-xl">
                            <Target className="w-8 h-8 text-white" />
                        </div>
                        <div className="absolute -bottom-4 right-0 md:-right-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center shadow-xl">
                            <Award className="w-6 h-6 text-white" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};