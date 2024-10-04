import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const QR = () => {
  return (
    <section className='max-container padding-container md:pt-[100px]'>
        <div className='relative my-20 w-full py-0 md:py-10 bg-darker-black jusity-center flex flex-col md:flex-row gap-4 p-6'>

            <div className='w-full md:w-1/2 flex items-center justify-end'>
                <div className='hidden md:flex absolute'>
                    <Image
                        src="/phone2.webp"
                        alt='iphone'
                        width={800}
                        height={400}
                        className='w-8/12 h-auto'
                    />
                </div>
            </div>


            <div className='w-full md:w-1/2 flex flex-col justify-center xl:pr-[190px]'>
                <p className='text-3xl text-white mb-4 font-bold'>OLVASD BE A <span className='text-main-yellow'>QR KÓDUNK</span> ÉS NÉZD MEG AZ <span className='text-main-yellow'>ÉTLAPOT</span>!</p>
                <p className='text-gray-300 mb-6'>Szeretnél betekintést nyerni az ízletes kínálatunkba? Olvasd be<span className='text-white font-bold'> QR kódunka</span> és fedezd fel az egyedülálló menünket! Különleges<span className='text-white font-bold'> BURGEREK, SNACK BOXOK, SALÁTÁK, DESSZERTEK ÉS ITALOK</span> várnak rád. Ne hagyd ki ezt az élményt, nézd meg még ma!</p>
                <Link href="/etlap" className='text-center bg-yellow-300 py-2 px-8 font-medium text-main-black rounded-2xl'>Kínálatunk</Link>
                <div className='flex justify-center md:hidden pt-10'>
                    <Image
                        src="/phone_mobile.webp"
                        alt='iphone'
                        width={500}
                        height={400}
                        className='w-9/12 h-auto'
                    />
                </div>
            </div>
        </div>
    </section>

  )
}

export default QR