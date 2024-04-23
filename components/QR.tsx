import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const QR = () => {
  return (
    <section className='max-container padding-container md:pt-[100px]'>
        <div className='my-20 w-full py-0 md:py-20 bg-darker-black rounded-2xl flex flex-col md:flex-row gap-4 p-6'>

            <div className='relative w-full md:w-1/2 flex items-center justify-center'>
                <div className='hidden md:flex absolute -right-40'>
                    <Image
                        src="/phone2.png"
                        alt='iphone'
                        width={500}
                        height={400}
                        className='w-8/12 h-auto'
                    />
                </div>
            </div>


            <div className='w-full md:w-1/2 flex flex-col justify-center'>
                <p className='text-3xl text-white mb-4 font-bold'>OLVASD BE A <span className='text-main-yellow'>QR KÓDUNK</span> ÉS NÉZD MEG AZ <span className='text-main-yellow'>ÉTLAPOT</span>!</p>
                <p className='text-gray-300 mb-6'><span className='text-white font-bold'>Lorem Ipsum</span> is simply dummy text of the printing and typesetting industry. Lorem Ipsum <span className='text-white font-bold'>has been the industry's standard</span> dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                <Link href="/kinalat" className='text-center bg-yellow-300 py-2 px-8 font-medium text-main-black rounded-2xl'>Kínálatunk</Link>
                <div className='flex justify-center md:hidden pt-10'>
                    <Image
                        src="/phone_mobile.png"
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