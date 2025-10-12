'use client'

import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { slides } from '@/lib/sliders'
import { Button } from './ui/button'
import { Lobster } from 'next/font/google'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })

export default function Hero() {
  return (
    <section className="relative w-full h-[75vh] sm:h-[80vh] md:h-[85vh] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center">
              {/* Left Side: Text and Button */}
              <div className="flex flex-col justify-center items-center sm:items-start px-6 sm:px-12 w-full sm:w-1/2 h-full text-center sm:text-left">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className="text-black"
                >
                  <motion.h1
                    className={` ${lobster.className} text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight text-black bg-clip-text drop-shadow-[0_0_25px_rgba(99,102,241,0.3)]`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.3 }}
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.p
                    className="mt-5 text-lg sm:text-base md:text-lg leading-relaxed"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, delay: 0.5 }}
                  >
                    {slide.description}
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                  >
                    <Link href={slide.link}>
                      <Button className="mt-8">{slide.cta}</Button>
                    </Link>
                  </motion.div>
                </motion.div>
              </div>

              {/* Right Side: Image */}
              <div className="w-full h-[50%] sm:w-1/2 sm:h-full relative">
                <motion.div
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: "easeOut" }}
                  className="w-full h-full"
                >
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    fill
                    className="object-contain object-center"
                    priority
                  />
                </motion.div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Swiper Custom Styling */}
      <style jsx global>{`
        @media (max-width: 768px) {
          .swiper-button-prev,
          .swiper-button-next {
            display: none !important;
          }
        }
        .swiper-pagination-bullet {
          background: #DB0030 !important;
          opacity: 0.5;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          background: #DB0030 !important;
          opacity: 1;
          transform: scale(1.3);
        }
      `}</style>
    </section>
  )
}
