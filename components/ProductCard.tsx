'use client'

import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { ShoppingCart, Star } from 'lucide-react'
import { Product } from '@/lib/types'
import { useAppContext } from '@/app/context/AppContext'

type Props = {
  product: Product
}

export default function ProductCard({ product }: Props) {
  const { addToCart } = useAppContext()
  const [] = React.useState(1)

  const averageRating =
    product.ratings.length > 0
      ? product.ratings.reduce((a, b) => a + b, 0) / product.ratings.length
      : 0

  const handleAddToCart = () => {
    addToCart(product)
  }

  return (
    <div className="w-full max-w-xs bg-white rounded-2xl shadow-md hover:shadow-lg transition-all border border-[#004D98]/10 flex flex-col overflow-hidden group">
      {/* Image */}
      <Link href={`/product/${product.id}`}>
        <div className="relative w-full aspect-[4/3] bg-[#f8f8f8] overflow-hidden">
          <Image
            src={product.image[0]}
            alt={product.title}
            fill
            className="object-contain p-4 transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />

          {/* Discount Badge */}
          {product.offerPrice < product.price && (
            <span className="absolute top-3 left-3 bg-[#DB0030] text-white text-xs font-bold px-2 py-1 rounded-md">
              {Math.round(((product.price - product.offerPrice) / product.price) * 100)}% OFF
            </span>
          )}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-4">
        <p className="uppercase text-[12px] font-medium text-[#004D98] tracking-wide mb-1">
          {product.category}
        </p>

        <Link href={`/product/${product.id}`}>
          <h2 className="font-semibold text-[15px] sm:text-base text-[#0D0D0D] line-clamp-2 hover:text-[#DB0030] transition">
            {product.title}
          </h2>
        </Link>

        {/* Ratings */}
        <div className="flex items-center gap-0.5 mt-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star
              key={i}
              size={14}
              fill={i <= averageRating ? '#DB0030' : '#E0E0E0'} // 🔴 Red stars
              strokeWidth={0}
            />
          ))}
          <span className="text-xs text-[#DB0030] ml-1">
            ({product.ratings.length})
          </span>
        </div>

        {/* Price Section */}
        <div className="mt-auto flex justify-between items-center pt-4">
          <div>
            <p className="text-[#004D98] font-bold text-lg">
              ${product.offerPrice.toLocaleString()}
            </p>
            {product.offerPrice < product.price && (
              <p className="text-gray-400 line-through text-sm">
                ${product.price.toLocaleString()}
              </p>
            )}
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            className="flex items-center cursor-pointer gap-2 px-3 py-2 bg-[#004D98] text-white rounded-md text-sm font-medium hover:bg-[#DB0030] transition active:scale-95"
          >
            <ShoppingCart size={16} />
            Add
          </button>
        </div>
      </div>

      {/* Hover Line Accent */}
      <div className="h-[3px] w-0 bg-[#004D98] group-hover:w-full transition-all duration-300" />
    </div>
  )
}
