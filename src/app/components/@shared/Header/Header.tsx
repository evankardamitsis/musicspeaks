'use client';

import React, {useEffect, useState} from 'react';
import { Transition } from '@headlessui/react';
import Logo from '@/app/components/@shared/Logo';
import Hamburger from '@/app/components/@shared/BurgerIcon/Hamburger';
import Link from "next/link";

const Header: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    const toggleMenu = () => {
        setIsOpen((prev) => !prev);
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 10) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <header
            className={`sticky top-0 z-50 transition-colors duration-300 ${
                isScrolled ? 'bg-white/80 backdrop-blur-md shadow-md rounded-full' : 'bg-transparent rounded-full'
            }`}
        >
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-4">
                <div className="flex justify-between items-center h-16">
                    {/* Left Section (Blog Link) */}
                    <div className="hidden md:flex flex-1 justify-start ml-4">
                        <a
                            href="/blog"
                            className="text-black relative group font-bold text-sm transform transition-transform duration-300 ease-in-out hover:scale-105"
                        >
                            blog
                            <span
                                className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 via-black to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                        </a>
                    </div>

                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center justify-center">
                        <Link href="/" className="text-black text-xl font-bold">
                            <Logo/>
                        </Link>
                    </div>

                    {/* Right Section (Menu Items) */}
                    <div className="hidden md:flex flex-1 justify-end space-x-8 mr-4">
                        {['about', 'services', 'contact'].map((item) => (
                            <a
                                key={item}
                                href={`/${item}`}
                                className="text-black relative group font-bold text-sm transform transition-transform duration-300 ease-in-out hover:scale-105"
                            >
                                {item}
                                <span
                                    className="absolute left-0 bottom-0 w-full h-[2px] bg-gradient-to-r from-yellow-500 via-black to-yellow-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 ease-in-out"></span>
                            </a>
                        ))}
                    </div>

                    {/* Hamburger Menu */}
                    <div className="flex md:hidden">
                        <Hamburger isOpen={isOpen} onToggle={toggleMenu}/>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <Transition
                show={isOpen}
                enter="transform transition-all duration-700 ease-in-out"
                enterFrom="opacity-0 "
                enterTo="opacity-100 "
                leave="transform transition-all duration-700 ease-in-out"
                leaveFrom="opacity-100 "
                leaveTo="opacity-0"
            >
                <div
                    className="md:hidden fixed inset-0 bg-yellow-300 flex flex-col items-center justify-center space-y-8 h-screen ">
                    {['blog', 'about', 'services', 'contact'].map((item) => (
                        <a
                            key={item}
                            href={`/${item}`}
                            className="text-black text-2xl font-semibold relative group"
                            onClick={() => setIsOpen(false)}
                        >
                            {item}
                        </a>
                    ))}
                </div>
            </Transition>
        </header>
    );
};

export default Header;
