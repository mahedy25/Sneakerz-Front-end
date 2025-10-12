"use client"

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Lobster_Two } from 'next/font/google'
import { motion } from 'framer-motion'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

export default function About() {
  return (
    <main className="min-h-screen px-4 sm:px-6 md:px-10 py-12 max-w-7xl mx-auto bg-white text-[#0D0D0D]">
      {/* Page Header */}
      <section className="text-center mb-12">
        <motion.h1
          className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl text-center mb-6`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          About Sneakerz
        </motion.h1>
        <p className="text-gray-700 max-w-2xl mx-auto">
          Welcome to <span className="font-semibold text-[#DB0030]">Sneakerz</span> — your ultimate
          destination for exclusive, high-quality sneakers that combine style, comfort, and performance.
        </p>
      </section>

      {/* Our Story */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-16">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <Image
            src="/images/aboutus.jpg"
            alt="Sneaker showcase"
            width={600}
            height={400}
            className="rounded-lg shadow-lg object-cover border border-[#DB0030]/50"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-[#DB0030] mb-4">Our Story</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Sneakerz was born from a passion for sneakers and streetwear culture. We believe that
            every pair of sneakers tells a story, and our mission is to provide curated collections
            that reflect style, comfort, and authenticity.
          </p>
          <p className="text-gray-700 leading-relaxed">
            From iconic Nike releases to rare Adidas drops, our inventory is hand-selected
            to ensure every sneaker you get is top quality and true to its heritage.
          </p>
        </motion.div>
      </section>

      {/* Why Choose Us */}
      <section className="mb-16">
        <h2 className="text-2xl sm:text-3xl font-bold text-[#DB0030] mb-8 text-center">
          Why Shop With Sneakerz?
        </h2>
        <motion.div
          className="grid md:grid-cols-3 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
        >
          {[ 
            {
              title: 'Curated Collections',
              desc: 'Only the best sneakers, carefully selected for quality and style.',
            },
            {
              title: 'Authenticity Guaranteed',
              desc: 'Every pair is 100% authentic — no fakes, no compromises.',
            },
            {
              title: 'Exclusive Drops',
              desc: 'Get access to limited releases and hard-to-find sneakers.',
            },
            {
              title: 'Fast Shipping',
              desc: 'Reliable delivery so you can rock your sneakers quickly.',
            },
            {
              title: 'Community Vibes',
              desc: 'Join our sneakerhead community and stay updated on trends.',
            },
            {
              title: 'Easy Returns',
              desc: 'Hassle-free returns to make your shopping experience smooth.',
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white rounded-lg p-6 shadow-lg border border-[#DB0030]/40 hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: idx * 0.2 }}
            >
              <h3 className="text-lg font-semibold text-[#DB0030] mb-2">{item.title}</h3>
              <p className="text-gray-700 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Call to Action */}
      <section className="bg-[#004D98] text-white rounded-lg p-10 text-center shadow-2xl">
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-4"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Step Up Your Sneaker Game
        </motion.h2>
        <motion.p
          className="mb-6 text-white/90 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Browse our exclusive sneaker collection and find the perfect pair that matches your
          style and lifestyle.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <Link
            href="/all-products"
            className="bg-[#ffed02] text-[#0D0D0D] px-6 py-3 rounded-full font-semibold hover:bg-[#DB0030] hover:text-white transition"
          >
            Shop Now
          </Link>
        </motion.div>
      </section>
    </main>
  )
}
