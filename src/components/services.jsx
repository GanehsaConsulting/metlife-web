"use client"

import React, { useState } from 'react';
import {
    Beaker,
    Shield,
    Stethoscope,
    Plus,
    ChevronRight,
    X,
    Package,
    Search,
    Grid3X3,
    List,
    Eye
} from 'lucide-react';
import AnimateOnScroll from './animate-on-scroll';

const PRODUCTS_DATA = {
    "Antiseptik & Disinfektan": [
        {
            id: 1,
            name: "SASKLIN PLUS HAND",
            description: "Hand sanitizer dengan formula plus untuk perlindungan maksimal",
            imgProducts: "",
            variants: ["50ml", "100ml", "250ml", "500ml"],
            brand: "Sasklin"
        },
        {
            id: 2,
            name: "SASKLIN HANDWASH",
            description: "Sabun cuci tangan antibakteri untuk penggunaan sehari-hari",
            imgProducts: "",
            variants: ["250ml", "500ml", "1L"],
            brand: "Sasklin"
        },
        {
            id: 3,
            name: "SASKLIN HANDSANITIZER GEL BLUE",
            description: "Hand sanitizer gel biru dengan formula antibakteri",
            imgProducts: "",
            variants: ["60ml", "100ml", "250ml"],
            brand: "Sasklin"
        },
        {
            id: 4,
            name: "SASKLIN HANDSANITIZER GEL",
            description: "Hand sanitizer gel transparan untuk perlindungan optimal",
            imgProducts: "",
            variants: ["60ml", "100ml", "250ml", "500ml"],
            brand: "Sasklin"
        },
        {
            id: 5,
            name: "Sasklin Disinfectant",
            description: "Disinfektan serbaguna untuk berbagai permukaan",
            imgProducts: "",
            variants: ["500ml", "1L", "5L"],
            brand: "Sasklin"
        },
        {
            id: 6,
            name: "MedikaCare 0.5%",
            description: "Larutan antiseptik 0.5% untuk perawatan luka",
            imgProducts: "",
            variants: ["100ml", "250ml", "500ml"],
            brand: "Medika"
        },
        {
            id: 7,
            name: "Medika Rivanol",
            description: "Antiseptik rivanol untuk pembersihan luka",
            imgProducts: "",
            variants: ["100ml", "250ml"],
            brand: "Medika"
        },
        {
            id: 8,
            name: "Medika Povidine",
            description: "Antiseptik povidone iodine untuk sterilisasi",
            imgProducts: "",
            variants: ["60ml", "100ml", "250ml"],
            brand: "Medika"
        },
        {
            id: 9,
            name: "Medika Antiseptic Handrub",
            description: "Hand rub antiseptik untuk sterilisasi tangan",
            imgProducts: "",
            variants: ["100ml", "250ml", "500ml"],
            brand: "Medika"
        },
        {
            id: 10,
            name: "Medika Alkohol 95%",
            description: "Alkohol medis 95% untuk keperluan sterilisasi",
            imgProducts: "",
            variants: ["100ml", "250ml", "500ml", "1L"],
            brand: "Medika"
        },
        {
            id: 11,
            name: "Medika Alkohol 70%",
            description: "Alkohol medis 70% untuk pembersihan dan sterilisasi",
            imgProducts: "",
            variants: ["100ml", "250ml", "500ml", "1L"],
            brand: "Medika"
        },
        {
            id: 12,
            name: "MedCare 2.5%",
            description: "Larutan antiseptik 2.5% untuk perawatan intensif",
            imgProducts: "",
            variants: ["100ml", "250ml"],
            brand: "MedCare"
        },
        {
            id: 13,
            name: "ALKOHOL 96%",
            description: "Alkohol teknis 96% untuk keperluan medis",
            imgProducts: "",
            variants: ["100ml", "250ml", "500ml", "1L"],
            brand: "Generic"
        }
    ],
    "Alat Kesehatan": [
        {
            id: 14,
            name: "Oxygen Trolly",
            description: "Troli oksigen portable untuk mobilitas pasien",
            imgProducts: "",
            variants: ["Standard", "Heavy Duty"],
            brand: "Medical Equipment"
        },
        {
            id: 15,
            name: "Kasa Steril",
            description: "Kasa steril untuk perawatan luka dan pembersihan",
            imgProducts: "",
            variants: ["5x5cm", "10x10cm", "15x15cm"],
            brand: "Medical Supplies"
        },
        {
            id: 16,
            name: "Fresmed Aerosol",
            description: "Alat nebulizer aerosol untuk terapi pernapasan",
            imgProducts: "",
            variants: ["Portable", "Table Top"],
            brand: "Fresmed"
        },
        {
            id: 17,
            name: "COZMED COVERALL MEDIS",
            description: "Baju pelindung medis untuk tenaga kesehatan",
            imgProducts: "",
            variants: ["S", "M", "L", "XL", "XXL"],
            brand: "Cozmed"
        }
    ],
    "Baymedika": [
        {
            id: 18,
            name: "bayMEDIKACARE 0,5%",
            description: "Antiseptik Baymedika 0.5% untuk perawatan luka",
            imgProducts: "",
            variants: ["100ml", "250ml", "500ml"],
            brand: "Baymedika"
        },
        {
            id: 19,
            name: "BAYMEDIKA WRAPPING SET",
            description: "Set pembungkus steril untuk alat medis",
            imgProducts: "",
            variants: ["Small", "Medium", "Large"],
            brand: "Baymedika"
        },
        {
            id: 20,
            name: "bayMEDIKA Urine Bag",
            description: "Kantong urin untuk pasien dengan kateter",
            imgProducts: "",
            variants: ["500ml", "1000ml", "2000ml"],
            brand: "Baymedika"
        },
        {
            id: 21,
            name: "bayMEDIKA Tensiometer",
            description: "Alat pengukur tekanan darah digital",
            imgProducts: "",
            variants: ["Manual", "Digital", "Automatic"],
            brand: "Baymedika"
        },
        {
            id: 22,
            name: "bayMEDIKA Sterilization Pouches",
            description: "Kantong sterilisasi untuk alat medis",
            imgProducts: "",
            variants: ["Small", "Medium", "Large"],
            brand: "Baymedika"
        },
        {
            id: 23,
            name: "bayMEDIKA Safety Box",
            description: "Kotak keamanan untuk limbah medis tajam",
            imgProducts: "",
            variants: ["1L", "3L", "5L", "10L"],
            brand: "Baymedika"
        },
        {
            id: 24,
            name: "bayMEDIKA Nasal Cannula Infant",
            description: "Kanula hidung untuk bayi dan anak",
            imgProducts: "",
            variants: ["Infant", "Pediatric"],
            brand: "Baymedika"
        },
        {
            id: 25,
            name: "bayMEDIKA Nasal Cannula Child",
            description: "Kanula hidung khusus untuk anak-anak",
            imgProducts: "",
            variants: ["Child", "Youth"],
            brand: "Baymedika"
        },
        {
            id: 26,
            name: "BAYMEDIKA KASA",
            description: "Kasa medis berkualitas tinggi dari Baymedika",
            imgProducts: "",
            variants: ["5x5cm", "10x10cm", "15x15cm"],
            brand: "Baymedika"
        },
        {
            id: 27,
            name: "bayMEDIKA Enzymatic Detergent",
            description: "Detergen enzim untuk pembersihan alat medis",
            imgProducts: "",
            variants: ["500ml", "1L", "5L"],
            brand: "Baymedika"
        },
        {
            id: 28,
            name: "bayMEDIKA Apron",
            description: "Celemek pelindung untuk prosedur medis",
            imgProducts: "",
            variants: ["Disposable", "Reusable"],
            brand: "Baymedika"
        }
    ],
    "Aksesoris": [
        {
            id: 29,
            name: "P3K Kit",
            description: "Kit pertolongan pertama pada kecelakaan lengkap dengan peralatan medis dasar",
            imgProducts: "/P3K.jpg",
            variants: ["Personal", "Rumah", "Kantor", "Mobil", "Industrial"],
            brand: "Medical Kit"
        },
        {
            id: 30,
            name: "Bracket Dinding Support",
            description: "Bracket dinding untuk menggantung dan menyimpan peralatan medis dengan aman",
            imgProducts: "/Bracket Dinding (support).jpg",
            variants: ["Small", "Medium", "Large", "Heavy Duty"],
            brand: "Medical Support"
        },
        {
            id: 31,
            name: "Bracket Dinding Pembelian",
            description: "Bracket dinding khusus untuk display dan penyimpanan produk medis",
            imgProducts: "/Bracket Dinding (Pembelian).jpg",
            variants: ["Single", "Double", "Triple", "Custom"],
            brand: "Display Solutions"
        }
    ],
    "BMHP (Bahan Medis Habis Pakai)": [
        {
            id: 32,
            name: "Eyedrape",
            description: "Drape mata sekali pakai untuk prosedur operasi mata, steril dan berkualitas tinggi",
            imgProducts: "",
            variants: ["Standard", "Adhesive", "Fenestrated"],
            brand: "Ophthalmic Supplies"
        },
        {
            id: 33,
            name: "Lensa Monofocal (IOL)",
            description: "Intraocular lens monofocal untuk penggantian lensa mata pada operasi katarak",
            imgProducts: "",
            variants: ["Hydrophobic", "Hydrophilic", "Aspheric", "Spheric"],
            brand: "Ophthalmic Implants"
        },
        {
            id: 34,
            name: "Slit Knife (Keratome)",
            description: "Pisau bedah mata untuk membuat sayatan kornea dalam operasi katarak",
            imgProducts: "",
            variants: ["2.75mm", "3.0mm", "3.2mm", "3.5mm"],
            brand: "Surgical Instruments"
        },
        {
            id: 35,
            name: "Ophthalmic Viscosurgical Device (OVD)",
            description: "Zat viskoelastik untuk proteksi jaringan mata selama operasi oftalmologi",
            imgProducts: "",
            variants: ["Cohesive", "Dispersive", "Adaptive", "Ultrapure"],
            brand: "Ophthalmic Solutions"
        },
        {
            id: 36,
            name: "Instrument Bedah Katarak",
            description: "Set instrumen bedah lengkap khusus untuk operasi katarak",
            imgProducts: "",
            variants: ["Basic Set", "Advanced Set", "Premium Set"],
            brand: "Cataract Surgical"
        },
        {
            id: 37,
            name: "Instrument Bedah Retina",
            description: "Set instrumen bedah mikro untuk operasi retina dan vitreoretinal",
            imgProducts: "",
            variants: ["Vitrectomy Set", "Membrane Peeling Set", "Retinal Detachment Set"],
            brand: "Retinal Surgical"
        },
        {
            id: 38,
            name: "Instrument Bedah Glaukoma",
            description: "Instrumen bedah khusus untuk operasi glaukoma dan prosedur drainage",
            imgProducts: "",
            variants: ["Trabeculectomy Set", "Tube Shunt Set", "MIGS Set"],
            brand: "Glaucoma Surgical"
        },
        {
            id: 39,
            name: "Instrument Bedah Kornea",
            description: "Set instrumen untuk transplantasi kornea dan operasi refraktif",
            imgProducts: "",
            variants: ["PKP Set", "DALK Set", "DSEK Set", "DMEK Set"],
            brand: "Corneal Surgical"
        }
    ]
};

