import Image from 'next/image'
import React from 'react'

const Kapcsolat = () => {
  return (
    <section id='kapcsolat' className='padding-container max-container md:pt-[50px]'>
            <div className='my-20'>
                <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
                <h2 className="mb-2 font-semibold text-3xl text-white">Vedd fel a kapcsolatot!</h2>
                <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Kérdésed vagy észrevételed van? Fordulj hozzánk bizalommal! Írj nekünk e-mailben vagy hívj minket telefonon. Várjuk megkeresésed és segítünk!</p>
            </div>
            <div className='flex flex-col md:flex-row justify-evenly'>
                    <Image src='/Terkep.webp' width={3000} height={3000} alt='Terkep' className='md:w-1/2' />
                <div className='flex justify-between flex-col md:mt-0 mt-5'>
                    <div className='pb-5'>
                        <p className='text-2xl text-main-yellow font-bold'>Telefonszám</p>
                        <p className='text-md text-gray-300'>+36 30 123 2390</p>
                    </div>
                    <div className='pb-5'>
                        <p className='text-2xl text-main-yellow font-bold'>Közösségi</p>
                        <p className='text-md text-gray-300'>/UTONALLOBURGER</p>
                    </div>
                    <div className='pb-5'>
                        <p className='text-2xl text-main-yellow font-bold'>Cím</p>
                        <p className='text-md text-gray-300'>Árpád út HSZ 523/10 Verőce 2621</p>
                    </div>
                    <div className='pb-5'>
                        <p className='text-2xl text-main-yellow font-bold'>Nyitvatartás</p>
                        <p className='text-md text-gray-300'>HÉTFŐ - VASÁRNAP <br />
11:00 - 20:00</p>
                    </div>
                </div>
            </div>
    </section>
  )
}

export default Kapcsolat