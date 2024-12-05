import { CategoryProps } from "@/types";

const categories: CategoryProps[] = [
  {
    id: 1,
    categoryImageUrl: "https://example.com/images/women-fashion.jpg",
    categoryName: "Thời trang nữ",
    subCategory: [11, 100102],
  },
  {
    id: 11,
    categoryImageUrl: "https://example.com/images/women-clothing.jpg", // Changed to reflect category
    categoryName: "Áo",
    subCategory: [100352, 100353],
  },
  {
    id: 100102,
    categoryImageUrl: "https://example.com/images/women-dresses.jpg", // Changed to reflect category
    categoryName: "Váy",
    subCategory: [],
  },
  {
    id: 100352,
    categoryImageUrl: "https://example.com/images/t-shirt.jpg", // Changed to reflect specific item
    categoryName: "Áo thun",
    subCategory: [],
  },
  {
    id: 100353,
    categoryImageUrl: "https://example.com/images/shirt.jpg", // Changed to reflect specific item
    categoryName: "Áo sơ mi",
    subCategory: [],
  },
  {
    id: 2,
    categoryImageUrl: "https://example.com/images/men-fashion.jpg",
    categoryName: "Thời trang nam",
    subCategory: [21, 100056],
  },
  {
    id: 21,
    categoryImageUrl: "https://example.com/images/men-shirts.jpg", // Changed to reflect category
    categoryName: "Áo",
    subCategory: [100243, 100245],
  },
  {
    id: 100056,
    categoryImageUrl: "https://example.com/images/sleepwear.jpg", // Changed to reflect category
    categoryName: "Đồ ngủ",
    subCategory: [],
  },
  {
    id: 100243,
    categoryImageUrl: "https://example.com/images/polo-shirt.jpg", // Changed to reflect item
    categoryName: "Áo polo",
    subCategory: [],
  },
  {
    id: 100245,
    categoryImageUrl: "https://example.com/images/tank-top.jpg", // Changed to reflect item
    categoryName: "Áo ba lỗ",
    subCategory: [],
  },
  {
    id: 3,
    categoryImageUrl: "https://example.com/images/beauty.jpg",
    categoryName: "Sắc đẹp",
    subCategory: [31, 32],
  },
  {
    id: 31,
    categoryImageUrl: "https://example.com/images/hair-care.jpg", // Changed to reflect category
    categoryName: "Chăm sóc tóc",
    subCategory: [100869, 100870],
  },
  {
    id: 32,
    categoryImageUrl: "https://example.com/images/makeup.jpg", // Changed to reflect category
    categoryName: "Trang điểm",
    subCategory: [321, 322],
  },
  {
    id: 321,
    categoryImageUrl: "https://example.com/images/eye-makeup.jpg", // Changed to reflect item
    categoryName: "Trang điểm mắt",
    subCategory: [101639, 101640],
  },
  {
    id: 101639,
    categoryImageUrl: "https://example.com/images/mascara.jpg", // Changed to reflect item
    categoryName: "Mascara",
    subCategory: [],
  },
  {
    id: 101640,
    categoryImageUrl: "https://example.com/images/eyebrow-pencil.jpg", // Changed to reflect item
    categoryName: "Kẻ mày",
    subCategory: [],
  },
  {
    id: 322,
    categoryImageUrl: "https://example.com/images/lip-makeup.jpg", // Changed to reflect item
    categoryName: "Trang điểm môi",
    subCategory: [101642, 101643],
  },
  {
    id: 101642,
    categoryImageUrl: "https://example.com/images/lipstick.jpg", // Changed to reflect item
    categoryName: "Son môi",
    subCategory: [321, 322],
  },
  {
    id: 101643,
    categoryImageUrl: "https://example.com/images/lip-gloss.jpg", // Changed to reflect item
    categoryName: "Son bóng",
    subCategory: [321, 322],
  },
  {
    id: 4,
    categoryImageUrl: "https://example.com/images/home-appliances.jpg",
    categoryName: "Thiết Bị Điện Gia Dụng",
    subCategory: [41, 42],
  },
  {
    id: 41,
    categoryImageUrl: "https://example.com/images/small-appliances.jpg", // Changed to reflect category
    categoryName: "Thiết bị điện gia dụng nhỏ",
    subCategory: [411],
  },
  {
    id: 411,
    categoryImageUrl: "https://example.com/images/phone.jpg", // Changed to reflect item
    categoryName: "Điện thoại",
    subCategory: [],
  },
  {
    id: 100454,
    categoryImageUrl: "https://example.com/images/wired-phone.jpg", // Changed to reflect item
    categoryName: "Điện thoại có dây",
    subCategory: [],
  },
  {
    id: 100455,
    categoryImageUrl: "https://example.com/images/wireless-phone.jpg", // Changed to reflect item
    categoryName: "Điện thoại không dây",
    subCategory: [],
  },
  {
    id: 42,
    categoryImageUrl: "https://example.com/images/large-appliances.jpg", // Changed to reflect category
    categoryName: "Thiết bị điện gia dụng lớn",
    subCategory: [421],
  },
  {
    id: 421,
    categoryImageUrl: "https://example.com/images/cooling-appliances.jpg", // Changed to reflect category
    categoryName: "Thiết bị làm mát",
    subCategory: [100464, 100466],
  },
  {
    id: 100464,
    categoryImageUrl: "https://example.com/images/air-conditioner.jpg", // Changed to reflect item
    categoryName: "Điều hòa",
    subCategory: [],
  },
  {
    id: 100466,
    categoryImageUrl: "https://example.com/images/fan.jpg", // Changed to reflect item
    categoryName: "Quạt",
    subCategory: [],
  },
  {
    id: 5,
    categoryImageUrl: "https://example.com/images/books.jpg",
    categoryName: "Sách",
    subCategory: [101554, 101555, 101556],
  },
  {
    id: 101554,
    categoryImageUrl: "https://example.com/images/light-novels.jpg", // Changed to reflect category
    categoryName: "Light Novels",
    subCategory: [],
  },
  {
    id: 101555,
    categoryImageUrl: "https://example.com/images/classic-literature.jpg", // Changed to reflect category
    categoryName: "Văn Học Kinh Điển",
    subCategory: [],
  },
  {
    id: 101556,
    categoryImageUrl: "https://example.com/images/fantasy-literature.jpg", // Changed to reflect category
    categoryName: "Văn Học Giả Tưởng",
    subCategory: [],
  },
  {
    id: 6,
    categoryImageUrl: "https://example.com/images/computers-laptops.jpg",
    categoryName: "Máy tính & Laptop",
    subCategory: [61, 62, 101942],
  },
  {
    id: 61,
    categoryImageUrl: "https://example.com/images/desktops.jpg", // Changed to reflect category
    categoryName: "Máy Tính Bàn",
    subCategory: [101944, 101946],
  },
  {
    id: 101944,
    categoryImageUrl: "https://example.com/images/desktop-computers.jpg", // Changed to reflect item
    categoryName: "Bộ Máy Tính Bàn",
    subCategory: [],
  },
  {
    id: 101946,
    categoryImageUrl: "https://example.com/images/servers.jpg", // Changed to reflect item
    categoryName: "Máy Chủ",
    subCategory: [],
  },
  {
    id: 62,
    categoryImageUrl: "https://example.com/images/storage-devices.jpg", // Changed to reflect category
    categoryName: "Thiết Bị Lưu Trữ",
    subCategory: [101961, 101962],
  },
  {
    id: 101961,
    categoryImageUrl: "https://example.com/images/external-hard-drives.jpg", // Changed to reflect item
    categoryName: "Ổ Cứng Di Động",
    subCategory: [],
  },
  {
    id: 101962,
    categoryImageUrl: "https://example.com/images/ssd-drives.jpg", // Changed to reflect item
    categoryName: "Ổ Cứng SSD",
    subCategory: [],
  },
  {
    id: 101942,
    categoryImageUrl: "https://example.com/images/laptops.jpg", // Changed to reflect item
    categoryName: "Laptop",
    subCategory: [],
  },
  {
    id: 7,
    categoryImageUrl: "https://example.com/images/health.jpg",
    categoryName: "Sức Khỏe",
    subCategory: [71, 72],
  },
  {
    id: 71,
    categoryImageUrl: "https://example.com/images/supplements.jpg", // Changed to reflect category
    categoryName: "Thực phẩm chức năng",
    subCategory: [100004, 100005],
  },
  {
    id: 100004,
    categoryImageUrl: "https://example.com/images/beauty-supplements.jpg", // Changed to reflect item
    categoryName: "Hỗ trợ làm đẹp",
    subCategory: [],
  },
  {
    id: 100005,
    categoryImageUrl: "https://example.com/images/muscle-supplements.jpg", // Changed to reflect item
    categoryName: "Hỗ trợ tăng cơ",
    subCategory: [],
  },
  {
    id: 72,
    categoryImageUrl: "https://example.com/images/medical-supplies.jpg", // Changed to reflect category
    categoryName: "Vật tư y tế",
    subCategory: [100125, 100128],
  },
  {
    id: 100125,
    categoryImageUrl: "https://example.com/images/medical-equipment.jpg", // Changed to reflect item
    categoryName: "Ống nghe y tế",
    subCategory: [],
  },
  {
    id: 100128,
    categoryImageUrl: "https://example.com/images/medical-gloves-masks.jpg", // Changed to reflect item
    categoryName: "Bao tay và khẩu trang y tế",
    subCategory: [],
  },
  {
    id: 8,
    categoryImageUrl: "https://example.com/images/fashion-accessories.jpg",
    categoryName: "Phụ Kiện Thời Trang",
    subCategory: [100028, 100029, 81],
  },
  {
    id: 100028,
    categoryImageUrl: "https://example.com/images/hats.jpg", // Changed to reflect item
    categoryName: "Mũ",
    subCategory: [],
  },
  {
    id: 100029,
    categoryImageUrl: "https://example.com/images/necklaces.jpg", // Changed to reflect item
    categoryName: "Dây chuyền",
    subCategory: [],
  },
  {
    id: 81,
    categoryImageUrl: "https://example.com/images/sunglasses.jpg", // Changed to reflect category
    categoryName: "Kính mắt",
    subCategory: [100151, 100152],
  },
  {
    id: 100151,
    categoryImageUrl: "https://example.com/images/sunglasses.jpg", // Changed to reflect item
    categoryName: "Kính mát",
    subCategory: [],
  },
  {
    id: 100152,
    categoryImageUrl: "https://example.com/images/glasses-frames.jpg", // Changed to reflect item
    categoryName: "Gọng kính",
    subCategory: [],
  },
];

const getAllCategory = () => {
  return categories;
};

const getCategoryById = (categoryId: number): CategoryProps => {
  const category = categories.find((category) => category.id === categoryId);
  if (!category) {
    throw new Error(`Category with id ${categoryId} not found`);
  }
  return category;
};

const getSubCategoryById = (categoryId: number): CategoryProps[] => {
  const ans: CategoryProps[] = [];
  categories.forEach((category) => {
    if (category.id === categoryId) {
      category.subCategory?.forEach((sub) => {
        ans.push(getCategoryById(sub));
      });
    }
  });
  return ans;
};

export { categories, getAllCategory, getCategoryById, getSubCategoryById };
