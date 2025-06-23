import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";

const Appbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Scroll detect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Scroll lock when mobile menu is open
    useEffect(() => {
        if (menuOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [menuOpen]);

    // Click outside to close menu
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent | TouchEvent) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target as Node)
            ) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
            document.addEventListener("touchstart", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
            document.removeEventListener("touchstart", handleClickOutside);
        };
    }, [menuOpen]);

    const toggleMenu = () => setMenuOpen(!menuOpen);
    const closeMenu = () => setMenuOpen(false);

    return (
        <nav
            className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 backdrop-blur-md ${isScrolled ? "bg-white/90 text-black shadow" : "bg-transparent text-white"
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                <Link href={"/"}>
                    <Image
                        src={"/new-logo.png"}
                        alt={"tulsi log"}
                        height={60}
                        width={60}
                    />
                </Link>

                {/* Desktop nav */}
                <ul className="hidden sm:flex space-x-6 text-gray-600 text-xl font-semibold">
                    <li className="hover:underline cursor-pointer">Home</li>
                    <li className="hover:underline cursor-pointer">Service</li>
                    <li className="hover:underline cursor-pointer">Login</li>
                </ul>

                {/* Mobile toggle */}
                <button className="sm:hidden focus:outline-none" onClick={toggleMenu}>
                    {menuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* Mobile menu (click outside will close) */}
            <div
                ref={menuRef}
                className={`sm:hidden px-4 pt-2 pb-4 transition-all duration-300 ease-in-out overflow-hidden ${menuOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                    }`}
            >
                <ul className="flex flex-col space-y-2 text-sm font-medium">
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">Home</li>
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">About</li>
                    <li onClick={closeMenu} className="hover:underline cursor-pointer">Contact</li>
                </ul>
            </div>
        </nav>
    );
};

export default Appbar;
