import Link from 'next/link'
import React from 'react'

const MenuPromotion = () => {
  return (
    <section id='menupromo' className='max-container padding-container'>
        <div className='my-10 md:my-20 bg-[url("/optimized_etelek/Hasab.webp")] bg-cover bg-center p-8 text-white'>
            <div className='max-w-lg'>
                <p className='text-4xl md:text-6xl font-bold uppercase leading-snug my-5'>
                    Burger<br/>
                    BURGONYA<br/>
                    ÜDÍTŐ<span className='text-main-yellow'> -10%</span>
                </p>
                <Link href="/etlap" className='bg-yellow-300 py-2 px-8 font-medium text-main-black rounded-2xl'>Kínálatunk</Link>
            </div>
        </div>
    </section>
  )
}

export default MenuPromotion