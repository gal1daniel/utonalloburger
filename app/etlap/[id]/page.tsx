"use client";

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { KINALAT } from '@/constants';
import Link from 'next/link';
import Image from 'next/image';

const Skeleton = () => (
  <div className="animate-pulse">
    <div className="flex flex-col max-w-screen-lg overflow-hidden shadow-sm lg:flex-row sm:mx-auto">
      <div className="relative lg:w-1/2">
        <div className="bg-neutral-900 w-full h-80 lg:h-full"></div>
      </div>
      <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
        <div className='flex items:start md:items-center justify-between md:flex-row flex-col'>
          <div className="h-8 bg-neutral-900 rounded w-3/4 mb-3"></div>
          <div className="h-6 bg-neutral-900 rounded w-1/4 mb-5"></div>
        </div>
        <div className='space-y-3'>
          <div className="h-4 bg-neutral-900 rounded w-full"></div>
          <div className="h-4 bg-neutral-900 rounded w-5/6"></div>
          <div className="h-4 bg-neutral-900 rounded w-4/6"></div>
        </div>
        <div className="h-10 bg-neutral-900 rounded w-1/3 mt-5"></div>
      </div>
    </div>
  </div>
);

const FoodDetail: React.FC = () => {
    const pathname = usePathname();
    const [food, setFood] = useState<any>(null);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        const id = pathname.split('/').pop();
        const foundFood = KINALAT.find(item => item.id === id);
        setFood(foundFood);
        setLoading(false);
    }, [pathname]);

    if (loading) {
        return (
            <section className='max-container padding-container'>
                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <Skeleton />
                </div>
            </section>
        );
    }

    if (!food) {
        return <div>Ez az étel nem található!</div>;
    }

    return (
        <section className='max-container padding-container'>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col max-w-screen-lg overflow-hidden shadow-sm lg:flex-row sm:mx-auto">
                    <div className="relative lg:w-1/2">
                    <Image width={800} height={500} src={food.src} alt={food.name} priority loading='eager' className="object-cover w-full lg:absolute h-80 lg:h-full" />
                    </div>
                    <div className="flex flex-col justify-center p-8 lg:p-16 lg:pl-10 lg:w-1/2">
                    <div className='flex items:start md:items-center justify-between md:flex-row flex-col'>
                        <h5 className="mb-3 text-3xl font-extrabold leading-none sm:text-4xl text-main-yellow">
                            {food.name}
                        </h5>
                        <p className='text-2xl text-white font-bold pb-5 md:px-4'>{food.ar},-</p>
                    </div>
                    <div className='text-xs md:text-lg'>
                        <p className="mb-5 text-gray-300 md:text-sm text-xs">{food.ing}</p>
                        <hr className="h-px mb-5 bg-gray-700 border-0"></hr>
                        <p className='mb-5 text-white'>{food.description}</p>
                    </div>
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