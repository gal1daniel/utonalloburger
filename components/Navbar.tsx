"use client";

import React, { useState, useEffect, useRef } from 'react';
import Logo_Title from '../public/title_logo.svg';
import Logo_Title_Black from '../public/title_logo_black.svg';
import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa6';
import { FaFacebook } from 'react-icons/fa';
import Link from 'next/link';

const Navbar = () => {
    // State to control the visibility of the mobile menu
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    // Create a ref to track the mobile menu container
    const mobileMenuRef = useRef(null);

    // Function to handle clicks on links
    const handleLinkClick = () => {
        // Close the mobile menu when a link is clicked
        setIsMobileMenuOpen(false);
    };

    // Function to handle clicks outside of the mobile menu
    const handleClickOutside = (event: MouseEvent) => {
        // Check if the current reference exists and if the event target is outside the mobile menu
        if (mobileMenuRef.current && !(mobileMenuRef.current as HTMLElement).contains(event.target as Node)) {
            // Close the mobile menu
            setIsMobileMenuOpen(false);
        }
    };

    // Add event listener for clicks outside the mobile menu
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // Clean up the event listener when the component is unmounted
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <nav className="">
            <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
                <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
                    {/* Desktop navigation */}
                    <ul className="flex items-center space-x-8 hidden lg:flex">
                        <li>
                            <Link href="/" passHref>
                                <p
                                    aria-label="Kezdőlap"
                                    title="Kezdőlap"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-main-yellow"
                                    onClick={handleLinkClick}
                                >
                                    Kezdőlap
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/etlap" passHref>
                                <p
                                    aria-label="Étlap"
                                    title="Étlap"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-main-yellow"
                                    onClick={handleLinkClick}
                                >
                                    Étlap
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="/kinalat" passHref>
                                <p
                                    aria-label="Kínálat"
                                    title="Kínálat"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-main-yellow"
                                    onClick={handleLinkClick}
                                >
                                    Kínálat
                                </p>
                            </Link>
                        </li>
                    </ul>

                    {/* Company logo */}
                    <a href="/" aria-label="Utonallo" title="Utonallo" className="inline-flex items-center">
                        <Image src={Logo_Title} alt="Utonallo Logo" width={100} height={50} />
                    </a>

                    <ul className="flex items-center space-x-8 hidden lg:flex">
                        <li>
                            <Link href="/#kapcsolat" passHref
                                    onClick={handleLinkClick}
                                    >
                                <p
                                    aria-label="Kapcsolat"
                                    title="Kapcsolat"
                                    className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-main-yellow"
                                >
                                    Kapcsolat
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.facebook.com/utonalloburger" passHref target='_blank'>
                                <p aria-label="Facebook" title="Facebook" className="text-gray-100 transition-colors duration-200 hover:text-main-yellow">
                                    <FaFacebook className="w-6 h-6" />
                                </p>
                            </Link>
                        </li>
                        <li>
                            <Link href="https://www.instagram.com/utonalloburger" passHref target='_blank'>
                                <p aria-label="Instagram" title="Instagram" className="text-gray-100 transition-colors duration-200 hover:text-main-yellow">
                                    <FaInstagram className="w-6 h-6" />
                                </p>
                            </Link>
                        </li>
                    </ul>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            aria-label="Open Menu"
                            title="Open Menu"
                            onClick={() => setIsMobileMenuOpen(true)}
                            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        >
                            <svg className="w-5 text-white" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"></path>
                                <path fill="currentColor" d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"></path>
                                <path fill="currentColor" d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"></path>
                            </svg>
                        </button>

                        {/* Mobile menu dropdown */}
                        {isMobileMenuOpen && (
                            <div
                                ref={mobileMenuRef} // Assign ref to the mobile menu container
                                className="absolute top-0 left-0 w-full bg-white border border-gray-200 rounded shadow-md lg:hidden z-50"
                            >
                                <div className="p-5">
                                    <div className="flex items-center justify-between mb-4">
                                        <div>
                                            <a href="/" aria-label="Utonallo" title="Utonallo" className="inline-flex items-center">
                                                <Image src={Logo_Title_Black} alt="Utonallo Logo" width={100} height={50} />
                                            </a>
                                        </div>
                                        <div>
                                            <button
                                                aria-label="Close Menu"
                                                title="Close Menu"
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            >
                                                <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                    <path fill="currentColor" d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"></path>
                                                </svg>
                                            </button>
                                        </div>
                                    </div>

                                    <nav>
                                        <ul className="space-y-4">
                                            <li>
                                                <Link href="/" passHref>
                                                    <p aria-label="Kezdőlap" title="Kezdőlap" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-main-yellow" onClick={handleLinkClick}>Kezdőlap</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/etlap" passHref>
                                                    <p aria-label="Étlap" title="Étlap" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-main-yellow" onClick={handleLinkClick}>Étlap</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/kinalat" passHref>
                                                    <p aria-label="Kínálat" title="Kínálat" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-main-yellow" onClick={handleLinkClick}>Kínálat</p>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/#kapcsolat" passHref>
                                                    <p aria-label="Kapcsolat" title="Kapcsolat" className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-main-yellow" onClick={handleLinkClick}>Kapcsolat</p>
                                                </Link>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
