import { BreadcrumbProps } from "@/types";
import { getCategoryById } from "@/data/Category.data";

const breadcrumbsData: BreadcrumbProps[] = [
  {
    id: 1,
    productName: "Áo Thun Cotton Nam Nữ Unisex",
    categoryProduct: [
      getCategoryById(2), // Thời trang nam
      getCategoryById(21), // Áo
      getCategoryById(100243), // Áo polo
    ],
  },
  {
    id: 2,
    productName: "Váy Dạ Hội Sang Trọng",
    categoryProduct: [
      getCategoryById(1), // Thời trang nữ
      getCategoryById(100102), // Váy
    ],
  },
  {
    id: 3,
    productName: "Điện Thoại Samsung Galaxy S23",
    categoryProduct: [
      getCategoryById(4), // Thiết Bị Điện Gia Dụng
      getCategoryById(41), // Thiết bị điện gia dụng nhỏ
      getCategoryById(411), // Điện thoại
    ],
  },
  {
    id: 4,
    productName: "Laptop Dell XPS 15 2024",
    categoryProduct: [
      getCategoryById(6), // Máy tính & Laptop
      getCategoryById(101942), // Laptop
    ],
  },
  {
    id: 5,
    productName: "Son Môi Lì MAC Ruby Woo",
    categoryProduct: [
      getCategoryById(3), // Sắc đẹp
      getCategoryById(32), // Trang điểm
      getCategoryById(322), // Trang điểm môi
      getCategoryById(101642), // Son môi
    ],
  },
  {
    id: 6,
    productName: "Điều Hòa Daikin 1.5 HP",
    categoryProduct: [
      getCategoryById(4), // Thiết Bị Điện Gia Dụng
      getCategoryById(42), // Thiết bị điện gia dụng lớn
      getCategoryById(421), // Thiết bị làm mát
      getCategoryById(100464), // Điều hòa
    ],
  },
  {
    id: 7,
    productName: "Kính Mát Ray-Ban Chính Hãng",
    categoryProduct: [
      getCategoryById(8), // Phụ Kiện Thời Trang
      getCategoryById(81), // Kính mắt
      getCategoryById(100151), // Kính mát
    ],
  },
  {
    id: 8,
    productName: "Ổ Cứng SSD Samsung 1TB",
    categoryProduct: [
      getCategoryById(6), // Máy tính & Laptop
      getCategoryById(62), // Thiết bị lưu trữ
      getCategoryById(101962), // Ổ Cứng SSD
    ],
  },
  {
    id: 9,
    productName: "Thực Phẩm Chức Năng Bổ Sung Collagen",
    categoryProduct: [
      getCategoryById(7), // Sức Khỏe
      getCategoryById(71), // Thực phẩm chức năng
      getCategoryById(100004), // Hỗ trợ làm đẹp
    ],
  },
  {
    id: 10,
    productName: "Light Novel: Re:Zero - Bắt Đầu Lại Ở Thế Giới Khác",
    categoryProduct: [
      getCategoryById(5), // Sách
      getCategoryById(101554), // Light Novels
    ],
  },
];

export { breadcrumbsData };
