'use client'
import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import { Search, ShoppingCart, Menu, X } from 'lucide-react'
import { Lobster } from 'next/font/google'
import { Button } from './ui/button'
import Image from 'next/image'
import Login from './Login'
import { useAppContext } from '@/app/context/AppContext'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'All', href: '/all-products' },
  { name: 'About', href: '/about' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const pathname = usePathname()
  const router = useRouter()
  const [menuOpen, setMenuOpen] = useState(false)
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  const [showProfileMenu, setShowProfileMenu] = useState(false)
  const [showLoginForm, setShowLoginForm] = useState(false)
  const [searchActive, setSearchActive] = useState(false)

  const profileMenuRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const { cart, searchQuery, setSearchQuery } = useAppContext()

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0)

  const toggleMenu = (type: 'menu' | 'search') => {
    if (type === 'menu') {
      setSearchActive(false)
      setMenuOpen((prev) => !prev)
    } else {
      setMenuOpen(false)
      setSearchActive((prev) => !prev)
    }
  }

  const handleSearch = () => {
    const trimmed = searchQuery.trim()
    if (trimmed) {
      setSearchActive(false)
      router.push(`/all-products?q=${encodeURIComponent(trimmed)}`)
    }
  }

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (profileMenuRef.current && !profileMenuRef.current.contains(e.target as Node)) {
        setShowProfileMenu(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  useEffect(() => {
    if (searchActive && inputRef.current) {
      inputRef.current.focus()
    }
  }, [searchActive])

  return (
    <>
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-[#004D98]/20">
        <main className="flex items-center justify-between px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4">
          {/* Logo */}
          <Link href="/" className={`${lobster.className} text-3xl sm:text-4xl text-[#DB0030] font-bold tracking-wide`}>
            Sneakerz
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center justify-end gap-10 ml-auto w-full">
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => {
                const isActive = pathname === link.href
                return (
                  <Link
                    key={link.name}
                    href={link.href}
                    className={`relative inline-block px-4 py-2 text-md font-semibold uppercase tracking-wide transition-colors duration-300 group ${isActive ? 'text-[#FFED02]' : 'text-[#004D98] hover:text-[#FFED02]'}`}
                  >
                    <span
                      className={`absolute inset-0 -z-10 bg-[#DB0030] rounded-md scale-x-0 origin-left transition-transform duration-300 ease-in-out ${isActive ? 'scale-x-100' : 'group-hover:scale-x-100'}`}
                    />
                    {link.name}
                  </Link>
                )
              })}
            </nav>

            {/* Search Bar */}
            <div className="hidden xl:flex items-center border border-[#004D98]/40 rounded-full px-4 py-2 shadow-sm bg-white relative">
              <input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="w-full bg-transparent outline-none placeholder-gray-400 text-sm px-1 py-0.5 text-[#004D98]"
                type="text"
                placeholder="Search products"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-8 text-gray-500 hover:text-[#DB0030] transition">
                  <X size={18} />
                </button>
              )}
              <button onClick={handleSearch} className="text-[#004D98] hover:text-[#DB0030] transition">
                <Search size={18} />
              </button>
            </div>

            {/* Cart & Profile */}
            <div className="flex items-center gap-6">
              <Link href="/cart">
                <div className="relative cursor-pointer text-[#004D98] hover:text-[#DB0030] transition">
                  <ShoppingCart size={22} />
                  {cartCount > 0 && (
                    <span className="absolute -top-2 -right-3 text-xs font-bold text-white bg-[#DB0030] w-[20px] h-[20px] rounded-full flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </div>
              </Link>

              {isLoggedIn ? (
                <div className="relative" ref={profileMenuRef}>
                  <button onClick={() => setShowProfileMenu((prev) => !prev)} className="flex items-center gap-2 text-[#004D98] hover:text-[#DB0030] transition">
                    <Image src="/images/profileIcon.png" width={40} height={40} alt="Profile" className="rounded-full object-cover border-2 border-[#004D98]" />
                  </button>
                  {showProfileMenu && (
                    <div className="absolute right-0 mt-2 w-44 bg-white border border-[#004D98]/20 rounded-md shadow-lg py-2 z-50">
                      <Link href="/orders" className="block px-4 py-2 text-[#004D98] hover:bg-[#FFED02]/20 transition">
                        My Orders
                      </Link>
                      <button onClick={() => { setIsLoggedIn(false); setShowProfileMenu(false) }} className="block w-full text-left px-4 py-2 text-[#004D98] hover:bg-[#DB0030]/20 transition">
                        Logout
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Button onClick={() => setShowLoginForm(true)} className="text-sm font-semibold px-4 py-2 bg-[#004D98] text-white hover:bg-[#DB0030] transition">
                  Log In
                </Button>
              )}
            </div>
          </div>

          {/* Mobile Controls */}
          <div className="lg:hidden flex items-center gap-2">
            <Button variant="outline" className="text-sm shadow-sm border border-[#004D98] text-[#004D98] px-3 py-1.5" onClick={() => toggleMenu('search')}>
              <Search size={18} />
            </Button>
            <button onClick={() => toggleMenu('menu')} aria-label="Toggle menu" className="w-10 h-10 bg-[#004D98] text-white rounded-full flex items-center justify-center z-50 transition hover:bg-[#DB0030]">
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </main>

        {/* Mobile Search */}
        {searchActive && (
          <div className="px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24 py-4 border-t border-[#004D98]/20 bg-white flex flex-col sm:flex-row gap-4 sm:gap-6 items-center justify-center">
            <div className="relative w-full max-w-md">
              <input
                ref={inputRef}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                placeholder="Search for a product"
                className="w-full border border-[#004D98]/40 px-4 py-2 rounded-full text-base text-[#004D98] placeholder-gray-400 shadow-sm outline-none focus:ring-2 focus:ring-[#004D98]"
              />
              {searchQuery && (
                <button onClick={() => setSearchQuery('')} className="absolute right-4 lg:right-6 xl:right-8 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#DB0030] transition-colors duration-200" aria-label="Clear search">
                  <X size={18} />
                </button>
              )}
            </div>
            <div className="flex gap-2">
              <Button onClick={handleSearch} className="bg-[#004D98] hover:bg-[#DB0030] text-white px-5 py-2 rounded-full text-sm">
                Search
              </Button>
              <Button variant="ghost" onClick={() => setSearchActive(false)} className="bg-[#DB0030] hover:bg-[#004D98] text-white px-5 py-2 rounded-full text-sm">
                Cancel
              </Button>
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="fixed top-16 left-0 w-full bg-white shadow-lg py-6 px-6 flex flex-col gap-5 lg:hidden z-40 max-h-[calc(100vh-64px)] overflow-y-auto">
            {navLinks.map((link) => {
              const isActive = pathname === link.href
              return (
                <Link key={link.name} href={link.href} onClick={() => setMenuOpen(false)} className={`text-[#004D98] text-[15px] font-medium uppercase tracking-wide py-2 transition ${isActive ? 'text-[#DB0030]' : 'hover:text-[#DB0030]'}`}>
                  {link.name}
                </Link>
              )
            })}
            <Link href="/cart" onClick={() => setMenuOpen(false)} className="relative flex items-center gap-2 text-[#004D98] hover:text-[#DB0030] transition text-[15px]">
              <div className="relative">
                <ShoppingCart size={22} />
                {cartCount > 0 && (
                  <span className="absolute -top-2 -right-2 text-xs font-bold text-white bg-[#DB0030] w-[18px] h-[18px] rounded-full flex items-center justify-center leading-none">
                    {cartCount}
                  </span>
                )}
              </div>
              <span>Cart</span>
            </Link>
            {isLoggedIn ? (
              <>
                <Link href="/orders" onClick={() => setMenuOpen(false)} className="w-full text-center py-2 rounded-full bg-[#DB0030] hover:bg-[#004D98] text-white font-semibold text-[15px]">
                  My Orders
                </Link>
                <button onClick={() => { setIsLoggedIn(false); setMenuOpen(false) }} className="w-full py-2 rounded-full bg-[#DB0030] hover:bg-[#004D98] text-white font-semibold text-[15px]">
                  Logout
                </button>
              </>
            ) : (
              <button onClick={() => { setMenuOpen(false); setShowLoginForm(true) }} className="w-full py-2 rounded-full bg-[#004D98] hover:bg-[#DB0030] text-white font-semibold text-[15px]">
                Log In
              </button>
            )}
          </div>
        )}
      </header>

      {/* Login Modal */}
      <Login isOpen={showLoginForm} onClose={() => setShowLoginForm(false)} />
    </>
  )
}
