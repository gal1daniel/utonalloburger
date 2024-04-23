"use client"; // Enable client-side JavaScript

import React from 'react';
import { usePathname} from 'next/navigation';
import { KINALAT } from '@/constants';
import Link from 'next/link';

const FoodDetail: React.FC = () => {
    const pathname = usePathname();
    
    const id = pathname.split('/').pop();


    const food = KINALAT.find(item => item.id === id);

    if (!food) { // ADD NOT FOUND COMPONENT
        return <div>Food item not found!</div>;
    }

    return (
        <section className='max-container padding-container'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                    <img src={food.src} alt={food.name} className="object-cover w-full lg:absolute h-80 lg:h-full" />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
                    <div className='flex items-center justify-between'>
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-main-yellow">
                            {food.name}
                        </h5>
                        <p className='text-2xl text-white font-bold px-4'>{food.ar},-</p>
                    </div>
                    <p className="mb-5 text-gray-300 text-sm">{food.ing}</p>
                    <hr className="h-px mb-5 bg-gray-700 border-0"></hr>
                    <p className='mb-5 text-white'>{food.description}</p>
                    <div className="flex items-center">
                    <Link href="/etlap" className='bg-yellow-300 py-2 px-8 font-medium text-main-black rounded-2xl'>Étlap</Link>
                    </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FoodDetail;
