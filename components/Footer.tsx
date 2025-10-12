'use client'

import React from 'react'
import Link from 'next/link'
import { Lobster } from 'next/font/google'
import {
  Instagram,
  Twitter,
  Facebook,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from 'lucide-react'

const lobster = Lobster({ weight: '400', subsets: ['latin'] })

const Footer: React.FC = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'All Products', href: '/all-products' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ]

  const helpLinks = [
    { name: 'FAQs', href: '/faqs' },
    { name: 'Shipping & Delivery', href: '/delivery' },
    { name: 'Returns & Refunds', href: '/returns' },
    { name: 'Track Order', href: '/track-order' },
  ]

  const socialLinks = [
    { name: 'Instagram', icon: <Instagram size={18} />, href: '#' },
    { name: 'Twitter', icon: <Twitter size={18} />, href: '#' },
    { name: 'Facebook', icon: <Facebook size={18} />, href: '#' },
    { name: 'YouTube', icon: <Youtube size={18} />, href: '#' },
  ]

  return (
    <footer className='bg-[#0A0A0A] text-gray-300 mt-24 md:mt-32 lg:mt-40 px-6 md:px-16 lg:px-24 xl:px-32 pt-14'>
      <div className='flex flex-col md:flex-row justify-between gap-14 pb-10 border-b border-gray-700/50'>
        {/* Brand Info */}
        <div className='w-full md:w-1/3'>
          <h1
            className={`${lobster.className} text-3xl text-[#FFED02] tracking-wide`}
          >
            Sneakerz
          </h1>
          <p className='mt-5 text-sm leading-relaxed text-gray-400 max-w-[350px]'>
            Step up your style game with premium sneakers from top brands.  
            Exclusive drops, authentic pairs, and unbeatable comfort — all in one place.
          </p>

          <div className='mt-6 space-y-2 text-sm text-gray-400'>
            <div className='flex items-center gap-2'>
              <MapPin size={16} className='text-[#FFED02]' />
              <span>Chattogram, Bangladesh</span>
            </div>
            <div className='flex items-center gap-2'>
              <Phone size={16} className='text-[#FFED02]' />
              <span>+880 1234-567890</span>
            </div>
            <div className='flex items-center gap-2'>
              <Mail size={16} className='text-[#FFED02]' />
              <span>support@sneakerz.com</span>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className='flex-1 flex flex-wrap justify-between gap-10 md:gap-20'>
          <div>
            <h3 className='text-lg font-semibold text-white mb-4 border-l-4 border-[#DB0030] pl-2'>
              Quick Links
            </h3>
            <ul className='space-y-2'>
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className='hover:text-[#FFED02] transition duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className='text-lg font-semibold text-white mb-4 border-l-4 border-[#004D98] pl-2'>
              Support
            </h3>
            <ul className='space-y-2'>
              {helpLinks.map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className='hover:text-[#FFED02] transition duration-200 text-sm'
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className='text-lg font-semibold text-white mb-4 border-l-4 border-[#DB0030] pl-2'>
              Follow Us
            </h3>
            <div className='flex items-center gap-4'>
              {socialLinks.map((social, i) => (
                <Link
                  key={i}
                  href={social.href}
                  className='flex items-center justify-center w-9 h-9 rounded-full bg-[#1A1A1A] hover:bg-[#DB0030] hover:text-white transition duration-300'
                  aria-label={social.name}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className='text-center text-sm text-[#ffffff] py-6'>
        © {new Date().getFullYear()} <span className='text-[#FFED02]'>Sneakerz</span> — All Rights Reserved (Made by Mahedy Hasan)
      </div>
    </footer>
  )
}

export default Footer
