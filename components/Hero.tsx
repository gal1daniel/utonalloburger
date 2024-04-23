import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <section className='padding-container max-container'>
        <div className='relative'>
            <Image src="/utonallo_logo.svg" width={300} height={800} alt='Logo' className='absolute w-[100px] md:w-[200px] lg:w-[300px]'/>
            <Image src="/Hero_banner2.png" alt='Kinalat Banner' width={3000} height={1000}
            className='w-full h-auto'
            />
        </div>
        <div className='flex items-center justify-center flex-col'>
            <Image className='absolute lg:w-[800px] w-1/2' src="/hero_text.svg" alt='Etlap Text' width={800} height={200}/>
        </div>
    </section>  
  )
}

export default Hero