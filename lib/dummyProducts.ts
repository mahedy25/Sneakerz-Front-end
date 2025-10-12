export type Product = {
  id: string;
  title: string;
  price: number;
  offerPrice: number;
  description: string;
  category: string;
  image: string[];
  createdAt: string;
  updatedAt: string;
  instock: string;
  ratings: number[];
};

export const products: Product[] = [
  // ====================== ADIDAS ======================
  {
    id: 'adidas-gazelle',
    title: 'Adidas Gazelle',
    price: 120,
    offerPrice: 99,
    description: 'Adidas Gazelle — classic style meets everyday comfort. A timeless sneaker loved for its suede upper and retro design.',
    category: 'Adidas',
    image: [
      '/productImages/Adidas Gazelle1.jpg',
      '/productImages/Adidas Gazelle2.jpg',
      '/productImages/Adidas Gazelle3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5, 4]
  },
  {
    id: 'adidas-pureboost',
    title: 'Adidas Pureboost',
    price: 140,
    offerPrice: 119,
    description: 'Adidas Pureboost — energy-returning cushioning built for comfort and running performance.',
    category: 'Adidas',
    image: ['/productImages/Adidas Pureboost1.jpg'],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },
  {
    id: 'adidas-samba',
    title: 'Adidas Samba OG',
    price: 110,
    offerPrice: 95,
    description: 'Adidas Samba OG — an iconic indoor training shoe reimagined for the streets.',
    category: 'Adidas',
    image: [
      '/productImages/Adidas Samba OG1.jpg',
      '/productImages/Adidas Samba OG2.jpg',
      '/productImages/Adidas Samba OG3.jpg',
      '/productImages/Adidas Samba OG4.jpg',
      '/productImages/Adidas Samba OG5.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [4, 5, 4]
  },
  {
    id: 'adidas-superstar',
    title: 'Adidas Superstar',
    price: 130,
    offerPrice: 109,
    description: 'Adidas Superstar — timeless shell-toe design that never goes out of fashion.',
    category: 'Adidas',
    image: ['/productImages/Adidas Superstar1.jpg'],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },
  {
    id: 'adidas-ultraboost',
    title: 'Adidas Ultraboost',
    price: 180,
    offerPrice: 155,
    description: 'Adidas Ultraboost — ultimate comfort and energy return with every step.',
    category: 'Adidas',
    image: [
      '/productImages/Adidas Ultraboost1.jpg',
      '/productImages/Adidas Ultraboost2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 5, 4]
  },
  {
    id: 'adidas-yeezy-boost',
    title: 'Adidas Yeezy Boost 350 V2',
    price: 250,
    offerPrice: 220,
    description: 'Adidas Yeezy Boost 350 V2 — the perfect blend of streetwear and innovation.',
    category: 'Adidas',
    image: [
      '/productImages/Adidas Yeezy Boost 350 V2_1.jpg',
      '/productImages/Adidas Yeezy Boost 350 V2_2.jpg',
      '/productImages/Adidas Yeezy Boost 350 V2_3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },

  // ====================== CONVERSE ======================
  {
    id: 'converse-cdg-play',
    title: 'Converse CDG Play Collaboration',
    price: 160,
    offerPrice: 145,
    description: 'Converse CDG Play Collaboration — a stylish fusion of streetwear and minimalist design.',
    category: 'Converse',
    image: [
      '/productImages/Converse CDG Play Collaboration1.jpg',
      '/productImages/Converse CDG Play Collaboration2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 5, 4]
  },
  {
    id: 'converse-chuck-taylor',
    title: 'Converse Chuck Taylor All Star',
    price: 85,
    offerPrice: 70,
    description: 'Converse Chuck Taylor — the world’s most iconic sneaker with a classic design.',
    category: 'Converse',
    image: [
      '/productImages/Converse Chuck Taylor All Star1.jpg',
      '/productImages/Converse Chuck Taylor All Star2.jpg',
      '/productImages/Converse Chuck Taylor All Star3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 4]
  },
  {
    id: 'converse-one-star',
    title: 'Converse One Star',
    price: 95,
    offerPrice: 80,
    description: 'Converse One Star — bold style with soft suede construction.',
    category: 'Converse',
    image: [
      '/productImages/Converse One Star1.jpg',
      '/productImages/Converse One Star2.jpg',
      '/productImages/Converse One Star3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },
  {
    id: 'converse-run-star',
    title: 'Converse Run Star Hike',
    price: 120,
    offerPrice: 99,
    description: 'Converse Run Star Hike — elevated platform design for a bold modern look.',
    category: 'Converse',
    image: [
      '/productImages/Converse Run Star Hike1.jpg',
      '/productImages/Converse Run Star Hike2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [4, 5, 4]
  },

  // ====================== NIKE ======================
  {
    id: 'nike-air-jordan',
    title: 'Nike Air Jordan',
    price: 190,
    offerPrice: 169,
    description: 'Nike Air Jordan — legendary heritage, modern performance.',
    category: 'Nike',
    image: [
      '/productImages/Nike Air Jordan1.jpg',
      '/productImages/Nike Air Jordan2.jpg',
      '/productImages/Nike Air Jordan3.jpg',
      '/productImages/Nike Air Jordan4.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },
  {
    id: 'nike-air-max',
    title: 'Nike Air Max',
    price: 150,
    offerPrice: 129,
    description: 'Nike Air Max — unmatched comfort with visible Air cushioning.',
    category: 'Nike',
    image: [
      '/productImages/Nike Air Max1.jpg',
      '/productImages/Nike Air Max2.jpg',
      '/productImages/Nike Air Max3.jpg',
      '/productImages/Nike Air Max4.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 5, 5, 5, 5, 5 ,5,5,5]
  },
  {
    id: 'nike-air-vapormax',
    title: 'Nike Air VaporMax',
    price: 210,
    offerPrice: 185,
    description: 'Nike Air VaporMax — the lightest, most responsive Air unit ever made.',
    category: 'Nike',
    image: [
      '/productImages/Nike Air VaporMax1.jpg',
      '/productImages/Nike Air VaporMax2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },
  {
    id: 'nike-blazer',
    title: 'Nike Blazer Mid',
    price: 110,
    offerPrice: 95,
    description: 'Nike Blazer Mid — retro basketball styling redefined for today.',
    category: 'Nike',
    image: [
      '/productImages/Nike Blazer Mid1.jpg',
      '/productImages/Nike Blazer Mid2.jpg',
      '/productImages/Nike Blazer Mid3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [4, 5, 4]
  },
  {
    id: 'nike-pegasus',
    title: 'Nike Pegasus 41',
    price: 130,
    offerPrice: 109,
    description: 'Nike Pegasus 41 — responsive cushioning and a comfortable everyday ride.',
    category: 'Nike',
    image: [
      '/productImages/Nike Pegasus 41_1.jpg',
      '/productImages/Nike Pegasus 41_2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 4]
  },
  {
    id: 'nike-sb-dunk',
    title: 'Nike SB Dunk Low',
    price: 120,
    offerPrice: 105,
    description: 'Nike SB Dunk Low — classic skate style with premium comfort.',
    category: 'Nike',
    image: [
      '/productImages/Nike SB Dunk Low1.jpg',
      '/productImages/Nike SB Dunk Low2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 5, 4]
  },

  // ====================== NEW BALANCE ======================
  {
    id: 'new-balance-550',
    title: 'New Balance 550',
    price: 130,
    offerPrice: 110,
    description: 'New Balance 550 — retro basketball-inspired silhouette for a timeless look.',
    category: 'new-balance',
    image: [
      '/productImages/New Balance 550_1.jpg',
      '/productImages/New Balance 550_2.jpg',
      '/productImages/New Balance 550_3.jpg',
      '/productImages/New Balance 550_4.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 4]
  },
  {
    id: 'new-balance-990v6',
    title: 'New Balance 990v6',
    price: 200,
    offerPrice: 180,
    description: 'New Balance 990v6 — iconic comfort and stability built to last.',
    category: 'new-balance',
    image: [
      '/productImages/New Balance 990v6_1.jpg',
      '/productImages/New Balance 990v6_2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 5, 5, 4]
  },

  // ====================== PUMA ======================
  {
    id: 'puma-cali-dream',
    title: 'Puma Cali Dream',
    price: 110,
    offerPrice: 95,
    description: 'Puma Cali Dream — laid-back California style with a chunky sole.',
    category: 'Puma',
    image: [
      '/productImages/Puma Cali Dream1.jpg',
      '/productImages/Puma Cali Dream2.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [4, 5, 4]
  },
  {
    id: 'puma-clyde',
    title: 'Puma Clyde OG',
    price: 100,
    offerPrice: 89,
    description: 'Puma Clyde OG — heritage basketball sneaker with street-ready appeal.',
    category: 'Puma',
    image: [
      '/productImages/Puma Clyde OG1.jpg',
      '/productImages/Puma Clyde OG2.jpg',
      '/productImages/Puma Clyde OG3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 4]
  },
  {
    id: 'puma-future-rider',
    title: 'Puma Future Rider',
    price: 95,
    offerPrice: 80,
    description: 'Puma Future Rider — bold color blocking meets everyday comfort.',
    category: 'Puma',
    image: [
      '/productImages/Puma Future Rider1.jpg',
      '/productImages/Puma Future Rider2.jpg',
      '/productImages/Puma Future Rider3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },
  {
    id: 'puma-rs-x',
    title: 'Puma RS-X',
    price: 125,
    offerPrice: 109,
    description: 'Puma RS-X — bold and chunky with ultimate cushioning comfort.',
    category: 'Puma',
    image: [
      '/productImages/Puma RS-X1.jpg',
      '/productImages/Puma RS-X2.jpg',
      '/productImages/Puma RS-X3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [4, 5, 4]
  },
  {
    id: 'puma-suede-classic',
    title: 'Puma Suede Classic',
    price: 90,
    offerPrice: 75,
    description: 'Puma Suede Classic — timeless design, premium suede upper, and unbeatable comfort.',
    category: 'Puma',
    image: [
      '/productImages/Puma Suede Classic1.jpg',
      '/productImages/Puma Suede Classic2.jpg',
      '/productImages/Puma Suede Classic3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  },

  // ====================== REEBOK ======================
  {
    id: 'reebok-club-c-85',
    title: 'Reebok Club C 85',
    price: 95,
    offerPrice: 80,
    description: 'Reebok Club C 85 — a clean court style with everyday comfort.',
    category: 'Reebok',
    image: [
      '/productImages/Reebok Club C 85_1.jpg',
      '/productImages/Reebok Club C 85_2.jpg',
      '/productImages/Reebok Club C 85_3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 4]
  },
  {
    id: 'reebok-zig-kinetica',
    title: 'Reebok Zig Kinetica',
    price: 120,
    offerPrice: 99,
    description: 'Reebok Zig Kinetica — futuristic design powered by energy-returning cushioning.',
    category: 'Reebok',
    image: [
      '/productImages/Reebok Zig Kinetica1.jpg',
      '/productImages/Reebok Zig Kinetica2.jpg',
      '/productImages/Reebok Zig Kinetica3.jpg'
    ],
    createdAt: '2025-01-01',
    updatedAt: '2025-01-01',
    instock: 'true',
    ratings: [5, 4, 5]
  }
];

