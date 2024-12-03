import { CategoryProps } from "@/types";

const categories: CategoryProps[] = [
  {
    id: 1,
    categoryImageUrl: "https://example.com/images/women-fashion.jpg",
    categoryName: "Thời trang nữ",
  },
  {
    id: 2,
    categoryImageUrl: "https://example.com/images/men-fashion.jpg",
    categoryName: "Thời trang nam",
  },
  {
    id: 3,
    categoryImageUrl: "https://example.com/images/beauty.jpg",
    categoryName: "Sắc đẹp",
  },
  {
    id: 4,
    categoryImageUrl: "https://example.com/images/home-appliances.jpg",
    categoryName: "Thiết Bị Điện Gia Dụng",
  },
  {
    id: 5,
    categoryImageUrl: "https://example.com/images/books.jpg",
    categoryName: "Sách",
  },
  {
    id: 6,
    categoryImageUrl: "https://example.com/images/computers-laptops.jpg",
    categoryName: "Máy tính & Laptop",
  },
  {
    id: 7,
    categoryImageUrl: "https://example.com/images/health.jpg",
    categoryName: "Sức Khỏe",
  },
  {
    id: 8,
    categoryImageUrl: "https://example.com/images/fashion-accessories.jpg",
    categoryName: "Phụ Kiện Thời Trang",
  },
];

const getAllCategory = () => {
  return categories;
}

const getCategoryById = (categoryId: number): CategoryProps => {
  const category = categories.find((category) => category.id === categoryId);
  if(!category) {
    throw new Error(`Category with id ${categoryId} not found`);
  }
  return category;
}

export { categories, getAllCategory, getCategoryById };