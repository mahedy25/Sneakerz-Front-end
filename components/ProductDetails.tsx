'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import ReviewSection from './ratings-review/ReviewSection'
import { products } from '@/lib/dummyProducts'
import ProductCard from './ProductCard'
import { Product } from '@/lib/types'
import { useAppContext } from '@/app/context/AppContext'
import { ArrowLeft } from 'lucide-react'
import { ArrowRight } from 'lucide-react'


type Props = {
  product: Product
}

export default function ProductDetails({ product }: Props) {
  const [thumbnail, setThumbnail] = useState(product.image?.[0] ?? '')
  const { addToCart } = useAppContext()

  const average =
    product.ratings && product.ratings.length > 0
      ? product.ratings.reduce((a, b) => a + b, 0) / product.ratings.length
      : 0

  const relatedProducts = Array.isArray(products)
    ? products.filter(
        (item) => item.category === product.category && item.id !== product.id
      ).slice(0, 4)
    : []

  const descriptionPoints: string[] =
    typeof product.description === 'string'
      ? product.description
          .split('.')
          .map((p) => p.trim())
          .filter(Boolean)
      : []

  const images: string[] = Array.isArray(product.image) ? product.image : []

  return (
    <div className="w-full min-h-screen bg-white text-[#0D0D0D]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Breadcrumb */}
        <p className="text-xs text-gray-400 mb-6">
          <Link href="/" className="hover:underline text-gray-500 cursor-pointer">Home</Link> /
          <Link href="/all-products" className="hover:underline text-gray-500 cursor-pointer">All Products</Link> /
          <Link href={`/categories/${product.category.toLowerCase()}`} className="hover:underline text-gray-500 cursor-pointer">{product.category}</Link> /
          <span className="text-[#004D98] font-medium"> {product.title}</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Images */}
          <div className="flex flex-col md:flex-row gap-4 flex-1">
            {/* Thumbnails */}
            <div className="flex md:flex-col gap-2 overflow-auto md:max-w-[96px]">
              {images.length > 0 ? (
                images.map((img: string, idx: number) => (
                  <div
                    key={`thumb-${idx}`}
                    onClick={() => setThumbnail(img)}
                    className={`border rounded-md overflow-hidden cursor-pointer w-24 h-24 flex-shrink-0 ${
                      thumbnail === img ? 'border-[#DB0030]' : 'border-gray-300'
                    }`}
                  >
                    <Image
                      src={img}
                      alt={`Thumbnail ${idx + 1}`}
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                      quality={100}
                      priority
                    />
                  </div>
                ))
              ) : (
                <div className="text-gray-400">No images available</div>
              )}
            </div>

            {/* Main Image with Arrows */}
            <div className="flex-1 min-h-[300px] sm:min-h-[400px] border border-gray-200 rounded-md overflow-hidden relative flex items-center justify-center">
              {thumbnail ? (
                <>
                  <Image
                    src={thumbnail}
                    alt={product.title}
                    fill
                    className="object-contain"
                    quality={100}
                    priority
                  />

                  {/* Left Arrow */}
                  <button
                    onClick={() => {
                      const currentIndex = images.indexOf(thumbnail)
                      const prevIndex = (currentIndex - 1 + images.length) % images.length
                      setThumbnail(images[prevIndex])
                    }}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-[#004D98] rounded-full p-2 hover:bg-[#DB0030] cursor-pointer shadow"
                  >
                    <ArrowLeft className="text-white" />
                  </button>

                  {/* Right Arrow */}
                  <button
                    onClick={() => {
                      const currentIndex = images.indexOf(thumbnail)
                      const nextIndex = (currentIndex + 1) % images.length
                      setThumbnail(images[nextIndex])
                    }}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#004D98] rounded-full p-2 hover:bg-[#DB0030] cursor-pointer shadow"
                  >
                    <ArrowRight className="text-white" />
                  </button>
                </>
              ) : (
                <div className="flex items-center justify-center h-full text-gray-400">
                  No image
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl sm:text-4xl font-bold mb-3">{product.title}</h1>

            {/* Ratings */}
            <div className="flex items-center gap-1 mb-4">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.294 3.983a1 1 0 0 0 .951.69h4.188c.969 0 1.371 1.24.588 1.81l-3.388 2.46a1 1 0 0 0-.364 1.118l1.295 3.983c.299.921-.756 1.688-1.54 1.118L10.589 13.63a1 1 0 0 0-1.176 0l-3.389 2.46c-.783.57-1.838-.197-1.539-1.118L5.78 10.99a1 1 0 0 0-.363-1.118L2.028 7.41c-.783-.57-.38-1.81.588-1.81h4.188a1 1 0 0 0 .95-.69z"
                    fill={i <= average ? '#DB0030' : '#E0E0E0'}
                  />
                </svg>
              ))}
              <span className="text-xs text-[#DB0030] ml-2">({product.ratings.length} ratings)</span>
            </div>

            {/* Price */}
            <div className="text-lg sm:text-xl font-semibold mb-4">
              <span className="text-[#004D98] cursor-pointer">${product.offerPrice.toLocaleString()}</span>
              {product.offerPrice < product.price && (
                <span className="text-gray-400 line-through ml-2 cursor-pointer">${product.price.toLocaleString()}</span>
              )}
            </div>

            <p className="text-sm text-gray-600 mb-6">(Inclusive of all taxes)</p>

            {/* Description */}
            <h2 className="text-base sm:text-lg font-semibold mb-2">About this Product</h2>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1 mb-8">
              {descriptionPoints.length > 0 ? descriptionPoints.map((point, idx) => (
                <li key={idx}>{point}</li>
              )) : <li>No description available.</li>}
            </ul>

            {/* CTA Buttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              <button
                className="w-full py-3 rounded-md text-sm font-medium bg-[#DB0030] hover:bg-[#B80026] text-white transition cursor-pointer"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
              <button className="w-full py-3 rounded-md text-sm font-medium bg-[#004D98] hover:bg-[#00376b] text-white transition cursor-pointer">
                Buy Now
              </button>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <ReviewSection
          initialRatings={product.ratings}
          initialReviews={product.reviews || []}
        />

        {/* Related Products */}
        <div className="mt-16">
          <h2 className="text-2xl font-semibold mb-6">Related Products</h2>
          <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {relatedProducts.length > 0
              ? relatedProducts.map(p => <ProductCard key={p.id} product={p} />)
              : <p>No related products found.</p>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
