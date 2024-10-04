import React from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const NotFound = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-grow flex items-center justify-center">
        <section className="text-center px-4">
          <h1 className="text-6xl font-bold text-main-yellow mb-4">404</h1>
          <h2 className="text-3xl font-semibold text-white mb-4">Az oldal nem található</h2>
          <p className="text-xl text-white mb-8">Sajnáljuk, de a keresett oldal nem létezik vagy eltávolították.</p>
          <a href="/" className="bg-main-yellow hover:bg-main-yellow font-bold py-2 px-4 rounded transition duration-300">
            Vissza a főoldalra
          </a>
        </section>
      </main>
    </div>
  )
}

export default NotFound