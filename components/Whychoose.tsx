"use client"

import { motion } from "framer-motion"

export default function Page() {
    return (
        <section className="py-24 px-6 md:px-20 bg-gradient-to-r from-green-100 to-green-200 text-center" >
            <h2 className="text-6xl font-bold text-green-900">Why Choose Us?</h2>
            <div className="grid md:grid-cols-3 gap-12 mt-16">
                {['Expert Professional', 'End-to-End Management', 'Budget-Friendly'].map((feature, index) => (
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
        </section >
    )
}