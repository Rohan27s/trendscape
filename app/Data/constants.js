export const BRAND_NAME = "TRENDSCAPE";



export const PRODUCTS = [
  { 
    id: "1", 
    name: 'Blue Striped T-Shirt', 
    price: 250, 
    brand: 'Adidas', 
    rating: 4.5, 
    description: 'This blue striped t-shirt is perfect for casual wear. Made from soft cotton material, it offers comfort and style.',
    sizes: ['S', 'M', 'L', 'XL'], 
    colors: ['Blue', 'White', 'Black'], 
    quantity: {
      Blue: { S: 10, M: 15, L: 20, XL: 12 },
      White: { S: 8, M: 10, L: 18, XL: 14 },
      Black: { S: 12, M: 18, L: 22, XL: 10 }
    }
  },
  { 
    id: "2", 
    name: 'Black Leather Shoes', 
    price: 500, 
    brand: 'Nike', 
    rating: 4.2, 
    description: 'Step up your shoe game with these sleek black leather shoes from Nike. Perfect for both formal and casual occasions.',
    sizes: ['7', '8', '9', '10'], 
    colors: ['Black'], 
    quantity: {
      Black: { '7': 10, '8': 15, '9': 20, '10': 12 }
    }
  },
  { 
    id: "3", 
    name: 'Canvas Backpack', 
    price: 350, 
    brand: 'Puma', 
    rating: 4.7, 
    description: 'Carry your essentials in style with this durable canvas backpack from Puma. It features multiple compartments for organization.',
    sizes: ['One Size'], 
    colors: ['Black', 'Red', 'Blue'], 
    quantity: {
      Black: { 'One Size': 20 },
      Red: { 'One Size': 15 },
      Blue: { 'One Size': 18 }
    }
  },
  { 
    id: "4", 
    name: 'Graphic Print Sweatshirt', 
    price: 300, 
    brand: 'Gucci', 
    rating: 4.8, 
    description: `Stay cozy and stylish with this graphic print sweatshirt from Adidas. Made from high-quality fabric, it's perfect for chilly days.`,
    sizes: ['S', 'M', 'L'], 
    colors: ['Black', 'Gray'], 
    quantity: {
      Black: { S: 15, M: 20, L: 18 },
      Gray: { S: 12, M: 15, L: 16 }
    }
  },
  { 
    id: "5", 
    name: 'White Sneakers', 
    price: 400, 
    brand: 'Zara', 
    rating: 4.3, 
    description: 'Complete your casual look with these stylish white sneakers from Nike. They offer comfort and versatility for everyday wear.',
    sizes: ['6', '7', '8', '9', '10'], 
    colors: ['White'], 
    quantity: {
      White: { '6': 10, '7': 15, '8': 20, '9': 18, '10': 12 }
    }
  },
  { 
    id: "6", 
    name: 'Denim Shoulder Bag', 
    price: 450, 
    brand: 'Denim', 
    rating: 4.6, 
    description: `Add a touch of casual chic to your outfit with this denim shoulder bag from Denim. It's spacious and trendy, perfect for everyday use.`,
    sizes: ['One Size'], 
    colors: ['Denim Blue'], 
    quantity: {
      'Denim Blue': { 'One Size': 25 }
    }
  },
  { 
    id: "7", 
    name: 'Red Plaid Shirt', 
    price: 350, 
    brand: 'Levi\'s', 
    rating: 4.4, 
    description: 'Get the classic lumberjack look with this red plaid shirt from Levi\'s. Made from soft flannel material, it offers both style and comfort.',
    sizes: ['S', 'M', 'L'], 
    colors: ['Red'], 
    quantity: {
      Red: { S: 15, M: 20, L: 18 }
    }
  },
  { 
    id: "8", 
    name: 'Watch', 
    price: 350, 
    brand: 'Apple', 
    rating: 4.4, 
    description: 'Get the classic lumberjack look with this red plaid shirt from Apple. Made from soft flannel material, it offers both style and comfort.',
    sizes: ['S', 'M', 'L'], 
    colors: ['Red'], 
    quantity: {
      Red: { S: 15, M: 20, L: 18 }
    }
  },
]

export const CATEGORIES = PRODUCTS.reduce((categories, product) => {
  const existingCategory = categories.find(category => category.name === product.brand);
  if (!existingCategory) {
    categories.push({ name: product.brand, url: `/brands/${product.brand.toLowerCase().replace(/\s+/g, '-')}` });
  }
  return categories;
}, []);