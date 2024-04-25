"use client"

import React, { useState, useRef, useEffect } from 'react';
import { KINALAT } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Kinalat = () => {
    // State variables for search query and category
    const [query, setQuery] = useState('');
    const [category, setCategory] = useState('');
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    // Reference for the dropdown menu container
    const dropdownRef = useRef<HTMLDivElement | null>(null);

    // Filter function to combine category and search query
    const filteredKinalat = KINALAT.filter(etel => {
        const matchesCategory = category ? etel.category === category : true;
        const matchesQuery = etel.name.toLowerCase().includes(query.toLowerCase()) || etel.ing.toLowerCase().includes(query.toLowerCase());
        return matchesCategory && matchesQuery;
    });

    // Function to toggle dropdown menu visibility
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };

    // Function to handle category selection
    const handleCategorySelect = (selectedCategory: string): void => {
        setCategory(selectedCategory);
        setIsDropdownOpen(false);
    };

    // Event handler to close the dropdown menu when clicking outside of it
    const handleClickOutside = (event: MouseEvent) => {
        // Check if the click was outside the dropdown
        if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
            setIsDropdownOpen(false);
        }
    };

    // Add event listener to close dropdown when clicking outside
    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);

        // Cleanup event listener
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    

    return (
        <section className="max-container padding-container">
            <div className='relative'>
                <Image src="/utonallo_logo.svg" width={300} height={800} alt='Logo' priority loading='eager' className='absolute w-[100px] md:w-[200px] lg:w-[300px]'/>
                <Image src="/Kinalat_banner2.webp" alt='Kinalat Banner'  loading='eager' width={3000} height={1000}
                className='w-full h-auto'
                />
            </div>
            <div className='flex items-center justify-center flex-col'>
                <Image className='absolute lg:w-[800px] w-1/2' src="/kinalat_text.svg" alt='Etlap Text' priority loading='eager' width={800} height={200}/>
            </div>

            <div className="flex justify-center flex-col m-5 text-white mt-20 lg:mt-40">
                <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
                <h2 className="mb-2 font-semibold text-3xl">Nézze meg kínálatunkat!</h2>
                <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Válogasson és nézze meg összes kínálatunkat! Találja meg kedvencét az étlapunkon, és élvezze a gasztronómiai élményt nálunk!</p>

                <div className='flex flex-col lg:flex-row gap-3 w-full mt-5'>
                    <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            onChange={e => setQuery(e.target.value)}
                            className="search block p-4 pl-10 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300"
                            placeholder="Mit keres?"
                            required
                        />
                    </div>

                    {/* Dropdown button */}
                    <div className="relative inline-flex" ref={dropdownRef}>
                        <button
                            onClick={toggleDropdown}
                            className="select-none rounded-lg bg-transparent border py-3 px-6 text-center align-middle font-sans text-sm uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        >
                            <span className="flex items-center gap-5">
                                {category || 'Összes'}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    fill="white"
                                    className="bi bi-chevron-down ml-2"
                                    viewBox="0 0 16 16"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                                    />
                                </svg>
                            </span>
                        </button>

                        {isDropdownOpen && (
                            <ul
                                role="menu"
                                className="absolute left-0 top-full mt-2 w-44 bg-white rounded-lg shadow-lg text-black z-10"
                            >
                                {/* Dropdown options */}
                                <li
                                    role="menuitem"
                                    className="py-2 px-4 hover:bg-yellow-200 cursor-pointer rounded-lg"
                                    onClick={() => handleCategorySelect('')}
                                >
                                    Összes
                                </li>
                                <li
                                    role="menuitem"
                                    className="py-2 px-4 hover:bg-yellow-200 cursor-pointer"
                                    onClick={() => handleCategorySelect('burger')}
                                >
                                    Burger
                                </li>
                                <li
                                    role="menuitem"
                                    className="py-2 px-4 hover:bg-yellow-200 cursor-pointer"
                                    onClick={() => handleCategorySelect('snackbox')}
                                >
                                    Snack Box
                                </li>
                                <li
                                    role="menuitem"
                                    className="py-2 px-4 hover:bg-yellow-200 cursor-pointer"
                                    onClick={() => handleCategorySelect('köret')}
                                >
                                    Köret
                                </li>
                                <li
                                    role="menuitem"
                                    className="py-2 px-4 hover:bg-yellow-200 cursor-pointer"
                                    onClick={() => handleCategorySelect('saláta')}
                                >
                                    Saláta
                                </li>
                                <li
                                    role="menuitem"
                                    className="py-2 px-4 hover:bg-yellow-200 cursor-pointer rounded-lg"
                                    onClick={() => handleCategorySelect('desszert')}
                                >
                                    Desszert
                                </li>
                            </ul>
                        )}
                    </div>
                </div>
            </div>

            <div className="grid gap-10 lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 place-items-center">
                {/* Display filtered food items */}
                {filteredKinalat.map((etel) => (
                    <KinalatCard
                        key={etel.id}
                        name={etel.name}
                        ing={etel.ing}
                        src={etel.src}
                        id={etel.id}
                    />
                ))}
            </div>
        </section>
    );
};

type KinalatCardProps = {
    name: string;
    ing: string;
    src: string;
    id: string;
};

const KinalatCard: React.FC<KinalatCardProps> = ({ name, ing, src, id }) => {

    return (
        <div id='foodcards' className="max-w-sm p-5 rounded-lg transform transition">
            <Link href={`/kinalat/${id}`}>
                <picture className='rounded-t-lg overflow-hidden block'>
                    <Image width={300} height={300} className="hover:scale-110 ease-in duration-150" src={src} alt={name} />
                </picture>
            </Link>
            <div className="mt-5">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
                <p className="mb-3 font-normal text-xs text-gray-300">{ing}</p>
            </div>
        </div>
    );
};

export default Kinalat;
