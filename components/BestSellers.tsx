"use client"

import { Lobster_Two } from 'next/font/google'
import ProductCard from './ProductCard'
import { products } from '@/lib/dummyProducts'
import { motion } from 'framer-motion'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

export default function BestSellers() {
  // Get only top 4 in-stock products
  const topInStockProducts = products
    .filter((product) => product.instock.trim().toLowerCase() === 'true')
    .slice(0, 4)

  return (
    <main className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 px-4">
      <h1
        className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8`}
      >
        Best Sellers
      </h1>

      {topInStockProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {topInStockProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-full"
              initial={{ opacity: 0, y: 30 }} // Start with hidden and below
              whileInView={{ opacity: 1, y: 0 }} // Animate to normal position when in view
              transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger animations
              viewport={{ once: true, amount: 0.2 }} // Only trigger when 20% is in view
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No popular in-stock products found.</p>
      )}
    </main>
  )
}
