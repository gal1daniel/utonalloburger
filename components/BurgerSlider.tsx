"use client"

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { BURGEREK } from '@/constants'
import { Autoplay } from 'swiper/modules';


import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay';
import Image from 'next/image';

const BurgerSlider = () => {
  return (
    <section className='max-container padding-container lg:mt-40 mt-20'>
        <div className='my-20'>
            <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
            <h2 className="mb-2 font-semibold text-3xl text-white">Vendégeink kedvence!</h2>
            <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        spaceBetween: 50,
                        slidesPerView: 1,
                    },
                    640: { // Tailwind 'sm' breakpoint
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: { // Tailwind 'md' breakpoint
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: { // Tailwind 'lg' breakpoint
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 1000, // 2 seconds delay
                    disableOnInteraction: false,
                }}
                loop={true} // Enable loop
                modules={[Autoplay]}
            >
                {BURGEREK.map((etel) => (
                    <SwiperSlide key={etel.id}>
                        <div>
                            <BurgerCard
                                src={etel.src}
                                name={etel.name}
                                desc={etel.description}
                                id={etel.id}
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

type EtlapItems = {
    name: string;
    desc: string;
    src: string;
    id: string;
  };
  
  const BurgerCard: React.FC<EtlapItems> = ({ name, desc, src, id }) => {
    return (
      <a href={`kinalat/${id}`}  className="max-w-sm rounded overflow-hidden shadow-lg">
      <Image width={1200} height={500} className="w-full h-auto" priority loading='eager' src={src} alt={name} />  
      <div className="py-4">
        <div className="font-bold text-xl mb-2 text-white">{name}</div>
        <p className="text-gray-300 text-xs">
          {desc}
        </p>
      </div>
    </a>
    );
  };

export default BurgerSlider