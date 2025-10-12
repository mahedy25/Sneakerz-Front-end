'use client'

import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { ArrowUp } from 'lucide-react'

export default function Newsletter() {
  const [showTopBtn, setShowTopBtn] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setShowTopBtn(window.scrollY > 300)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <main className="relative my-10">
      <div className="mt-12 sm:mt-16 md:mt-20 lg:mt-32 py-8 px-4 sm:px-8 md:px-12 max-w-4xl bg-white mx-4 sm:mx-auto overflow-hidden shadow-lg rounded-xl flex flex-col md:flex-row">
        {/* Left Side: Text */}
        <div className="flex items-center justify-center bg-[#f8f9fa] rounded-t-xl md:rounded-t-none md:rounded-l-xl p-6">
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#004D98]">
              Stay in the Sneaker Loop 👟
            </h1>
            <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600">
              Get early access to limited drops, exclusive deals, and all things sneakers.
              Be the first to cop the latest heat!
            </p>

            <form className="mt-8 flex flex-col sm:flex-row gap-4 sm:gap-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none rounded-md sm:rounded-l-md sm:rounded-r-none border border-gray-300 p-3 text-gray-900 focus:border-[#004D98] transition"
              />
              <button
                type="submit"
                className="cursor-pointer rounded-md sm:rounded-l-none sm:rounded-r-md bg-[#DB0030] hover:bg-[#FFED02] hover:text-[#004D98] px-6 py-2 font-semibold text-white transition-colors duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="w-full mt-6 md:mt-0">
          <Image
            src="/images/newsletter.jpg"
            alt="newsletter"
            width={600}
            height={600}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500 rounded-xl"
          />
        </div>
      </div>

      {/* Back to Top Button */}
      {showTopBtn && (
        <div className="fixed bottom-6 right-6 z-50">
          <button
            onClick={scrollToTop}
            className="bg-[#DB0030] text-white p-3 rounded-full shadow-lg hover:bg-[#004D98] hover:text-[#FFED02] transition-all duration-300 cursor-pointer"
            aria-label="Back to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      )}
    </main>
  )
}
