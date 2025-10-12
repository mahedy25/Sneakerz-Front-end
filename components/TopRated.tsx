"use client"

import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/dummyProducts'
import { Lobster_Two } from 'next/font/google'
import { motion } from 'framer-motion'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

export default function TopRated() {
  // Filter products that are in stock
  const topRatedProducts = products
    .filter((product) => product.instock.trim().toLowerCase() === 'true') // Ensure the product is in stock
    .sort((a, b) => {
      const averageRatingA = a.ratings.reduce((sum, rating) => sum + rating, 0) / a.ratings.length
      const averageRatingB = b.ratings.reduce((sum, rating) => sum + rating, 0) / b.ratings.length
      return averageRatingB - averageRatingA // Sort by highest rating first
    })

  // Only take the top 4 products
  const top4RatedProducts = topRatedProducts.slice(0, 4)

  return (
    <main className="mt-20 sm:mt-24 md:mt-32 lg:mt-40 px-4">
      <h1 className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-8`}>
        Top Rated Products
      </h1>

      {top4RatedProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {top4RatedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              className="w-full"
              initial={{ opacity: 0, y: 30 }} // Start with hidden and below
              whileInView={{ opacity: 1, y: 0 }} // Animate to normal position when in view
              transition={{ delay: index * 0.1, duration: 0.5 }} // Stagger animations
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is in view
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500 text-lg mt-10">No top-rated products found.</p>
      )}
    </main>
  )
}
