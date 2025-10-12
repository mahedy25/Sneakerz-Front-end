"use client"

import React from 'react'
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react'
import { Lobster_Two } from 'next/font/google'
import { motion } from 'framer-motion'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

export default function Contact() {
  return (
    <main className="min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-10 py-12 bg-white text-[#0D0D0D]">
      <div className="w-full max-w-5xl">
        {/* Header */}
        <section className="text-center mb-12">
          <h1 className={`${lobster.className} text-3xl sm:text-4xl md:text-5xl text-center mb-6`}>
            Contact Us
          </h1>
          <p className="text-gray-700 max-w-2xl mx-auto">
            Have questions, need assistance, or just want to connect?  
            Our team is here to provide you with a premium sneaker shopping experience.
          </p>
        </section>

        {/* Contact Info */}
        <section className="grid md:grid-cols-3 gap-8 mb-16">
          {/* Email */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center border border-[#DB0030]/40 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Mail className="mx-auto mb-4 text-[#DB0030]" size={32} />
            <h3 className="text-lg font-semibold text-[#DB0030] mb-2">Email Us</h3>
            <p className="text-gray-700">support@sneakerz.com</p>
            <p className="text-gray-700">sales@sneakerz.com</p>
          </motion.div>

          {/* Phone */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center border border-[#DB0030]/40 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <Phone className="mx-auto mb-4 text-[#DB0030]" size={32} />
            <h3 className="text-lg font-semibold text-[#DB0030] mb-2">Call Us</h3>
            <p className="text-gray-700">+1 (555) 123-4567</p>
            <p className="text-gray-700">+1 (555) 987-6543</p>
          </motion.div>

          {/* Address */}
          <motion.div
            className="bg-white rounded-lg shadow-lg p-6 text-center border border-[#DB0030]/40 hover:shadow-2xl transition"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
          >
            <MapPin className="mx-auto mb-4 text-[#DB0030]" size={32} />
            <h3 className="text-lg font-semibold text-[#DB0030] mb-2">Visit Us</h3>
            <p className="text-gray-700">123 Sneaker Street</p>
            <p className="text-gray-700">Los Angeles, CA 90001</p>
          </motion.div>
        </section>

        {/* Social Media */}
        <section className="text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-[#DB0030] mb-6">Follow Us</h2>
          <div className="flex justify-center gap-6">
            {[Instagram, Facebook, Twitter, Youtube].map((Icon, idx) => (
              <motion.a
                key={idx}
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-[#DB0030]/20 hover:bg-[#DB0030] hover:text-[#ffed02] transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2, duration: 1, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <Icon size={24} />
              </motion.a>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}
