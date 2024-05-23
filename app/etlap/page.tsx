"use client"

import React, { useState } from 'react';
import { BURGEREK, DESSZERTEK, KORETEK, SALATAK, SNACKBOX } from '@/constants';
import { motion, AnimatePresence } from 'framer-motion';
import { TfiAngleRight } from "react-icons/tfi";
import Image from 'next/image';

const page = () => {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isSnackBoxOpen, setIsSnackBoxOpen] = useState(false);
  const [isKoretekOpen, setIsKoretekOpen] = useState(false);
  const [isSalatakOpen, setIsSalatakOpen] = useState(false);
  const [isDesszertekOpen, setIsDesszertekOpen] = useState(false);

  // Function to toggle the visibility of the Burger list
  const handleBurgerToggle = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  // Function to toggle the visibility of the Snack Box list
  const handleSnackBoxToggle = () => {
    setIsSnackBoxOpen(!isSnackBoxOpen);
  };

  // Function to toggle the visibility of the Snack Box list
  const handleKoretekToggle = () => {
    setIsKoretekOpen(!isKoretekOpen);
  };


  // Function to toggle the visibility of the Snack Box list
  const handleSalatakToggle = () => {
    setIsSalatakOpen(!isSalatakOpen);
  };


  // Function to toggle the visibility of the Snack Box list
  const handleDesszertekToggle = () => {
    setIsDesszertekOpen(!isDesszertekOpen);
  };


  return (
    <section className='max-container padding-container'>
      <div className='relative'>
        <Image src="/utonallo_logo.svg" priority loading='eager' width={300} height={800} alt='Logo' className='absolute w-[100px] md:w-[200px] lg:w-[300px]'/>
        <Image src="/Etlap_banner2.webp" priority loading='eager' alt='Etlap Banner' width={3000} height={1000}
        className='w-full h-auto'
        />
      </div>
      <div className='flex items-center justify-center flex-col'>
        <Image priority loading='eager' className='absolute lg:w-[800px] w-1/2' src="/etlap_text.svg" alt='Etlap Text' width={800} height={200}/>
      </div>
  
      <div className='mt-[50px] md:mt-[100px]'>
      <div className='my-20'>
        <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
        <h2 className="mb-2 font-semibold text-3xl text-white">Nézze meg az étlapunkat!</h2>
        <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Fedezze fel az ízletes burgereket, széleskörű táljainkat és különleges fogásokat az étlapunkon! Válogasson kínálatunkból és találja meg a kedvencét. Ne várjon tovább, nézze meg menünket most!</p>
      </div>
      {/* Hamburgerek Section */}
      <div className='flex flex-row gap-2 items-center mb-3'>
        <motion.div
            animate={{ rotate: isBurgerOpen ? 90 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-main-yellow"
        >
            <TfiAngleRight />
        </motion.div>
        <h2 className="font-semibold text-xl text-white cursor-pointer" onClick={handleBurgerToggle}>Hamburgerek</h2>
      </div>
        <hr className="h-px my-8 bg-stone-900 border-0"></hr>
      <AnimatePresence>
        {isBurgerOpen && (
          <motion.div
            initial={{ height: 'auto', opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 'auto', opacity: 0}}
            className='flex justify-start items-center py-5 mb-5'
          >
            <div className="grid gap-10 lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 place-items-start">
              {/* Display filtered food items */}
              {BURGEREK.map((etel) => (
                <BurgerItems
                  key={etel.name}
                  ar={etel.ar}
                  name={etel.name}
                  ing={etel.ing}
                  id={etel.id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Snack Box Section */}
      <div className='flex flex-row gap-2 items-center mb-3'>
        <motion.div
            animate={{ rotate: isSnackBoxOpen ? 90 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-main-yellow"
        >
            <TfiAngleRight />
        </motion.div>
      <h2 className="font-semibold text-xl text-white cursor-pointer" onClick={handleSnackBoxToggle}>Snack Box</h2>
      </div>
        <hr className="h-px my-8 bg-stone-900 border-0"></hr>
      <AnimatePresence>
        {isSnackBoxOpen && (
          <motion.div
            initial={{ height: 'atuo', opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 'auto', opacity: 0 }}
            className='flex justify-start items-center'
          >
            <div className="grid gap-10 lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 place-content-evenly">
              {/* Display filtered food items */}
              {SNACKBOX.map((etel) => (
                <SnackBoxItems
                  key={etel.name}
                  ar={etel.ar}
                  name={etel.name}
                  ing={etel.ing}
                  id={etel.id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Koretek Section */}
      <div className='flex flex-row gap-2 items-center mb-3'>
        <motion.div
            animate={{ rotate: isKoretekOpen ? 90 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-main-yellow"
        >
            <TfiAngleRight />
        </motion.div>
      <h2 className="font-semibold text-xl text-white cursor-pointer" onClick={handleKoretekToggle}>Köretek</h2>
      </div>
        <hr className="h-px my-8 bg-stone-900 border-0"></hr>
      <AnimatePresence>
        {isKoretekOpen && (
          <motion.div
            initial={{ height: 'atuo', opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 'auto', opacity: 0 }}
            className='flex justify-start items-center'
          >
            <div className="grid gap-10 lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 place-items-start">
              {/* Display filtered food items */}
              {KORETEK.map((etel) => (
                <SnackBoxItems
                  key={etel.name}
                  ar={etel.ar}
                  name={etel.name}
                  ing={etel.ing}
                  id={etel.id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Salatak Section */}
      <div className='flex flex-row gap-2 items-center mb-3'>
        <motion.div
            animate={{ rotate: isSalatakOpen ? 90 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-main-yellow"
        >
            <TfiAngleRight />
        </motion.div>
      <h2 className="font-semibold text-xl text-white cursor-pointer" onClick={handleSalatakToggle}>Saláták</h2>
      </div>
        <hr className="h-px my-8 bg-stone-900 border-0"></hr>
      <AnimatePresence>
        {isSalatakOpen && (
          <motion.div
            initial={{ height: 'atuo', opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 'auto', opacity: 0 }}
            className='flex justify-start items-center'
          >
            <div className="grid gap-10 lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 place-items-start">
              {/* Display filtered food items */}
              {SALATAK.map((etel) => (
                <SnackBoxItems
                  key={etel.name}
                  ar={etel.ar}
                  name={etel.name}
                  ing={etel.ing}
                  id={etel.id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desszertek Section */}
      <div className='flex flex-row gap-2 items-center mb-3'>
        <motion.div
            animate={{ rotate: isDesszertekOpen ? 90 : 0 }}
            transition={{ duration: 0.1 }}
            className="text-main-yellow"
        >
            <TfiAngleRight />
        </motion.div>
      <h2 className="font-semibold text-xl text-white cursor-pointer" onClick={handleDesszertekToggle}>Desszertek</h2>
      </div>
      <AnimatePresence>
        {isDesszertekOpen && (
          <motion.div
            initial={{ height: 'atuo', opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 'auto', opacity: 0 }}
            className='flex justify-start items-center'
          >
            <div className="grid gap-10 lg:grid-cols-3 py-10 md:grid-cols-2 grid-cols-1 place-items-start">
              {/* Display filtered food items */}
              {DESSZERTEK.map((etel) => (
                <SnackBoxItems
                  key={etel.name}
                  ar={etel.ar}
                  name={etel.name}
                  ing={etel.ing}
                  id={etel.id}
                />
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      </div>
    </section>
  );
};

type EtlapItems = {
  name: string;
  ing: string;
  ar: string;
  id: string;
};

const BurgerItems: React.FC<EtlapItems> = ({ name, ing, ar, id }) => {
  return (
    <a href={`kinalat/${id}`} className='flex flex-col gap-2'>
      <div className='flex gap-5 justify-between'>
        <p className='text-2xl text-main-yellow'>{name}</p>
        <p className='text-xl text-white font-bold'>{ar},-</p>
      </div>
      <div>
        <p className='text-sm text-gray-300 w-full'>{ing}</p>
      </div>
    </a>
  );
};

const SnackBoxItems: React.FC<EtlapItems> = ({ name, ing, ar, id }) => {
  return (
    <a href={`kinalat/${id}`} className='flex flex-col gap-2'>
      <div className='flex gap-5 justify-between'>
        <p className='text-2xl text-main-yellow'>{name}</p>
        <p className='text-xl text-white font-bold'>{ar},-</p>
      </div>
      <div>
        <p className='text-sm text-gray-300'>{ing}</p>
      </div>
    </a>
  );
};

const Koretek: React.FC<EtlapItems> = ({ name, ing, ar, id }) => {
  return (
    <a href={`kinalat/${id}`} className='flex flex-col gap-2'>
      <div className='flex gap-5 justify-between'>
        <p className='text-2xl text-main-yellow'>{name}</p>
        <p className='text-xl text-white font-bold'>{ar},-</p>
      </div>
      <div>
        <p className='text-sm text-gray-300'>{ing}</p>
      </div>
    </a>
  );
};

const Salatak: React.FC<EtlapItems> = ({ name, ing, ar, id }) => {
  return (
    <a href={`kinalat/${id}`} className='flex flex-col gap-2'>
      <div className='flex gap-5 justify-between'>
        <p className='text-2xl text-main-yellow'>{name}</p>
        <p className='text-xl text-white font-bold'>{ar},-</p>
      </div>
      <div>
        <p className='text-sm text-gray-300'>{ing}</p>
      </div>
    </a>
  );
};

const Desszertek: React.FC<EtlapItems> = ({ name, ing, ar, id }) => {
  return (
    <a href={`kinalat/${id}`} className='flex flex-col gap-2'>
      <div className='flex gap-5 justify-between'>
        <p className='text-2xl text-main-yellow'>{name}</p>
        <p className='text-xl text-white font-bold'>{ar},-</p>
      </div>
      <div>
        <p className='text-sm text-gray-300'>{ing}</p>
      </div>
    </a>
  );
};

export default page;
