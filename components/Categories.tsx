"use client"

import { categories } from '@/lib/categories'
import Image from 'next/image'
import Link from 'next/link'
import { Lobster_Two } from 'next/font/google'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

export default function Categories() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: '-100px 0px' })

  return (
    <main ref={sectionRef} className='mt-20 sm:mt-24 md:mt-32 lg:mt-40'>
      <h1
        className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8`}
      >
        Available Brands
      </h1>

      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6'>
        {categories.map((cat, index) => (
          <motion.div
            key={cat.path}
            className='group cursor-pointer py-4 px-2 gap-2 rounded-lg flex flex-col justify-center items-center'
            initial={{ opacity: 0, y: 30 }} // Start hidden and below
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} // Trigger animation when in view
            transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger the animations
          >
            <Link href={`/categories/${cat.path}`}>
              <Image
                src={cat.image}
                alt={cat.text}
                width={200}
                height={120}
                className='object-contain group-hover:scale-105 transition-all duration-300 ease-in-out'
              />
              <p className='text-lg font-semibold'>{cat.text}</p>
            </Link>
          </motion.div>
        ))}
      </div>
    </main>
  )
}