const SERVICE_CATEGORIES = [
    {
        id: 1,
        title: "Antiseptik & Disinfektan",
        description: "Produk pembersih dan disinfektan untuk kebersihan medis terbaik",
        icon: <Shield className="w-6 h-6" />,
        color: "blue",
        image: "/sasklin-sanitazer.jpeg"
    },
    {
        id: 2,
        title: "Alat Kesehatan",
        description: "Peralatan medis dan aksesori pendukung kesehatan profesional",
        icon: <Stethoscope className="w-6 h-6" />,
        color: "green",
        image: "Kasa_1.jpg"
    },
    {
        id: 3,
        title: "Baymedika",
        description: "Produk berkualitas tinggi dari brand Baymedika terpercaya",
        icon: <Beaker className="w-6 h-6" />,
        color: "purple",
        image: "baymediaka.jpg"
    },
    {
        id: 4,
        title: "Aksesoris",
        description: "Aksesori dan perlengkapan pendukung medis lainnya",
        icon: <Plus className="w-6 h-6" />,
        color: "orange",
        image: "P3K.jpg"
    },
    {
        id: 5,
        title: "BMHP (Bahan Medis Habis Pakai)",
        description: "Bahan medis habis pakai untuk prosedur operasi mata dan oftalmologi",
        icon: <Eye className="w-6 h-6" />,
        color: "pink",
        image: "eye.jpeg"
    }
];

