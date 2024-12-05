"use client";
import Image from "next/image";
import {
  ButtonSolid,
  Input,
  InputRadio,
  ButtonBase,
  ButtonOutline,
  ProductCard,
  CategoryCard,
  CategoryModal,
} from "@/components";
import { XMarkIcon, CheckIcon } from "@heroicons/react/24/solid";
import { products, getProductById } from "@/data/ProductCard.data";
import {
  categories,
  getAllCategory,
  getCategoryById,
} from "@/data/Category.data";
import { useEffect, useState } from "react";
import { CategoryProps } from "@/types";

export default function Home() {
  const [category, setCategory] = useState<CategoryProps[]>([]);
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const handleOpenModal = () => {
    setIsOpenModal(true);
  };
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleModal = (ModalCategory?: CategoryProps[]) => {
    ModalCategory ? setCategory(ModalCategory) : "";
    setIsOpenModal(false);
  };

  useEffect(() => {
    console.log('category: ', category);
  }, [category]);

  return (
    <div className="flex justify-center items-center bg-Secondary">
      <ButtonSolid content="Open Modal" onClick={() => handleOpenModal()} />
      <ButtonSolid content="Close Modal" onClick={() => handleCloseModal()} />
      <CategoryModal
        isOpenModal={isOpenModal}
        setIsOpenModal={setIsOpenModal}
        onSubmit={handleModal}
      />
    </div>
  );
}
