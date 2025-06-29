'use client';
import Image from 'next/image';
import { motion } from 'framer-motion';
import ProductAppbar from '@/components/ProductAppbar';
import BookingButton from '@/components/BookingButoon';
import WhatsappButton from '@/components/WhatsAppIntegration';

export default function Home() {
    return (
        <div className="bg-green-100 min-h-screen font-sans overflow-x-hidden">
            <ProductAppbar heading={'Wallpaint'} />
            {/* Hero Section */}
            <section className="relative text-center py-32 bg-gradient-to-r from-green-700 to-teal-800 text-white overflow-hidden flex flex-col items-center justify-center">
                <div className="absolute inset-0 bg-black opacity-20"></div>
                <motion.div
                    className="relative z-10 max-w-5xl text-center"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-6xl md:text-9xl font-extrabold drop-shadow-lg animate-fadeIn">
                        Transform Your Space
                    </h1>
                    <p className="mt-6 text-2xl md:text-3xl opacity-90">Professional painters to bring your vision to life.</p>
                </motion.div>
            </section>

            {/* Features Section */}
            <section className="py-24 px-6 md:px-20 bg-white text-center">
                <h2 className="text-6xl font-bold text-green-900">Why Choose Us?</h2>
                <div className="grid md:grid-cols-3 gap-12 mt-16">
                    {['Expert Painters', 'End-to-End Management', 'Budget-Friendly'].map((feature, index) => (
                        <motion.div
                            key={index}
                            className="p-12 bg-white backdrop-blur-xl shadow-2xl rounded-3xl text-center hover:shadow-3xl transform hover:scale-105 transition-all duration-300 border border-green-300"
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <h3 className="text-4xl font-semibold text-green-900">{feature}</h3>
                            <p className="mt-4 text-lg text-gray-700">{index === 0 ? 'Certified and experienced professionals.' : index === 1 ? 'We handle everything from consultation to final touch-ups.' : 'Quality service without breaking the bank.'}</p>
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Gallery Section */}
            <section className="py-24 bg-gradient-to-r from-green-100 to-green-200 px-6 md:px-20 text-center">
                <h2 className="text-6xl font-bold text-green-900">Our Recent Projects</h2>
                <div className="grid md:grid-cols-3 gap-10 mt-16">
                    {['/Wallpaint/wallpaint2.jpg', '/Wallpaint/wallpaint20.jpg', '/Wallpaint/wallpaint8.jpg'].map((src, index) => (
                        <motion.div key={index} initial={{ opacity: 0, scale: 0.8 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5, delay: index * 0.3 }}>
                            <Image src={src} width={500} height={350} alt="Paint Work" className="rounded-2xl shadow-2xl hover:scale-105 transition-transform duration-300" />
                        </motion.div>
                    ))}
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-24 px-6 md:px-20 bg-white text-center">
                <h2 className="text-6xl font-bold text-green-900">Happy Clients</h2>
                <div className="grid md:grid-cols-2 gap-12 mt-16">
                    {[{ name: 'Rahul Verma', review: 'Incredible experience! The team was professional and on time.' }, { name: 'Sneha Kapoor', review: 'My house looks brand new. Highly recommended!' }].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white backdrop-blur-xl p-12 shadow-2xl rounded-3xl border-l-8 border-green-600 hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                            initial={{ opacity: 0, x: -50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: index * 0.3 }}
                        >
                            <p className="text-gray-700 italic text-lg">"{testimonial.review}"</p>
                            <h4 className="mt-6 font-semibold text-2xl text-green-900">- {testimonial.name}</h4>
                        </motion.div>
                    ))}
                </div>
            </section>

            <div className="fixed bottom-0 left-0 w-full bg-gray-100 shadow-md text-white text-center p-4 z-[1000]">
                <BookingButton />
            </div>

            {/* WhatsApp Button Above Booking Button */}
            <div className="fixed bottom-20 right-5 z-[1100]">
                <WhatsappButton />
            </div>

        </div>
    );
}
