import { ProductCardProps } from "@/types";

const products: ProductCardProps[] = [
  {
    id: 1,
    nameProduct: "Classic Italian Pizza Margherita with Fresh Basil",
    image: "https://example.com/images/pizza-margherita.jpg",
    unitPrice: 100000, // Giá đơn vị: 100,000 VNĐ
    specificCoupon: 15, // 15% giảm giá
    listCoupon: [20000, 50000],
  },
  {
    id: 2,
    nameProduct: "Double Cheeseburger with Special Sauce and Pickles",
    image: "https://example.com/images/classic-cheeseburger.jpg",
    unitPrice: 90000, // Giá đơn vị: 90,000 VNĐ
    specificCoupon: 20,
    listCoupon: [30000],
  },
  {
    id: 3,
    nameProduct: "Healthy Caesar Salad with Grilled Chicken and Croutons",
    image: "https://example.com/images/caesar-salad.jpg",
    unitPrice: 70000, // Giá đơn vị: 70,000 VNĐ
    specificCoupon: 10,
    listCoupon: [],
  },
  {
    id: 4,
    nameProduct: "Grilled Chicken Sandwich with Honey Mustard Sauce",
    image: "https://example.com/images/grilled-chicken-sandwich.jpg",
    unitPrice: 80000, // Giá đơn vị: 80,000 VNĐ
    specificCoupon: 25,
    listCoupon: [40000],
  },
  {
    id: 5,
    nameProduct: "Authentic Spaghetti Carbonara with Pancetta and Parmesan",
    image: "https://example.com/images/spaghetti-carbonara.jpg",
    unitPrice: 95000, // Giá đơn vị: 95,000 VNĐ
    specificCoupon: 30,
    listCoupon: [20000, 30000, 50000],
  },
  {
    id: 6,
    nameProduct: "Deluxe Sushi Platter with Fresh Tuna, Salmon, and Shrimp",
    image: "https://example.com/images/sushi-platter.jpg",
    unitPrice: 130000, // Giá đơn vị: 130,000 VNĐ
    specificCoupon: 18,
    listCoupon: [50000],
  },
  {
    id: 7,
    nameProduct: "Tacos al Pastor with Pineapple and Cilantro-Lime Sauce",
    image: "https://example.com/images/tacos-al-pastor.jpg",
    unitPrice: 55000, // Giá đơn vị: 55,000 VNĐ
    specificCoupon: 22,
    listCoupon: [20000, 30000],
  },
  {
    id: 8,
    nameProduct: "Vegetable Stir Fry with Tofu and Sesame Garlic Sauce",
    image: "https://example.com/images/vegetable-stir-fry.jpg",
    unitPrice: 75000, // Giá đơn vị: 75,000 VNĐ
    specificCoupon: 12,
    listCoupon: [],
  },
  {
    id: 9,
    nameProduct: "Slow-Cooked BBQ Ribs with Smoky Barbecue Sauce",
    image: "https://example.com/images/bbq-ribs.jpg",
    unitPrice: 150000, // Giá đơn vị: 150,000 VNĐ
    specificCoupon: 28,
    listCoupon: [40000, 60000],
  },
  {
    id: 10,
    nameProduct: "Gooey Chocolate Brownie with Melted Dark Chocolate Center",
    image: "https://example.com/images/chocolate-brownie.jpg",
    unitPrice: 40000, // Giá đơn vị: 40,000 VNĐ
    specificCoupon: 5,
    listCoupon: [20000],
  },
];

const getProductById = (productId: number): ProductCardProps => {
  const product = products.find((product) => product.id === productId);
  if (!product) {
    throw new Error(`Product with id ${productId} not found`);
  }
  return product;
};

export { products, getProductById };
