// lib/sliders.ts

export type Slide = {
  id: number
  image: string
  title: string
  description: string
  link: string
  cta: string
}

// slides.ts
export const slides: Slide[] = [
  {
    id: 1,
    image: '/HeroImages/Adidas Yeezy Boost 350 V2_2.jpg',
    title: 'Adidas Yeezy Boost 350 V2',
    description: 'Step up your sneaker game with the iconic Adidas Yeezy Boost 350 V2.',
    link: '/categories/adidas',
    cta: 'Explore Adidas',
  },
  {
    id: 2,
    image: '/HeroImages/Nike Air Jordan4.jpg',
    title: 'Nike Air Jordan 4',
    description: 'Experience style and performance with Nike Air Jordan 4.',
    link: '/categories/nike',
    cta: 'Explore Nike',
  },
  {
    id: 3,
    image: '/HeroImages/Reebok Zig Kinetica2.jpg',
    title: 'Reebok Zig Kinetica 2',
    description: 'Run into the future with comfort and style in Reebok Zig Kinetica 2.',
    link: '/categories/reebok',
    cta: 'Explore Reebok',
  },
]


