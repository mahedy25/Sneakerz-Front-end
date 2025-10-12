'use client'

import ProductCard from '@/components/ProductCard'
import { products } from '@/lib/dummyProducts'
import { categories } from '@/lib/categories'
import { useSearchParams } from 'next/navigation'
import { Lobster_Two } from 'next/font/google'
import React, { Suspense, useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

function ProductList() {
  const searchParams = useSearchParams()
  const query = searchParams.get('q')?.toLowerCase().trim() || ''

  const allProducts = products.filter(
    (product) => product.instock.trim().toLowerCase() === 'true'
  )

  const filteredProducts = query
    ? allProducts.filter((product) =>
        product.title.toLowerCase().includes(query)
      )
    : allProducts

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1)
  const [sortOption, setSortOption] = useState('default') // New state for sorting
  const productsPerPage = 12

  // Sort products based on the selected sort option
  const sortedProducts = React.useMemo(() => {
    switch (sortOption) {
      case 'price-low-high':
        return [...filteredProducts].sort((a, b) => a.price - b.price)
      case 'price-high-low':
        return [...filteredProducts].sort((a, b) => b.price - a.price)
      case 'rating':
        return [...filteredProducts].sort(
          (a, b) =>
            b.ratings.reduce((sum, r) => sum + r, 0) -
            a.ratings.reduce((sum, r) => sum + r, 0)
        )
      case 'name':
        return [...filteredProducts].sort((a, b) =>
          a.title.localeCompare(b.title)
        )
      default:
        return filteredProducts
    }
  }, [filteredProducts, sortOption])

  // Slice products for the current page
  const paginatedProducts = sortedProducts.slice(
    (currentPage - 1) * productsPerPage,
    currentPage * productsPerPage
  )

  // Calculate total pages
  const totalPages = Math.ceil(sortedProducts.length / productsPerPage)

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleSortChange = (event: {
    target: { value: React.SetStateAction<string> }
  }) => {
    setSortOption(event.target.value)
  }

  return (
    <main className='mt-20 px-4 sm:px-6 xl:px-8 max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-5 gap-8'>
      {/* Sidebar for Categories (Hidden on small screens) */}
      <div className='col-span-1 hidden xl:block'>
        <div className='p-4 bg-white rounded-lg shadow-md'>
          <h2 className='text-2xl font-semibold mb-4'>Categories</h2>
          <div className='flex flex-col gap-4'>
            {categories.map((cat) => (
              <Link
                key={cat.path}
                href={`/categories/${cat.path}`}
                className='flex items-center gap-2 p-2 rounded-md hover:bg-gray-200 transition-all'
              >
                <Image
                  src={cat.image}
                  alt={cat.text}
                  width={40}
                  height={40}
                  className='object-contain'
                />
                <span>{cat.text}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Main Content - Product Listing */}
      <div className='col-span-4'>
        <h1
          className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center mb-6`}
        >
          {query ? `Search Results for "${query}"` : 'All Products'}
        </h1>

        {query && filteredProducts.length === 0 ? (
          <div className='text-center text-gray-600 mb-10'>
            <p className='text-lg font-medium mb-2'>
              No matching results found for &quot;
              <strong>{query}</strong>&quot;
            </p>
            <p className='text-sm mb-4'>
              Showing all available products instead.
            </p>
          </div>
        ) : null}

        {/* Sort Dropdown */}
        <div className='flex justify-end mb-6'>
          <select
            value={sortOption}
            onChange={handleSortChange}
            className='border p-2 rounded-md w-full sm:w-auto text-sm sm:text-base'
          >
            <option value='default'>Sort by</option>
            <option value='price-low-high'>Price: Low to High</option>
            <option value='price-high-low'>Price: High to Low</option>
            <option value='rating'>Rating</option>
            <option value='name'>Name</option>
          </select>
        </div>

        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
          {paginatedProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }} // Start hidden and below
              whileInView={{ opacity: 1, y: 0 }} // Animate to normal position when in view
              transition={{ duration: 0.5 }} // Smooth transition
              viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>

        {/* Pagination controls */}
        <div className='flex justify-center mt-10'>
          <Button
            className='px-4 py-2 text-sm sm:text-base'
            onClick={handlePrevPage}
            disabled={currentPage === 1}
          >
            Prev
          </Button>
          <span className='px-4 py-2 text-lg font-medium'>{`Page ${currentPage} of ${totalPages}`}</span>
          <Button
            className='px-4 py-2 text-sm sm:text-base'
            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </Button>
        </div>
      </div>
    </main>
  )
}

export default function AllProductsClient() {
  return (
    <Suspense fallback={<div className='text-center mt-10'>Loading...</div>}>
      <ProductList />
    </Suspense>
  )
}
