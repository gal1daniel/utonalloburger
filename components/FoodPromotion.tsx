import React from 'react'

const FoodPromotion = () => {
  return (
    <section className='max-container padding-container'>
        <div className='my-20'>
            <div className="w-[100px] h-[2px] bg-yellow-300 mb-2" />
            <h2 className="mb-2 font-semibold text-3xl text-white">Amit találsz nálunk!</h2>
            <p className="mb-5 lg:w-1/2 w-full text-xs text-gray-200">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.</p>
        </div>
        <div className='flex flex-col md:flex-row uppercase text-3xl md:text-4xl gap-3'>
            <div className='w-full md:w-1/2 aspect-square'>
                <div className='hover:scale-95 transform transition duration-500 bg-[url("/Promo_Burger.webp")] bg-cover bg-center p-4 text-white aspect-square'>
                    <p className='drop-shadow-md'>Burgerek</p>
                </div>
            </div>

            <div className='w-full md:w-1/2 flex flex-col md:aspect-auto aspect-square'>
                <div className='hover:scale-95 transform transition duration-500 bg-[url("/optimized_etelek/Gyros3.jpg")] bg-cover bg-center p-4 text-white' style={{ height: '50%' }}>
                    <p className='drop-shadow-md'>Snack Box</p>
                </div>
                <div className='hover:scale-95 transform transition duration-500 bg-[url("/optimized_etelek/UtonalloSalata.jpg")] bg-cover bg-center p-4 text-white mt-4' style={{ height: '50%' }}>
                    <p className='drop-shadow-md'>Saláták</p>
                </div>
            </div>
        </div>
    </section>


  )
}

export default FoodPromotion