export const ServicesCarousel = () => {
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [showProducts, setShowProducts] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [viewMode, setViewMode] = useState('grid');

    const getColorClasses = (color) => {
        const colorMap = {
            blue: "border-blue-200 hover:border-blue-400",
            green: "border-green-200 hover:border-green-400",
            purple: "border-purple-200 hover:border-purple-400",
            orange: "border-orange-200 hover:border-orange-400",
            pink: "border-pink-200 hover:border-pink-400",
        };
        return colorMap[color];
    };

    const getIconColor = (color) => {
        const colorMap = {
            blue: "text-blue-600",
            green: "text-green-600",
            purple: "text-purple-600",
            orange: "text-orange-600",
            pink: "text-pink-600",
        };
        return colorMap[color];
    };

    const handleCategoryClick = (category) => {
        setSelectedCategory(category);
        setShowProducts(true);
        setSearchTerm('');
    };

    const closeProductModal = () => {
        setShowProducts(false);
        setSelectedCategory(null);
        setSearchTerm('');
    };

    const getProductsByCategory = (categoryTitle) => {
        const products = PRODUCTS_DATA[categoryTitle] || [];
        if (!searchTerm) return products;

        return products.filter(product =>
            product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
            product.brand.toLowerCase().includes(searchTerm.toLowerCase())
        );
    };

    const getTotalProductCount = (categoryTitle) => {
        return PRODUCTS_DATA[categoryTitle]?.length || 0;
    };

    const ProductCard = ({ product, isListView = false }) => (
        <div className={`bg-white border border-gray-200 hover:border-gray-300 rounded-main p-4 transition-colors duration-200 ${isListView ? 'flex items-start gap-4' : ''}`}>
            <div className={`${isListView ? 'flex-shrink-0' : 'mb-3'} w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center`}>
                <Package className="w-5 h-5 text-gray-600" />
            </div>

            <div className={`${isListView ? 'flex-1 min-w-0' : ''}`}>
                <div className="flex items-start justify-between mb-2">
                    <h4 className="font-medium text-gray-900 text-sm leading-tight">
                        {product.name}
                    </h4>
                    {product.brand && (
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded ml-2 flex-shrink-0">
                            {product.brand}
                        </span>
                    )}
                </div>

                {product.description && (
                    <p className="text-xs text-gray-600 line-clamp-2">
                        {product.description}
                    </p>
                )}
            </div>
        </div>
    );

    return (
        <section id="produk" className="py-16 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="mb-16">
                    <h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-2">
                        Produk Kami
                    </h2>
                    <div className="w-24 h-1 bg-blue-600 rounded-full"></div>
                </div>

                {/* Services Cards */}
                <AnimateOnScroll once={false} animation="blurInUp" duration={0.5} delay={0}>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {SERVICE_CATEGORIES.map((service) => (
                            <div
                                key={service.id}
                                className={`group cursor-pointer w-full bg-white border-2 rounded-main overflow-hidden transition-all duration-200 hover:shadow-lg ${getColorClasses(service.color)}`}
                                onClick={() => handleCategoryClick(service.title)}
                            >
                                {/* Image */}
                                <div className="relative h-85 bg-gray-100 overflow-hidden">
                                    <img
                                        src={service.image}
                                        alt={service.title}
                                        className="w-full h-full object-cover"
                                        onError={(e) => {
                                            e.target.style.display = 'none';
                                            e.target.nextSibling.style.display = 'flex';
                                        }}
                                    />
                                    <div className="hidden w-full h-full bg-gray-200 items-center justify-center">
                                        <Package className="w-12 h-12 text-gray-400" />
                                    </div>

                                    {/* Icon */}
                                    <div className="absolute top-3 right-3 w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm">
                                        <div className={getIconColor(service.color)}>
                                            {service.icon}
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-4">
                                    <h3 className="text-base font-bold text-gray-900 mb-2">
                                        {service.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed mb-3">
                                        {service.description}
                                    </p>

                                    {/* Product Count */}
                                    <div className="flex items-center justify-between">
                                        <span className="text-xs text-gray-500">
                                            {getTotalProductCount(service.title)} Produk
                                        </span>
                                        <ChevronRight className="w-4 h-4 text-gray-400" />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </AnimateOnScroll>

                {/* Product Modal */}
                {showProducts && selectedCategory && (
                    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-999 flex items-center justify-center p-4">
                        <div className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-hidden shadow-2xl">
                            {/* Modal Header */}
                            <div className="bg-gradient-to-r from-mainColor to-secondaryColor text-white p-6">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <h3 className="text-2xl font-bold mb-2">{selectedCategory}</h3>
                                        <p className="text-blue-100">
                                            {getProductsByCategory(selectedCategory).length} dari {getTotalProductCount(selectedCategory)} produk tersedia
                                        </p>
                                    </div>
                                    <button
                                        onClick={closeProductModal}
                                        className="w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors duration-300"
                                    >
                                        <X className="w-6 h-6" />
                                    </button>
                                </div>

                                {/* Search and View Controls */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <div className="relative flex-1">
                                        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/60" />
                                        <input
                                            type="text"
                                            placeholder="Cari produk..."
                                            value={searchTerm}
                                            onChange={(e) => setSearchTerm(e.target.value)}
                                            className="w-full pl-10 pr-4 py-2 bg-white/20 border border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                                        />
                                    </div>
                                    <div className="hidden md:flex bg-white/20 rounded-full p-1">
                                        <button
                                            onClick={() => setViewMode('grid')}
                                            className={`p-2 rounded-full transition-colors duration-300 ${viewMode === 'grid' ? 'bg-white/30' : 'hover:bg-white/20'}`}
                                        >
                                            <Grid3X3 className="w-5 h-5" />
                                        </button>
                                        <button
                                            onClick={() => setViewMode('list')}
                                            className={`p-2 rounded-full transition-colors duration-300 ${viewMode === 'list' ? 'bg-white/30' : 'hover:bg-white/20'}`}
                                        >
                                            <List className="w-5 h-5" />
                                        </button>
                                    </div>
                                </div>
                            </div>

                            {/* Products List */}
                            <div className="p-6 overflow-y-auto" style={{ maxHeight: 'calc(90vh - 200px)' }}>
                                {getProductsByCategory(selectedCategory).length > 0 ? (
                                    <div className={viewMode === 'grid' ? 'grid md:grid-cols-2 lg:grid-cols-3 gap-4' : 'space-y-3'}>
                                        {getProductsByCategory(selectedCategory).map((product) => (
                                            <ProductCard
                                                key={product.id}
                                                product={product}
                                                isListView={viewMode === 'list'}
                                            />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="text-center py-12">
                                        <Package className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                                        <p className="text-gray-500">
                                            {searchTerm ? `Tidak ada produk yang cocok dengan "${searchTerm}"` : 'Tidak ada produk tersedia'}
                                        </p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
};