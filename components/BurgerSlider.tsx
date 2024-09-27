"use client"

import React from 'react'
import {Swiper, SwiperSlide} from 'swiper/react'
import { KINALAT } from '@/constants'
import { Autoplay } from 'swiper/modules';

import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/autoplay';
import Image from 'next/image';

const SpecialsSlider = () => {
  const specials = KINALAT.filter(item => 
    ['Cordon Bleu', 'Trió Box', 'Gourmet Kacsa Burger', 'Röffencs Burger', 'Gyros Pita', 'Vega Pita', 'Nachos A Moziból!']
    .includes(item.name)
  );

  return (
    <section className='max-container padding-container lg:mt-40 mt-20'>
        <div className='my-20'>
            <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
            <h2 className="mb-2 font-semibold text-3xl text-white">Őszi - Téli Specialitások!</h2>
            <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Fedezze fel válogatott specialitásainkat! A klasszikus ízektől az izgalmas újdonságokig, minden fogásunk gondosan összeállított, hogy a hideg napokban is felejthetetlen gasztronómiai élményt nyújtson.</p>
        </div>
        <div>
            <Swiper
                breakpoints={{
                    320: {
                        spaceBetween: 50,
                        slidesPerView: 1,
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    768: {
                        slidesPerView: 3,
                        spaceBetween: 30,
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 40,
                    },
                }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                modules={[Autoplay]}
            >
                {specials.map((item) => (
                    <SwiperSlide key={item.id}>
                        <FoodCard
                            src={item.src}
                            name={item.name}
                            desc={item.description}
                            id={item.id}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    </section>
  )
}

type FoodCardProps = {
    name: string;
    desc: string;
    src: string;
    id: string;
};

const FoodCard: React.FC<FoodCardProps> = ({ name, desc, src, id }) => {
    return (
      <a href={`etlap/${id}`} className="block max-w-sm rounded overflow-hidden shadow-lg">
        <div className="relative w-full h-48"> {/* Fixed height container */}
          <Image 
            width={300}
            height={200}
            className="object-cover w-full h-full"
            src={src}
            alt={name}
            priority
          />
        </div>
        <div className="py-4">
          <div className="font-bold text-xl mb-2 text-white">{name}</div>
          <p className="text-gray-300 text-xs">
            {desc}
          </p>
        </div>
      </a>
    );
};

export default SpecialsSlider