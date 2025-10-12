"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Link from 'next/link'
import { Lobster_Two } from 'next/font/google'
import { motion } from 'framer-motion'

const lobster = Lobster_Two({ weight: '400', subsets: ['latin'] })

export default function FAQsTwo() {
    const faqItems = [
        {
            id: 'item-1',
            question: 'How long does shipping take?',
            answer: 'Standard shipping takes 3-5 business days, depending on your location. Express shipping options are available at checkout for 1-2 business day delivery.',
        },
        {
            id: 'item-2',
            question: 'What payment methods do you accept?',
            answer: 'We accept all major credit cards (Visa, Mastercard, American Express), PayPal, Apple Pay, and Google Pay. For enterprise customers, we also offer invoicing options.',
        },
        {
            id: 'item-3',
            question: 'Can I change or cancel my order?',
            answer: 'You can modify or cancel your order within 1 hour of placing it. After this window, please contact our customer support team who will assist you with any changes.',
        },
        {
            id: 'item-4',
            question: 'Do you ship internationally?',
            answer: "Yes, we ship to over 50 countries worldwide. International shipping typically takes 7-14 business days. Additional customs fees may apply depending on your country's import regulations.",
        },
        {
            id: 'item-5',
            question: 'What is your return policy?',
            answer: 'We offer a 30-day return policy for most items. Products must be in original condition with tags attached. Some specialty items may have different return terms, which will be noted on the product page.',
        },
    ]

    return (
        <section className="py-16 md:py-24">
            <div className="mx-auto max-w-5xl px-4 md:px-6">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className={`${lobster.className} text-[#DB0030] text-3xl font-bold md:text-4xl lg:text-5xl`}>Frequently Asked Questions</h2>
                    <p className="text-muted-foreground mt-4 text-balance">Discover quick and comprehensive answers to common questions about our platform, services, and features.</p>
                </div>

                <div className="mx-auto mt-12 max-w-xl">
                    <Accordion
                        type="single"
                        collapsible
                        className="bg-card ring-muted w-full rounded-2xl border px-8 py-3 shadow-sm ring-4 dark:ring-0">
                        {faqItems.map((item, index) => (
                            <AccordionItem
                                key={item.id}
                                value={item.id}
                                className="border-dashed">
                                
                                {/* Animating the AccordionTrigger (Question) */}
                                <motion.div
                                    whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                                    initial={{ opacity: 0, y: -20 }} // Start hidden and above
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                    viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                                >
                                    <AccordionTrigger className="cursor-pointer text-base hover:no-underline text-[#004D98]">
                                        {item.question}
                                    </AccordionTrigger>
                                </motion.div>

                                {/* Animating the AccordionContent (Answer) */}
                                <AccordionContent>
                                    <motion.div
                                        whileInView={{ opacity: 1, y: 0 }} // Trigger animation when in view
                                        initial={{ opacity: 0, y: 20 }} // Start hidden and below
                                        transition={{ delay: index * 0.1 + 0.2, duration: 0.5 }}
                                        viewport={{ once: true, amount: 0.2 }} // Trigger when 20% of the element is visible
                                    >
                                        <p className="text-base">{item.answer}</p>
                                    </motion.div>
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>

                    <p className="text-muted-foreground mt-6 px-8">
                        Can&apos;t find what you&apos;re looking for? Contact our{' '}
                        <Link
                            href="#"
                            className="text-[#DB0030] font-medium hover:underline">
                            customer support team
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}
