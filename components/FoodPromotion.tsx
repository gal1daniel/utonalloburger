import Link from 'next/link'
import React from 'react'

const FoodPromotion = () => {
  return (
    <section className='max-container padding-container'>
        <div className='my-20'>
            <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
            <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Fedezd fel a kreatív burgereinket és "Snack Box" választékainkat, amelyek friss alapanyagokból készülnek! Nálunk minden falat izgalmas és egyedi élményt nyújt.</p>
        </div>
        <Link href="/kinalat" className='flex flex-col md:flex-row uppercase text-3xl md:text-4xl gap-3'>
            <div className='w-full md:w-1/2 aspect-square'>
                <div className='hover:scale-95 transform transition duration-500 bg-[url("/Promo_Burger.webp")] bg-cover bg-center p-4 text-white aspect-square'>
                    <p className='drop-shadow-md'>Burgerek</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex flex-col md:aspect-auto aspect-square'>
                <div className='hover:scale-95 transform transition duration-500 bg-[url("/optimized_etelek/Gyros.webp")] bg-cover bg-center p-4 text-white' style={{ height: '50%' }}>
                    <p className='drop-shadow-md'>Snack Box</p>
                </div>
                <div className='hover:scale-95 transform transition duration-500 bg-[url("/optimized_etelek/UtonalloSalata.webp")] bg-cover bg-center p-4 text-white mt-4' style={{ height: '50%' }}>
                    <p className='drop-shadow-md'>Saláták</p>
                </div>
            </div>
        </Link>
    </section>


  )
}

export default FoodPromotion