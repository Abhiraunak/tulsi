import React from 'react';
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-gradient-to-l from-[#4b5563] via-[#22c55e] to-[#4ade80] text-white">
            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Logo and Description */}
                    <div>
                        <div className="flex items-center mb-6">
                            <div className="bg-white rounded-lg p-2 mr-4">
                                <Link href={"/"}>
                                    <Image
                                        src={"/new-logo.png"}
                                        alt={"tulsi log"}
                                        height={60}
                                        width={60}
                                    />
                                </Link>
                            </div>
                            <h2 className="text-2xl font-bold">Tulsi </h2>
                        </div>
                        <p className="mb-6 opacity-90">
                            Transforming spaces with premium interior solutions. We bring your vision to life with craftsmanship and attention to detail.
                        </p>
                        <div className="flex space-x-4">
                            <a className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                                <FaFacebook size={18} />
                            </a>
                            <a className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                                <FaInstagram size={18} />
                            </a>
                            <a className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                                <FaTwitter size={18} />
                            </a>
                            <a className="bg-white/20 p-2 rounded-full hover:bg-white/30 transition">
                                <FaLinkedin size={18} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white/30 inline-block">Quick Links</h3>
                        <ul className="space-y-3">
                            <li><a href="#" className="opacity-90 hover:opacity-100 hover:underline transition">Home</a></li>
                            <li><a href="#" className="opacity-90 hover:opacity-100 hover:underline transition">About Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white/30 inline-block">Our Services</h3>
                        <ul className="space-y-3">
                            <li><a href="/wallpanel" className="opacity-90 hover:opacity-100 hover:underline transition">Wall Panels</a></li>
                            <li><a href="/falsecelling" className="opacity-90 hover:opacity-100 hover:underline transition">False Ceiling</a></li>
                            <li><a href="/wallpaint" className="opacity-90 hover:opacity-100 hover:underline transition">Wall Painting</a></li>
                            <li><a href="/flooring" className="opacity-90 hover:opacity-100 hover:underline transition">Flooring</a></li>
                            <li><a href="/wallpaper" className="opacity-90 hover:opacity-100 hover:underline transition">Wallpaper</a></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-xl font-semibold mb-6 pb-2 border-b-2 border-white/30 inline-block">Contact Us</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <FaMapMarkerAlt className="mt-1 mr-3 text-green-300" />
                                <span>Patna</span>
                            </li>
                            <li className="flex items-center">
                                <FaPhone className="mr-3 text-green-300" />
                                <span>+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <FaEnvelope className="mr-3 text-green-300" />
                                <span>hellotulsiofficial@gmail.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Copyright */}
                <div className="border-t border-white/20 mt-16 pt-8 text-center opacity-80">
                    <p>© {new Date().getFullYear()} Tulsi. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;